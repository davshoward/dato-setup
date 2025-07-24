/** @type {import('tailwindcss').Config} */
/* @ts-ignore */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1.25rem',
				},
			},
			fontFamily: {
				heading: ['var(--font-main)', ...defaultTheme.fontFamily.sans],
				body: ['var(--font-main)', ...defaultTheme.fontFamily.sans],
			},			
			lineHeight: {
				compact: '1.1',
			},
			flex: {
				slide: '0 0 100%',
			},
			width: {
				'half-stretch': 'calc(100% + 1.25rem)',
				stretch: 'calc(100% + 2.5rem)',
			},
		},
	}
};
