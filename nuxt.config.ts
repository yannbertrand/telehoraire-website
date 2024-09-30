// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: { baseURL: '/telehoraire-website/' },
  css: ['@picocss/pico/css/pico.css'],
  modules: ['@nuxt/image'],

  image: {
    domains: ['img.bouygtel.fr', 'www.teleboy.ch', 'focus.telerama.fr'],
  },

  experimental: {
    componentIslands: true,
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
});
