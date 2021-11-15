module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Uber Move Text', 'sans-serif'],
      body: ['Uber Move Text']
    },
    screens: {
      'sm': '440px',
      //=> @media (min-width: 640px) { ... }
      'md': '547px',
      // => @media (min-width: 768px) { ... }
      'lg': '768px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1680',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
