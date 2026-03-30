// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/icon'],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      titleTemplate: '%s - Rafael Soares',

      htmlAttrs: {
        lang: 'en',
      },

      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2026-03-30',

  typescript: {
    typeCheck: true,
  },

  eslint: {
    config: {
      stylistic: {
        severity: 'warn',
      },
    },
  },

  icon: {
    serverBundle: {
      collections: ['tabler'],
    },
  },
})
