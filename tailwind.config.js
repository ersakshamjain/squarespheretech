/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          cyan: '#12C2E9',
          blue: '#2A4CF0',
          purple: '#8A2387',
          dark: '#030712',
          cardDark: '#0A0F1D',
          borderDark: '#1E293B',
        }
      }
    },
  },
  plugins: [],
}
