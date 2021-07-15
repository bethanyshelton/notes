module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				festive: "'festive', 'cursive'",
				zen: "'Zen Loop', 'cursive'",
			},
		},
		colors: {
			teal: "#00EAD3",
			yellow: "#FFF5Bf",
			pink: "#FF449F",
			purple: "#AC66CC",
			green: "#A3F7BF",
			blue: "#05DFD7",
			white: "#fff",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
