import { Metadata } from 'next';
import { SITE } from '~/config.js';
import Providers from '~/components/atoms/Providers';
import '~/assets/styles/base.css';
export interface LayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: {
		template: `%s — ${SITE.name}`,
		default: SITE.title,
	},
	description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body className="bg-white tracking-tight text-gray-900 antialiased motion-safe:scroll-smooth 2xl:text-[16px]">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
