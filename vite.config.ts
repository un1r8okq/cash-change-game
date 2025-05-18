import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '', // Make assets relative for GitHub pages compatibility
  plugins: [react()],
});
