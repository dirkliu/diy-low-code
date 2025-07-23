// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'diy low code',
      meta: [
        { name: 'description', content: 'My Nuxt.js application' }
      ],
      // 先全局引入，之后优化
      link: [
      // <link rel="stylesheet" href="https://myawesome-lib.css">
      ],
      script: [
      ]
    }
  }
})
