/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        rotater: 'spinner 10s linear infinite',
        wiggle: 'wiggle 10s linear infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['black'],
  },
};
