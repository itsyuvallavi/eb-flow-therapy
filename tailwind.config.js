/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Reference-inspired clean therapy palette
        primary: {
          sage: '#8FA68E',         // Soft sage green (main brand)
          cream: '#F5F3F0',        // Warm cream background
          forest: '#4A5D3A',       // Deep forest green (text)
          stone: '#D4C5B9',        // Light stone/beige
          white: '#FFFFFF',        // Pure white for cards
        },
        accent: {
          mint: '#B8C5A7',         // Light mint green
          earth: '#A0956B',        // Earthy brown
          mist: '#E8E6E1',         // Very light mist
        },
        text: {
          primary: '#2C3E2D',      // Dark forest green
          secondary: '#5A6B5D',    // Medium green-gray
          muted: '#8B9A8E',        // Light green-gray
        },
        // Legacy colors - mapped to new system for compatibility
        mountain: {
          terra: '#8FA68E',        // Mapped to primary sage
          dusk: '#B8C5A7',         // Mapped to accent mint
          fog: '#E8E6E1',          // Mapped to accent mist
          peak: '#4A5D3A',         // Mapped to primary forest
          shadow: '#2C3E2D',       // Mapped to text primary
          forest: '#2C3E2D',       // Mapped to text primary
        },
        sage: {
          light: '#E8E6E1',        // Mapped to accent mist
          DEFAULT: '#8FA68E',      // Mapped to primary sage
          dark: '#4A5D3A',         // Mapped to primary forest
        },
        // Beach colors (secondary palette)
        ocean: {
          turquoise: '#4DD0E1',    
          seafoam: '#B2DFDB',      
          deep: '#26C6DA',         
          light: '#E0F7FA',        
        },
        sunset: {
          coral: '#FFB74D',        
          peach: '#FFCC80',        
          gold: '#FFD54F',         
          blush: '#FFCDD2',        
          pink: '#F4C2A1',         // Warm pink from beach image
          rose: '#E8B4B8',         // Soft rose tone
        },
        sand: {
          beach: '#F5E6D3',        
          pearl: '#FAFAFA',        
          warm: '#FFF8E1',         
          light: '#F9F9F9',        
        },
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