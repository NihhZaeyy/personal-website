/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'RobotoSlab' : 'Roboto Slab',
      'Rubik' : 'Rubik'
    },
    extend: {
      colors: {
        'color1':'#313866',
        'color2':'#504099',
        'color3':'#974EC3',
        'color4':'#FE7BE5'
      }
    },
  },
  plugins: [],
}

