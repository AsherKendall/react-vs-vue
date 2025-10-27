import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-vs-vue/',
  build: {
    outDir: '../dist/react-app',
    lib: {
      entry: './src/main.jsx',
      name: 'ReactApp',
      formats: ['es'],
      fileName: 'react-entry'
    },
    emptyOutDir: true
  }
})
