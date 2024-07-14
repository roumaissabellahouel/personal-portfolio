/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {
      content: {
        'empty': '""',
      },
      borderColor: {
        'white-half-opacity': 'rgba(255, 255, 255, 0.5)',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'homeBg' : "url('./assets/img/banner-bg.png')",
        'custom-gradient': 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)',
        'custom-grad2' : 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
        'custom-crad3' : 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)'
        

      },
      backgroundColor:{
        'input-bg' : 'rgba(255, 255, 255, 0.1)',
      },
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        updown: 'updown 3s linear infinite',
      },
      border : {
        'myGrey' : 'rgba(255, 255, 255, 0.5)',
        'custom-border' : 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)'
      },
      
    },
  },
  plugins: [],
}

