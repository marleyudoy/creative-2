/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors : {
        primary_color : "#F44335",
        secondary_color : "#00FF84" 
      }
    },
    container : {
      center : true,
      padding : {
        DEFAULT : "0.5rem"
      }
    }
  },
  plugins: [],
}

