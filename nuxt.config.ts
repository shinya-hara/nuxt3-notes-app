import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: [
    'quasar/dist/quasar.prod.css',
    '@quasar/extras/material-icons/material-icons.css',
    '@quasar/extras/mdi-v6/mdi-v6.css',
  ],
})
