<script lang="ts" setup>
import type { PageFeatureProps } from '@nuxt/ui'

const features = ref<PageFeatureProps[]>([
  {
    title: 'Vue.js & Nuxt.js',
    description: 'Dynamic, usable, and performant interfaces for your applications. Full SPAs, Server-Side Rendered, or Static Sites.',
    icon: 'i-tabler-brand-nuxt',
  },
  {
    title: 'Ruby on Rails',
    description: 'Elegant, robust, and scalable APIs for your services. Full RESTful APIs, GraphQL, or WebSocket support.',
    icon: 'i-tabler-diamond',
  },
  {
    title: 'AI-assisted Development',
    description: 'Integrating AI tools to enhance development speed and code quality. From code generation to intelligent debugging.',
    icon: 'i-tabler-robot',
  },
  {
    title: 'Cloud Computing',
    description: 'AWS, Google Cloud, Netlify, Vercel, and others. With or without kubernetes.',
    icon: 'i-tabler-cloud',
  },
  {
    title: 'CSS Frameworks',
    description: 'Tailwind CSS, Bootstrap, Uno CSS, and more. Beautiful and responsive designs.',
    icon: 'i-tabler-brand-css3',
  },
  {
    title: 'Databases',
    description: 'Relational and non-relational databases. PostgreSQL, MySQL, MongoDB, and more.',
    icon: 'i-tabler-database',
  },
])
</script>

<template>
  <u-page-section
    title="Technical Arsenal"
    description="A modern stack of technologies to build high-quality applications. From frontend to backend, and everything in between."
    :features
  />
</template>
