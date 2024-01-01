module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      content:{
        'icecoolfresh' : 'url("/src/img/icecoolfreshpattern.svg")',
      },
      colors: {
        coolfreshprimary : '#024D76',
        hitamcoolfresh : '#272323',
        inputcoolfresh : '#F0F4FD',
        btncoolfresh : '#041172',
        textcoolfresh2 : '#535A73',
        abutulisancoolfresh : '#272323',
        langitbirucoolfresh: '#27AAE1',
        backgroundabu: '#F9F9F9',
      },
      backgroundImage: {
        'loginpattern': "url('/src/img/bg_login.png')",
        'menupattern': "url('/src/img/menubg_halamancoolfresh.png')",
      }
    },
    fontSize: {
      'xxs': '0.5rem',
      'xs' : '0.75rem',
      sm: '0.8rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      'smalldevices': '640px',
      // => @media (max-width: 640px) { ... }
    },
    fontfamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    flex: {
      '2': '2 2 0%'
    },
  },
  plugins: [],
}