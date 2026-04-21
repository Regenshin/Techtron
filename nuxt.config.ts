export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-01-01',

  app: {
    baseURL: '/Techtron Live Limited/',
    head: {
      title: 'Techtron Live Limited',
      meta: [
        { name: 'description', content: 'Your trusted partner for phone repairs, laptop repairs, solar panel installation, camera systems, and the latest technology.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/Logo.ico' }
      ]
    }
  },
  nitro:{
      preset:'github-pages'


  }
})
