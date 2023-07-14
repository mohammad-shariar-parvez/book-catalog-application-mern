/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        golden: "#c8a97e",
        footer: "#141313",
        topbarBg: '#FFFFFF0D'
      },
      fontFamily: {
        great: ['Great Vibes', 'cursive'],
        poppins: ['Poppins', 'sans-seri']

      }, //e
    },
  },
  // eslint-disable-next-line no-undef

};
