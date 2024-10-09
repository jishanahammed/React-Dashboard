module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
 theme: {
    extend: {
      colors: {
        primary: {
          600: '#1D4ED8',  // You can change this to your desired color hex value
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#3c50e0'
        },
        zIndex: {
          1400: '1400',
        },
      },
    },
  },
  plugins: [],
}
