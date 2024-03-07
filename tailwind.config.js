/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: '',
  content: [
    "./src/**/*.{html,js}",
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'mainPink': '#FD768E',
        'secondaryPink': '#F68DA0',
        'bgPink': '#FFF0F0',
        'hoverPink': '#FF407D',
      },
      fontFamily: {
        rubikfont: ["Rubik"],
        displayfont: ['SF UI Display'],
        shiningFont: ["Shining Monday"],
      }
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}

