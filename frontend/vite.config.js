import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
            sans: ['DM Sans', 'sans-serif'], // Default sans-serif font
            cabin: ['Cabin', 'sans-serif'], // Additional font
          },
        },
      }
    }),


  ],
})
