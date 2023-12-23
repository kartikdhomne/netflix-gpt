/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '35': '35%',
        '40': '40%',
      }
    },
  },
  plugins: [],
}