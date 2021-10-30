import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: './',
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      deep: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/assets/scss/style.scss";`,
      },
    },
  },
  build: {
    outDir: '../public',
    emptyOutDir: true,
  },
})
