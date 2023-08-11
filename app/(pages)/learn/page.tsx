import React, { useState, useEffect } from 'react';
import Header from '~/components/widgets/InHeader';
import Guide from './guide';
import Coaches from './coaches';
import Footer from '~/components/widgets/Footer';

import { cognitoIdentityServiceProvider } from '~/utils/aws';
import awsconfig from '~/aws-exports';
const LearnPage = () => {
	const { aws_user_pools_id } = awsconfig;

	// useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		try {
	// 			const argus = {
	// 				Username: user_id,
	// 				UserPoolId: aws_user_pools_id,
	// 			};

	// 			const data = await cognitoIdentityServiceProvider.adminGetUser(argus).promise();
	// 			console.log(data);
	// 		} catch (error) {
	// 			console.error('Error fetching user information:', error);
	// 		}
	// 	};

	// 	fetchUsers();
	// }, []);
	return (
		<>
			<Header />
			<Guide />
			<Coaches />
			<Footer />
		</>
	);
};

export default LearnPage;
