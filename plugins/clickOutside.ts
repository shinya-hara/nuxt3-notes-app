/**
 * @see https://github.com/andymark-by/click-outside-vue3
 */
import vClickOutside from 'click-outside-vue3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vClickOutside)
})
