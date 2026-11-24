// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@netlify/nuxt',

    '@vueuse/nuxt',

    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',

    'vite-doctor/nuxt',
    'nuxt-skill-hub',
    'nuxt-email-renderer',
  ],

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

  runtimeConfig: {
    postmarkServerToken: '',
    senderEmail: 'noreply@rafasoares.com',
    public: {
      contactEmail: 'info@rafasoares.com',
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/contact': { prerender: true },
  },

  compatibilityDate: '2026-03-30',

  typescript: {
    typeCheck: false,
  },

  eslint: {
    config: {
      stylistic: {
        severity: 'warn',
      },
    },
  },

  icon: {
    cssLayer: 'base',
    clientBundle: {
      scan: true,
      icons: [
        'tabler:sun',
        'tabler:moon',
      ],
    },
  },

  skillHub: {
    targets: ['universal'],
  },
})
