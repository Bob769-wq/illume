/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'button-bg': 'linear-gradient(210deg, rgb(255, 255, 255) 30%, rgb(252, 187, 118))',
        'button-hover': 'radial-gradient(at top right, #d9d3c6 0%, #fff 100%)',
      },
      screens: {
        'media-screen-800': '800px',
      },
      colors: {
        'upper-bg': '#d9d3c6',
        'leaf-color': 'rgb(60, 110, 113)',
        'special-grid': 'rgb(243, 243, 244)',
        'discount-hover': '#68727dcc',
        'footer-bg': 'rgb(231,231,232)',
        'hover-text': 'rgb(54, 85, 143)',
        'icon-hover': '#fcbb76',
      },
      height: {
        420: '26.25rem',
        800: '50rem',
      },
      maxHeight: {
        1000: '1000px',
      },
      minHeight: {
        480: '30rem',
        200: '200px',
        100: '100px',
      },
      spacing: {
        'header-height': '176px',
        800: '800px',
        360: '360px',
      },
      maxWidth: {
        1200: '75rem',
        500: '31.25rem',
      },
      width: {
        500: '31.25rem',
        1470: '91.875rem',
      },
    },
  },
  plugins: [],
};
