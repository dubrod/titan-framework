module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  content: ['./build/*.{html,js}',],
  theme: {
    extend: {
      screens: {
        'sm': '480px'
      },
      colors: {
        'body': '#eef1f6',
        'primary': '#f1ac1a',
        'primary-hover': '#cd941a',
        'secondary': '#ffe032',
        'secondary-hover': '#e6cf4b',
        'tertiary': '#abd73d',
        'tertiary-hover': '#9fcc2e',
        'light': '#eef1f6',
        'dark': '#58585a',
        'darker': '#434344',
        'slate': {
          light: '#77787b',
          DEFAULT: '#58585a',
          dark: '#424243'
        },
        'danger': '#d97b7e',
        'danger-border': '#621113',
        'success': '#bde2c1',
        'success-border': '#749c7a',
        'info': '#cff4fc',
        'info-border': '#6aacba',
        'warning': '#d57827',
        'warning-border': '#a65b1a'
      },
      fontFamily: {
        body: ['Open Sans', 'sans-serif'],
        heading: ['Pacifico', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
