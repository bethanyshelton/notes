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
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
