/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      colors: {
        'brand-gray': '#919496',
        'brand-green': '#1ed760',
        'brand-dark-primary': '#222326',
        'brand-dark-secondary': '#2a2a2a',
        'brand-dark-tertiary': '#242424',
        'brand-pink': '#FFD2D7',
        'brand-orange': '#FFC862',
        'brand-blue': '#A5BBD1',
        'brand-gray-secondary': '#d9dadc',
      },
      fontSize: {
        'xxs': '10px',
      },
      fontFamily: {
        'brand': ['Circular', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        'a': {
          color: theme('colors.white'), 
          textDecoration: 'no-underline', 
        },
        'a:hover': {
          color: theme('colors.brand-green'),
        },
        'a.secondary-link': {
          fontSize: theme('fontSize.xxs'),
          color: theme('colors.brand-gray'),
        },
        'a.secondary-link:hover': {
          color: theme('colors.brand-green'),
        },
      })
    }
  ],
}
