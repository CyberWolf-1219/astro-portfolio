/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pallet: {
          primary: '#272727',
          'primary-light': '#303030',
          secondary: '#4F98CA',
          accent: '#50D890',
          light: '#EFFFFB',
        },
      },
    },
  },
  plugins: [],
};
