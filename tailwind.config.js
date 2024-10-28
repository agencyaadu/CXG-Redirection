/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
      customGray: '#7f7d7b', // Add your custom color here
    },
  },
  },
  plugins: [],
}