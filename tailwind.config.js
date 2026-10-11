/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        tertiary: "#0D1B1E",
        box: "#F3F3F2",
        hover: "#CBBFBB",
      },
      fontFamily: {
        sans: ["Playfair Display", "serif"],
      },
    },
  },

  plugins: [],
};
