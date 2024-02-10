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
      'MedicalBg':"url('Assets/About_bg.jpg')",
      'LoginBg':"url('Assets/login-bg.jpg')"
    },
    screens: {
      'Login': '1700px',
      'XR':'414px',
      'SE':'375px',
      'add':'612px',
      '2000':'2000px',
      '1500':'1500px',
      '1576':'1576px',
      '2200':'2200px'
      },
      minHeight:{
        'loginh':'900px'
      },
      maxHeight:{
        "1000":"1000px"
      },
      colors:{
        'navbarcol':'rgb(0, 124, 115)'
      },
      width:{
        '15':'60px',
        '500':'500px',
        '650':'650px',
        '1500':'1500px'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
