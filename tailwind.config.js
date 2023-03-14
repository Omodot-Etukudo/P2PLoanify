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
    extend: {

      fontSize:{
        '7.5xl':'4.75rem'
      },
      colors:{
        'linkedin':'#0072b1',
        'twitter':'#00acee',
        'github':'#6e5494'
      }

    },
  },
  plugins: [],
}