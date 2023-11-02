/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBackgroudColor: '#0D1117',
        columnBackgroundColor: '#161C22',
      },
    },
  },
  plugins: [],
};
