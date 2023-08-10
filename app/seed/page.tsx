'use client';

import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import * as mutations from '~/graphql/mutations';
import { CreateCategoryInput, CreateCategoryMutation } from '~/API';
const SeedPage = () => {
	const Categories: CreateCategoryInput[] = [
		{
			label: 'Fitness',
		},
		{
			label: 'Wellness',
		},
		{
			label: 'Education',
		},
		{
			label: 'Relationships',
		},
		{
			label: 'Cooking',
		},
		{
			label: 'Business',
		},
		{
			label: 'Personal Development',
		},
	];

	function seedCategory() {
		Categories.forEach((category) => {
			API.graphql<GraphQLQuery<CreateCategoryMutation>>({
				query: mutations.createCategory,
				variables: {
					input: category,
				},
			})
				.then((res) => console.log(res))
				.catch((err) => console.error(err));
		});
	}
	return (
		<>
			<button onClick={seedCategory}>Seed Category</button>
		</>
	);
};

export default SeedPage;
