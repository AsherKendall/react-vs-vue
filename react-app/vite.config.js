import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';
import path, {dirname} from 'path'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist/react-app',
    lib: {
      entry: path.resolve(__dirname, 'src/main.jsx'),
      name: 'ReactApp',
      formats: ['es'],
      fileName: 'react-entry'
    },
    emptyOutDir: true
  }
})
