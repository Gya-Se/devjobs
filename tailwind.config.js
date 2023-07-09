/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': { 'min': '70px', 'max': '768px' },
      'md': { 'min': '769px', 'max': '1023px' },
    },
    extend: {},
  },
  plugins: [],
}