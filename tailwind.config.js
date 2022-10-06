/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      pri: {
        light: '#7576b3',
        DEFAULT: '#6667ab',
        dark: '#525289'
      },
      white: '#fff',
      black: '#000',
      gray: '#EEEEEE',
      dark_gray: '#696969'
    },
    screens: {},
    fontFamily: {
      dm_serif: ['DM Serif Text', 'serif'],
      poppins: ['poppins', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'tab': '900px',
    },
    extend: {
      aspectRatio: {
        'h-image': '3/4'
      }
    },
  },
  plugins: [],
}