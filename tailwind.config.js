/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#22c55e",
        secondary: "#f97316",
        tertiary: "#a855f7",
        quaternary: "#f43f5e",
      },
    },
  },
  plugins: [],
};
