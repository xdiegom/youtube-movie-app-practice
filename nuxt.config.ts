// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  runtimeConfig: {
    apiBaseUrl: '',
    apiKey: '',
    public: {
      imageBaseUrl: ''
    }
  }
})
