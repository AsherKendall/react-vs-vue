import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-vs-vue/',
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: './src/main.js',
      name: 'VueApp',
      fileName: 'vue-entry',
      formats: ['es'],
    },
    outDir: '../dist/vue-app',
    emptyOutDir: true,
    cssCodeSplit: false,
  },
})
