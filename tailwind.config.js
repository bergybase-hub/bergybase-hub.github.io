/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
      },
      colors: {
        primary: {
          dark: '#0f172a', // deep blue/slate
          light: '#f8fafc', // white/light gray
        },
        accent: {
          lime: '#84cc16', // lime green
          blue: '#1385c6', // BergyBit brand blue
        }
      }
    },
  },
  plugins: [],
}
