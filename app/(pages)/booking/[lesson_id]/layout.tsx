import Header from '~/components/widgets/InHeader';
import Footer from '~/components/widgets/Footer';
import { Box, Container } from '@mui/material';
export default function ProfileLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<Box className="bg-slate-100 my-0 p-2 md:p-4">
				<Container>{children}</Container>
			</Box>
			<Footer />
		</>
	);
}