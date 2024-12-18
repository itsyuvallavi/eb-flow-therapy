/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary warm beige palette
        beige: {
          50: '#FAF7F2',
          100: '#F5EFE6',
          200: '#E8DCC8',
          300: '#D4C3A3',
          400: '#C1A87E',
          500: '#B69B6B',
        },
        // Complementary sage green accents
        sage: {
          50: '#F2F4F1',
          100: '#E8EBE4',
          200: '#D1D9CC',
          300: '#B3C2AA',
          400: '#96AB8B',
          500: '#7B916F',
        },
        // Warm terracotta accents
        brown: {  // Replacing terra with softer brown tones
          50: '#F8F6F4',
          100: '#EBE7E3',
          200: '#D8D0C9',
          300: '#C5B8AE',
          400: '#A69485',
          500: '#8B7B6A',
        }
      },
    },
  },
  plugins: [],
}