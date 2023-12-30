/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      colors: {
        primary: '#7856ff', // purple
        secondary: '#ff5e7d', // pink
        accent: '#ffc107', // yellow
        neutral: '#ffffff', // white
        dark: '#000000', // black
        
      }
    },
  },
  plugins: [],
}
