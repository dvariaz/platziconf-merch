module.exports = {
  purge: {
    content: ['./src/**/*.js', './src/**/*.jsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#273b47',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
