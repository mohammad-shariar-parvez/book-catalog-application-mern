/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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
  plugins: [],
};
