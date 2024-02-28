/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx,ts}'],
  theme: {
    extend: {
      boxShadow: {
        big: '0 8px 40px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
