/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
       qiuckSand : ["Qiucksand", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
