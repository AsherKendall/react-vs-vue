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
    lib: {
      entry: './src/main.js',
      name: 'VueApp',
      fileName: 'vue-entry',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          '@citation-js': [
            '@citation-js/core',
            '@citation-js/plugin-bibtex',
            '@citation-js/plugin-csl',
          ],
          'highlight.js': [
            'highlight.js/lib/core',
            'highlight.js/lib/languages/bash',
            '@highlightjs/vue-plugin',
          ],
        },
      },
    },
    outDir: '../dist/vue-app',
    emptyOutDir: true,
    cssCodeSplit: false,
  },
})
