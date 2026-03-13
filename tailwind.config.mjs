/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        accent: '#C49A3C',
        'accent-lt': '#DDB95A',
        bg: '#070710',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
    },
  },
};
