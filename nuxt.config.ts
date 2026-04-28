// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxtjs/mdc',
    '@regle/nuxt',
    '@vueuse/nuxt',
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

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2026-03-30',

  vite: {
    optimizeDeps: {
      include: [
        '@nuxt/ui > prosemirror-state',
        '@nuxt/ui > prosemirror-transform',
        '@nuxt/ui > prosemirror-model',
        '@nuxt/ui > prosemirror-view',
        '@nuxt/ui > prosemirror-gapcursor',
      ],
    },
  },

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
    cssLayer: 'base',
    clientBundle: {
      scan: true,
    },
  },
})
