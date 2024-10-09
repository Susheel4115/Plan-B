// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps for debugging
  },
  server: {
    port: 5173, // Specify your dev server port
  },
  esbuild: {
    loader: 'jsx',
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure .jsx is handled correctly
  },
});
