const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx,md,mdx}'],
	theme: {
		screens: {
			xs: '450px',
			sm: '640px',
			// => @media (min-width: 640px) { ... }
			md: '768px',
			// => @media (min-width: 768px) { ... }
			lg: '1024px',
			// => @media (min-width: 1024px) { ... }
			xl: '1280px',
			// => @media (min-width: 1280px) { ... }
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				primary: colors.emerald,
				secondary: colors.blue,
			},
			fontFamily: {
				sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
			},
			width: {
				'calc-100-minus-75': 'calc(100% - 75px)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'false',
};
