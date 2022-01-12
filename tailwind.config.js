module.exports = {
  purge: {
    enable: true,
    content: ['./src/App.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
        caveat: ['Caveat'],
        abril: ['Abril Fatface'],
        playfair: ['Playfair Display'],
      },
      colors: {
        'hl': '#0099FF',
        'linkedin': '#2867B2',
        'google': '#DB4437',
        'github': '#333',
      },
      scale: {
        '1015': '1.015',
      },
      screens: {
        '3xl': '2250px',
      },
      padding: {
        '102': '30rem',
        '112': '36rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
