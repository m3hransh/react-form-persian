module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Vazir', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
