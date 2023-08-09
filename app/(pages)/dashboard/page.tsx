import React from 'react';
import Header from '~/components/widgets/InHeader';
import Guide from './guide';
import Coaches from './coaches';
import Footer from '~/components/widgets/Footer';
const Dashboard = () => {
	return (
		<>
			<Header />
			<Guide />
			<Coaches />
			<Footer />
		</>
	);
};

export default Dashboard;
