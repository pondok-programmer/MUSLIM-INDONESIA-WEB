/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "kryptonite": "#379237",
        "sari": "#e2da13",
      }
    },
  },
  plugins: [
    require('tailwind-forms'),
    require('tailwind-scrollbar-hide')
  ],
}