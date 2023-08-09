'use client';

import { ThemeProvider } from 'next-themes';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import store from '~/store/store';

import { Amplify } from 'aws-amplify';
import awsExports from '~/aws-exports';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Amplify.configure({ ...awsExports, ssr: true });
export interface ProvidersProps {
	children: React.ReactNode;
}

let theme = createTheme({
	palette: {
		primary: {
			main: '#059669',
			light: '#10b981',
			dark: '#047857',
		},
	},
});

const Providers = ({ children }: ProvidersProps) => (
	<>
		<ReduxProvider store={store}>
			<ToastContainer />
			<ThemeProvider attribute="class" disableTransitionOnChange>
				<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
			</ThemeProvider>
		</ReduxProvider>
	</>
);

export default Providers;
