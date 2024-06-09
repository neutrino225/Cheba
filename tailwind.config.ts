/** @format */

import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				"inset-br": "inset -4px -4px 8px rgba(0, 0, 0, 0.25)",
			},
			backgroundImage: {
				"custom-gradient":
					" linear-gradient(180deg, rgba(74, 67, 89, 0.15) 0%, rgba(36, 50, 53, 0.15) 100%)",
			},
		},
	},
	plugins: [],
};
export default config;
