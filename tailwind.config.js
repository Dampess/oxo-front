/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "oxo-orange": "#ff7f50",
        "oxo-blue": "#4a90e2",
        "oxo-white": "#fff5eb",
      },
    },
  },
  plugins: [],
};
