/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
       'custom': '300px', // Custom width values
       'custom-2': '390px',
       'custom-3':'330px',
       'custom-4':'92px',
       'custom-5':'600px',
      },
      height:{
        'custom':'400px',
        'custom2':'90px',
        '26':'104px'
      },
      padding:{
        'custom':"136px"
      },
      fontSize:{
        'custom':'2.92rem'
      },
      fontWeight:{
        'custom':50,
      },
      transitionDuration:{
        '2000':'2000ms',
        '3000':'3000ms',
        '4000':'4000ms',
      },
      fontFamily:{
        'aj':["Roboto",'sans-serif'] 
      },
      screens:{
        'xs':'300px',
        'xxs':'200px'
      },
      borderWidth:{
        'custom':'3px'
      }
    },
  },
  plugins: [],
}

