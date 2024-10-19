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
        'one': '#dda229d6',
        'two': '#5e9448',
        myorange:{
          100:"#dda229d6",
          80:"#dda229d6",
          50:"#f0d59f",
          20:"#f0d59f57"
        },
        mygreen:{
          100:"#5e9448",
          80:"#5e9448",
          50:"#ccffb7"
        }
      },
      backgroundColor: {
        'one': '#dda229d6',
        'two': '#5E9448',
        't-one':"#5faa432b",
        myorange:{
          100:"#dda229d6",
          80:"#dda229d6",
           50:"#ccffb7"
        }
      },
    },
  },
  plugins: [],
}
