'use client';

import * as React from 'react';
import { Paper, Button, InputAdornment } from '@mui/material';
import { FormContainer, TextFieldElement, RadioButtonGroup, SelectElement } from 'react-hook-form-mui';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import * as queries from '~/graphql/queries';
import * as mutations from '~/graphql/mutations';
import { ListCategoriesQuery, Category, CreateLessonInput, CreateLessonMutation } from '~/API';
import { selectUser } from '~/slices/userSlice';
import { useSelector } from 'react-redux';
import { CurrencyData } from '~/shared/CurrencyData';

export default function NewCoach() {
	const [categories, setCategories] = React.useState<Category[]>([]);
	const [desc, setDesc] = React.useState<string>('');
	const curUser = useSelector(selectUser);
	const currencySymbol: string | undefined = curUser ? CurrencyData[curUser['custom:currency']].symbol : undefined;
	React.useEffect(() => {
		getAllCategories();
	}, []);

	async function getAllCategories() {
		try {
			const result = await API.graphql<GraphQLQuery<ListCategoriesQuery>>({ query: queries.listCategories });
			setCategories(result.data?.listCategories?.items.filter((item) => item !== null) as Category[]);
		} catch (error) {
			console.log(error);
		}
	}

	function submitData(data: any) {
		// const newLessonData: CreateLessonInput = {
		// 	title: data.lessonTitle,
		// 	price: data.price,
		// 	type: data.lessonType,
		// 	description: data.description,
		// };
		// API.graphql<GraphQLQuery<CreateLessonMutation>>({
		// 	query: mutations.createLesson,
		// 	variables: {
		// 		input: newLessonData,
		// 	},
		// })
		// 	.then((res) => {
		// 		console.log(res);
		// 	})
		// 	.catch((err) => {
		// 		console.error(err);
		// 	});
	}

	return (
		<FormContainer defaultValues={{ lessonType: 'MIN60' }} onSuccess={(data) => submitData(data)}>
			<Paper className="mx-auto mb-4 flex max-w-3xl flex-wrap items-center px-2 py-4 md:px-3 md:py-6 lg:px-4 lg:py-8">
				<h2 className="mb-5 mt-3 w-full text-center text-2xl font-bold text-slate-700">Create a New Lesson</h2>
				<div className="my-2 w-full">
					<label htmlFor="lessonTitle">Lesson Title *</label>
					<TextFieldElement name="lessonTitle" size="small" fullWidth />
				</div>
				<div className="my-2 w-full md:w-1/2 md:pr-2">
					<label htmlFor="lessonCategory">Lesson Category *</label>
					<SelectElement name="lessonCategory" options={categories} required size="small" className="w-full" />
				</div>
				<div className="my-2 w-full md:w-1/2 md:pl-2">
					<label htmlFor="price">Price per hour</label>
					<TextFieldElement
						name="price"
						required
						size="small"
						type="number"
						className="w-full"
						validation={{ min: 5, max: 100 }}
						InputProps={{
							inputProps: { min: 5, max: 100 },
							startAdornment: <InputAdornment position="start">{currencySymbol}</InputAdornment>,
						}}
					/>
				</div>
				<div className="my-2 w-full items-center md:w-1/2 md:pl-2">
					<p>Lesson Type</p>
					<RadioButtonGroup
						row
						name="lessonType"
						options={[
							{ id: 'MIN30', label: '30min' },
							{ id: 'MIN60', label: '60min' },
							{ id: 'MIXED', label: 'Let student choose' },
						]}
					/>
				</div>

				<div className="w-full">
					<TextFieldElement
						name="description"
						label="Description"
						placeholder="Insert some description about your coach..."
						multiline
						rows={5}
						className="mt-4 w-full"
						validation={{ minLength: 50, maxLength: 1200 }}
						onChange={(e) => setDesc(e.target.value)}
						helperText={`${desc.length} / 1200`}
						FormHelperTextProps={{ className: 'ml-auto block' }}
					/>
				</div>
				<div className="mt-6 flex w-full justify-end">
					<div>
						<Button type="button" variant="outlined">
							Cancel
						</Button>
					</div>
					<div className="ml-4">
						<Button type="submit" variant="contained" className="bg-primary-600">
							Submit
						</Button>
					</div>
				</div>
			</Paper>
		</FormContainer>
	);
}
