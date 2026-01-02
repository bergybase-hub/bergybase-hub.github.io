/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
        heading: ["Oswald", "sans-serif"],
        subheading: ["Oswald", "sans-serif"],
      },
      colors: {
        primary: {
          dark: '#0f172a', // deep blue/slate
          light: '#f8fafc', // white/light gray
        },
        accent: {
          lime: '#84cc16', // lime green
          blue: '#2258b9', // BergyBit brand blue
        }
      }
    },
  },
  plugins: [],
}
