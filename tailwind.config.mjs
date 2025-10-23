/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand-red': '#FF5757',
				'brand-orange': '#FFA500',
				'brand-yellow': '#FFD700',
				'brand-green': '#4CAF50',
				'brand-blue': '#2196F3',
				'brand-indigo': '#3F51B5',
			},
			fontFamily: {
				sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
