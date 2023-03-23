/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        grey: {
            darkest: '#1B1D23',
            dark: '#60636D',
            DEFAULT: '#7D828F',
            light: '#C8CCD8',
            lightest: '#f9fafc',
        },
        red: {
            DEFAULT: '#DF5656',
        },
    },
  },
  plugins: [],
}
