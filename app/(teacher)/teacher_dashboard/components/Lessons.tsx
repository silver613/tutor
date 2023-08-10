'use client';

import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
// Data grid imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import {
	GridRowsProp,
	GridRowModesModel,
	GridRowModes,
	DataGrid,
	GridColDef,
	GridToolbarContainer,
	GridActionsCellItem,
	GridEventListener,
	GridRowId,
	GridRowModel,
	GridRowEditStopReasons,
} from '@mui/x-data-grid';
import { randomCreatedDate, randomTraderName, randomId, randomArrayItem } from '@mui/x-data-grid-generator';
import CircularProgress from '@mui/material/CircularProgress';
// GraphQL API imports
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import * as queries from '~/graphql/queries';
import { Lesson, ListLessonsQuery, LessonsByOwnerIDQuery, Category, ListCategoriesQuery } from '~/API';
// Redux imports
import { useSelector } from 'react-redux';
import { selectUser } from '~/slices/userSlice';
// Currency Imports
import { CurrencyData } from '~/shared/CurrencyData';

interface EditToolbarProps {
	setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
	setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void;
}
function EditToolbar(props: EditToolbarProps) {
	const { setRows, setRowModesModel } = props;

	const handleClick = () => {
		const id = randomId();
		setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
		setRowModesModel((oldModel) => ({
			...oldModel,
			[id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
		}));
	};

	return (
		<GridToolbarContainer>
			<Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
				Add record
			</Button>
		</GridToolbarContainer>
	);
}

export default function Lessons() {
	const [rows, setRows] = React.useState<any[]>([]);
	const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
	const [loading, setLoading] = useState<boolean>(true);
	const [categories, setCategories] = useState<any[]>([]);
	const curUser = useSelector(selectUser);
	const currencySymbol: string | undefined = curUser ? CurrencyData[curUser['custom:currency']].symbol : undefined;

	// Get Categories
	useEffect(() => {
		getCategories();
	}, []);

	function getCategories() {
		API.graphql<GraphQLQuery<ListCategoriesQuery>>({ query: queries.listCategories })
			.then((res) => {
				const catItems = res.data?.listCategories?.items;
				catItems && setCategories(catItems);
			})
			.catch((err) => {
				console.error(err);
			});
	}
	// Get Lessons
	useEffect(() => {
		API.graphql<GraphQLQuery<LessonsByOwnerIDQuery>>({
			query: queries.lessonsByOwnerID,
			variables: { ownerID: curUser.sub },
		})
			.then((res) => {
				console.log(res);
				const tempRows: any[] = [];
				res.data?.lessonsByOwnerID?.items.map((lesson, index) => {
					const catLabel = categories.filter((item: Category) => item.id === lesson?.categoryID)[0].label;
					const lessonType = () => {
						switch (lesson?.type) {
							case 'MIN30':
								return '30 mins';
							case 'MIN60':
								return '60 mins';
							case 'SEMINAR':
								return 'Seminar';
						}
					};
					const tempLesson = {
						id: lesson?.id,
						index: index + 1,
						title: lesson?.title,
						type: lessonType(),
						category: catLabel,
						price: lesson?.price,
						description: lesson?.description,
						createdAt: lesson?.createdAt && new Date(lesson?.createdAt),
						updatedAt: lesson?.updatedAt && new Date(lesson?.updatedAt),
					};

					tempRows.push(tempLesson);
				});
				setRows(tempRows);
				setLoading(false);
			})
			.catch((err) => console.error(err));
	}, [categories, curUser.sub, currencySymbol]);

	const handleEditClick = (id: GridRowId) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
	};

	const handleDeleteClick = (id: GridRowId) => () => {
		setRows(rows.filter((row) => row.id !== id));
	};

	const myColumns: GridColDef[] = [
		{
			field: 'index',
			headerName: 'No',
			type: 'number',
			width: 50,
			headerAlign: 'left',
			align: 'left',
		},
		{
			field: 'title',
			type: 'string',
			headerName: 'Title',
			width: 200,
			headerAlign: 'left',
			align: 'left',
		},
		{
			field: 'type',
			type: 'string',
			headerName: 'Lesson Type',
			headerAlign: 'left',
			align: 'left',
		},
		{
			field: 'category',
			type: 'string',
			headerName: 'Category',
		},
		{
			field: 'price',
			type: 'number',
			headerName: `Price (${currencySymbol})`,
			width: 70,
		},
		{
			field: 'description',
			type: 'string',
			headerName: 'Description',
			width: 200,
		},
		{
			field: 'createdAt',
			type: 'date',
			headerName: 'Created At',
		},
		{
			field: 'updatedAt',
			type: 'date',
			headerName: 'Updated At',
		},
		{
			field: 'actions',
			type: 'actions',
			headerName: 'Actions',
			width: 100,
			cellClassName: 'actions',
			getActions: ({ id }) => {
				return [
					<GridActionsCellItem
						key="edit"
						icon={<EditIcon />}
						label="Edit"
						className="textPrimary"
						onClick={handleEditClick(id)}
						color="inherit"
					/>,
					<GridActionsCellItem
						key="delete"
						icon={<DeleteIcon />}
						label="Delete"
						onClick={handleDeleteClick(id)}
						color="inherit"
					/>,
				];
			},
		},
	];

	return (
		<>
			<Paper className="mx-auto">
				<DataGrid
					rows={rows}
					columns={myColumns}
					editMode="row"
					loading={loading}
					rowModesModel={rowModesModel}
					autoHeight={true}
					slots={{
						toolbar: EditToolbar,
						loadIcon: CircularProgress,
					}}
					slotProps={{
						toolbar: { setRows, setRowModesModel },
					}}
				/>
			</Paper>
		</>
	);
}
