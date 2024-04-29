/** @type {import('tailwindcss').Config} */



export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg' : '#181818',
        'secondary-bg' : '#303030',
      }
    },
  },
  plugins: [],
}

