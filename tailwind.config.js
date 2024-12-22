/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mountain: {
          terra: '#C7A693',      // Sunset pink
          dusk: '#A393B3',     // Purple-tinted dusk
          fog: '#8A8CA8',      // Misty purple-blue
          peak: '#566176',     // Mid-mountain blue
          shadow: '#2C394B',   // Deep mountain shadow
          forest: '#1A2634',   // Dark mountain base
        },
        sage: {
          light: '#B7C4BC',    // Light sage highlight
          DEFAULT: '#8A9A91',  // Mid sage
          dark: '#5C6B62',     // Dark sage
        }
      },
    },
  },
  plugins: [],
}




//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           forest: '#262b15',    // Deep forest green
//           charcoal: '#3f3f3f',  // Charcoal gray
//           olive: '#464b37',     // Olive green
//           sage: '#848871',      // Sage green
//           light: '#afb4ad',     // Light gray
//         },
//         // Gradient variations
//         forest: {
//           DEFAULT: '#262b15',
//           light: '#363d1f',
//           dark: '#1a1d0e',
//         },
//         sage: {
//           DEFAULT: '#848871',
//           light: '#9a9e8a',
//           dark: '#6e725e',
//         },
//         charcoal: {
//           DEFAULT: '#3f3f3f',
//           light: '#525252',
//           dark: '#2c2c2c',
//         }
//       },
//     },
//   },
//   plugins: [],
// }