'use client';

import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import useScript from './useScript';
import customTheme from './theme';
import { StyledEngineProvider } from '@mui/joy/styles';
import MyMessages from './components/MyMessages';
import InHeader from '~/components/widgets/InHeader';

const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export default function JoyMessagesTemplate() {
	const status = useScript(`https://unpkg.com/feather-icons`);

	useEnhancedEffect(() => {
		// Feather icon setup: https://github.com/feathericons/feather#4-replace
		// @ts-ignore
		if (typeof feather !== 'undefined') {
			// @ts-ignore
			feather.replace();
		}
	}, [status]);

	return (
		<>
			<InHeader />
			<React.StrictMode>
				<StyledEngineProvider injectFirst>
					<CssVarsProvider disableTransitionOnChange theme={customTheme}>
						<GlobalStyles
							styles={{
								'[data-feather], .feather': {
									color: 'var(--Icon-color)',
									margin: 'var(--Icon-margin)',
									fontSize: 'var(--Icon-fontSize, 16px)',
									width: '1em',
									height: '1em',
								},
							}}
						/>
						<CssBaseline />
						<Box sx={{ display: 'flex', height: 'calc(100dvh - 64px)' }}>
							{/* <Header /> */}
							{/* <Sidebar /> */}
							<Box component="main" className="MainContent" flex={1}>
								<MyMessages />
							</Box>
						</Box>
					</CssVarsProvider>
				</StyledEngineProvider>
			</React.StrictMode>
		</>
	);
}
