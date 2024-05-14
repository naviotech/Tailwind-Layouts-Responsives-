/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "laptop-image": "url(../img/image-laptop.jpeg)",
      },
      fontFamily: {
        "poppins": " font-family: 'Poppins', sans-serif",
      } 
    },
  },
  plugins: [],
}

