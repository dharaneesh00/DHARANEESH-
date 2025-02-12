/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

      colors: {
        primary: "#4F46E5", // Replace with your desired color
        "color-primary": "#4F46E5", // For border-color-primary
      },
      borderColor:{
        'secondary' :' black'
        
      }
    
    },
    fontFamily:{
      'hero-font' : 'Sriracha'
    }
  },
  plugins: [],
}

