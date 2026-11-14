import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Das sorgt dafür, dass alle Asset-Pfade relativ (./ statt /) generiert werden
  base: './', 
  plugins: [
      tailwindcss(),
  ],
})