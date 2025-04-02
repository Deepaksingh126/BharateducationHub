import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  base: "/",  // Ensure correct base path
  server: {
    historyApiFallback: true, // Fix for Vercel 404 error
  }
})
