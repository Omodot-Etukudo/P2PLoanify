/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //Add extension here
    extend: {
      spacing:{
        '128': '32rem',
      },
      fontSize:{
        '7.5xl':'4.75rem',
        '20xl':'14rem'
      },
      colors:{
        'primary':'#B2FFA4',
        'main':'#0C0F1C',
      }
    },
  },
  plugins: [],
}