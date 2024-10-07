/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f6e8b1",
        primary: "#faf6e0",
        secondary: "#fffdd1",
        tertiary: "#1e1e1e",
        hover: "#d4caa3",
      },
      fontFamily: {
        sans: ["Playfair Display", "serif"],
      },
    },
  },

  plugins: [],
};
