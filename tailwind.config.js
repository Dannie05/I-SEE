/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black': '#0c0c0c',
      'primary-color': '#008000',
      'secondary-color': '#6CB564',
      'bg-linear': 'linear-gradient(to right, #800080, #ef0b5a)',
      'linear': 'linear-gradient(to right, #800080, #ef0b5a)',

    },
    extend: {},
  },
  plugins: [],
}
