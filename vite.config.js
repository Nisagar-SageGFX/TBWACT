// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     assetsInlineLimit: 2048,
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           router: ['react-router-dom']
//         }
//       }
//     }
//   }
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: '/TBWACT/',

  build: {
    assetsInlineLimit: 2048,
    rollupOptions: {
      output: {
        manualChunks: {
          router: ['react-router-dom']
        }
      }
    }
  }
})