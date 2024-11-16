/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          'primaryText':'#403F3F',
          'primaryBg':'#F3F3F3',
          'secondBg':'#E7E7E7',

        }
      },
    },
    plugins: [require('daisyui'),],
  }