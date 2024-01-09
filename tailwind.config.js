/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xxl': '1440px',
      'xl': '1280px',
      'xmd': '950px',
      'md': '768px',
      'sm': '640px',

    },
    extend: {
      backgroundImage: {
        'hamburger-pattern': "url('./public/pictures/orken-pattern-background-image-scaled.jpg')",

      },
      colors: {
        'footer-blue': '#012b43',
      },
    },
  },
  plugins: [],
}

