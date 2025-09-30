/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '12px',
        sm: '15px',
        base: '18px'
      }
    },
  },
  plugins: [],
}