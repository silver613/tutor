import { API, graphqlOperation } from 'aws-amplify';
import { createCategory } from '~/graphql/mutations';

interface Category {
	label: string;
	value: string;
}

const Categories: Category[] = [
	{
		label: 'Fitness',
		value: 'fitness',
	},
	{
		label: 'Wellness',
		value: 'wellness',
	},
];

async function seedCategory(categories: Category[]) {
	for (let category in categories) {
		try {
			const result = await API.graphql(graphqlOperation(createCategory, { input: category }));
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	}
}

seedCategory(Categories);
