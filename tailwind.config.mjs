/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': '375px',
			'md': '744px',
			'lg': '1440px',
		},
		extend: {},
	},
	plugins: [],
}
