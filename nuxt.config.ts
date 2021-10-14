import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  components: true,
  routes: {
    '/': { static: true },
    '/member/*': { ssr: false }
  }
})
