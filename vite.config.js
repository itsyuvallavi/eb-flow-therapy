import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 75,
        progressive: true,
        mozjpeg: true,
      },
      jpeg: {
        quality: 75,
        progressive: true,
        mozjpeg: true,
      },
      png: {
        quality: 80,
        compressionLevel: 9,
        palette: true,
      },
    }),
  ],
})