/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
      'MedicalBg':"url('Assets/About_bg.jpg')"
    },
    screens: {
      'Login': '1310px',
      'XR':'414px',
      'SE':'375px',
      'add':'612px',
      },
      minHeight:{
        'loginh':'900px'
      },
      colors:{
        'navbarcol':'rgb(0, 124, 115)'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
