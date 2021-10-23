import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: './',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/scss/style.scss";`
      }
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  }
})
