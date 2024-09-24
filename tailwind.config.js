/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		colors: {
		  primary: "#5c6ac4",
		  secondary: "#F4F0F0",
		  white: "#ffffff", // Correctly referencing the color white
		  dark: "#3c4858",
		  lightest: "#f9fafc",
		  customGray: "#F1F5F9",
		  headerBg: "rgb(0 0 0)", // Valid RGB value
		  textRed: "#ef4444", // Tailwind's red-500 equivalent (change if you want another shade)
		},
	  },
	},
  };
  