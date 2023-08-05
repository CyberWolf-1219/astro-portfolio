/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pallet: {
          primary: '#272727',
          'primary-light': '#303030',
          secondary: '#EFFFFB',
          accent: '#50D890',
        },
      },
    },
  },
  plugins: [],
};
