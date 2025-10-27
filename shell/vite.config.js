import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [vue(), react()],
  root: './',
  base: '/react-vs-vue/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
  server: {
    port: 5173,
     fs: {
      // allow access to project root and subapp builds
      allow: [
        '..',
        path.resolve(__dirname, '../dist/react-app'),
        path.resolve(__dirname, '../dist/vue-app'),
        path.resolve(__dirname, '../dist/shell'),
      ]
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: false,
    rollupOptions: {
      external: [
        '../dist/vue-app/vue-entry.js',
        '../dist/react-app/react-entry.js',
      ],
    },
  },
  optimizeDeps: {
    exclude: [
      '../dist/vue-app/vue-entry.js',
      '../dist/react-app/react-entry.js',
    ],
  },
})