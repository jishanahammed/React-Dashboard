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
        'one': '#DDA229',
        'two': '#5FAA43',
        myorange:{
          100:"#DDA229",
          80:"#ebc881",
          50:"#f0d59f",
          20:"#f0d59f57"
        },
        mygreen:{
          100:"#5FAA43",
          80:"#99cf84",
          50:"#ccffb7"
        }
      },
      backgroundColor: {
        'one': '#DDA229',
        'two': '#5FAA43',
        't-one':"#5faa432b",
        myorange:{
          100:"#DDA229",
          80:"#ebc881",
           50:"#ccffb7"
        }
      },
    },
  },
  plugins: [],
}
