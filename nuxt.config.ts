// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/icon'],

  devtools: {
    enabled: true,
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
