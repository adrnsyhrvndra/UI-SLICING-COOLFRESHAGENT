module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        coolfreshprimary : '#024D76',
        hitamcoolfresh : '#272323',
        inputcoolfresh : '#F0F4FD',
        btncoolfresh : '#041172',
        textcoolfresh2 : '#535A73',
      },
      backgroundImage: {
        'loginpattern': "url('/src/img/bg_login.png')",
      }
    },
    screens: {
      'smalldevices': '640px',
      // => @media (max-width: 640px) { ... }
    },
    fontfamily: {
      'poppins': ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}