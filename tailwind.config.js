/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
        keyframes: {
            'fade-in': {
                '0%': {
                    opacity: '0',
                },
                '10%': {
                    opacity: '.2',
                },
            },
            'slide': {
                'from': {
                    transform: 'translateX(200px)',
                },
                'to': {
                    transform: 'translateX(10px)',
                }
            }
        },
        animation: {
            'fade': 'fade-in 0.9s ease-in',
            'slide': 'slide 0.7s ease-in'
        }
    },
    colors: {
        grey: {
            darkest: '#1B1D23',
            dark: '#60636D',
            DEFAULT: '#7D828F',
            light: '#C8CCD8',
            lightest: '#f9fafc',
        },
        white: {
            DEFAULT: '#F2F2F2'
        },
        red: {
            DEFAULT: '#DF5656',
        },
        translucent: {
            DEFAULT: 'rgba(210, 206, 210, 0.42)',
        }
    },
  },
  plugins: [],
}
