/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/js/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './theme.config.jsx'
  ],
  theme: {
    extend: {
      colors: {
        'dark-but-not-that-dark': '#111111',
        'orange': '#f98115',
        'orange-light': '#fba254'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
