/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	theme: {
		screens: {
			xs: "380px",
			sm: "480px",
			md: "600px",
			mn: "725px",
			dm: "901px",
			lg: "976px",
			xl: "1440px",
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				background: "var(--background)",
				text: "var(--text)",

				secondary: "var(--secondary)",
				tertiary: "var(--tertiary)",
				hovery: "var(--hovery)",

				brand: "var(--brand)",
				orange: "var(--orange)",
				red: "var(--red)",
				purple: "var(--purple)",
				lightpurple: "var(--lightpurple)",
				green: "var(--green)",
			},
			fontSize: {
				xlarge: "var(--xlarge)",
				large: "var(--large)",
				medium: "var(--medium)",
				normal: "var(--normal)",
				small: "var(--small)",
				tiny: "var(--tiny)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
