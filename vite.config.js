import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/harshana-batagalla/',
  plugins: [
    react()
  ],
  build: {
    outDir: path.resolve(__dirname, 'dist'), // Set the output directory
    emptyOutDir: true, // Clear the output directory before building
    assetsDir: '.', // Serve assets from the root directory
  },
})
