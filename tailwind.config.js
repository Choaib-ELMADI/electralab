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
			xxs: "361px",
			xs: "380px",
			sm: "480px",
			md: "600px",
			mn: "725px",
			dm: "901px",
			lg: "976px",
			ltg: "1201px",
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

				red: "var(--red)",
				pink: "var(--pink)",
				green: "var(--green)",
				orange: "var(--orange)",
				purple: "var(--purple)",
				lightpurple: "var(--lightpurple)",
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
				full: "999px",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
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
