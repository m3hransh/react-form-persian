const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Vazir', 'sans-serif']
    },
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.gray,
        accent: colors.rose,
        main: colors.coolGray,
        background: colors.blueGray

      }
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
