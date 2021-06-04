module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#340AAB',
          accent: '#FFA37B'
        }
      },
      spacing: {
        7.5: '30px',
        15: '60px',
        17.5: '70px'
      },
      width: {
        61: '244px'
      },
      maxWidth: {
        base: '1170px',
        medium: '485px'
      },
      dropShadow: {
        'circle': '0 20px 30px rgba(89, 0, 235, 0.5)',
        'button': '0px 10px 15px rgba(89, 0, 235, 0.2)'
      },
      boxShadow: {
        'button': '0px 10px 15px rgba(89, 0, 235, 0.2)'
      },
      fontFamily: {
        'body': ['Qanelas']
      },
      fontSize: {
        '2xs': ['11px', '14px']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
