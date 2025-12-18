import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This ensures assets are loaded correctly relative to the index.html
  // essential for deploying to services like GitHub Pages or simple web hosts.
  base: './', 
})
