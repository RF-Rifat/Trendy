/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {},
    extend: {
      colors: {
        // Light Color Combinations
        'light-mint': '#B2D8C7',
        'pastel-blue': '#A9D0E8',
        'soft-peach': '#FFC09F',
        'light-lavender': '#C7A4FF',
        'light-teal': '#7AD7E0',
  
        // Dark Color Combinations
        'navy-blue': '#000080',
        'charcoal-gray': '#333333',
        'deep-plum': '#8E3A80',
        'dark-forest-green': '#228B22',
        'deep-burgundy': '#800020',
      },
    },
  },
  plugins: [],
}