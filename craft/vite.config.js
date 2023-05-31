import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 666,
    proxy: { "/api": { target: "http://localhost:6660", changeOrigin: true } },
  },
  plugins: [react()],
})
