/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      md: '900px',
    },
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        space: ["'Space Mono'", 'monospace'],
      },
    },
  },
  plugins: [],
};
