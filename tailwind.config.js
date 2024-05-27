/** @type {import('tailwindcss').Config} */



export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg' : '#000000',
        'secondary-bg' : '#303030',
        'point-color' :  '#138EFF'
      }
    },
  },
  plugins: [],
}

