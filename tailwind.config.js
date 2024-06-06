/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        brand: {
          red: {
            50: '#FEF2F2',
            100: '#FEE2E2',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#EF4444',
          }
        }
      }
    },
  },
  plugins: [],
}

