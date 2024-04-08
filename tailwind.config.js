/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: []
   },
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
