const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: 'media',
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			...colors,
			gray: colors.neutral,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
