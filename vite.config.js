import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 2048,
    rollupOptions: {
      output: {
        manualChunks: { router: ['react-router-dom'] }
      }
    }
  }
})
