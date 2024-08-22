/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      backgroundImage: {
        'hero-large': "linear-gradient(rgba(0, 0, 0, 0.28),rgba(0, 0, 0, 0.28)),url('@assets/images/1920x650.png')",
        'hero-small': "linear-gradient(rgba(0, 0, 0, 0.28),rgba(0, 0, 0, 0.28)),url('@assets/images/600x600.png')",
      },
      boxShadow: {
      'custom-card': '0px 0px 10px 0px rgb(0 0 0 / 12%), 0px 0px 0px 0px rgb(0 0 0 / 0.1)',
    },
    colors: {
      'grey': 'rgb(149 149 149)',
    },
    screens: {
      'xsm': '320px',
      // => @media (min-width: 640px) { ... }
      '3xl': '1920px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  },
  plugins: [],
}

