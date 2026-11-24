<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui'

const socialLink: Partial<ButtonProps> = {
  target: '_blank',
  variant: 'ghost',
  color: 'neutral',
}

const links = ref<ButtonProps[]>([
  {
    ...socialLink,
    icon: 'i-tabler-brand-github',
    to: 'https://github.com/rafasoares',
  },
  {
    ...socialLink,
    icon: 'i-tabler-brand-linkedin',
    to: 'https://www.linkedin.com/in/rafasoaresms/',
  },
  {
    label: 'Get in touch',
    icon: 'i-tabler-mail',
    to: '/contact',
  },
])
</script>

<template>
  <u-page-hero
    orientation="horizontal"
    class="bg-hero"
    :links
  >
    <template #title>
      Hi, I'm Rafael
    </template>

    <template #description>
      <prose-p>Full-stack development. Consulting. Mentoring.</prose-p>

      <prose-p>Over 20 years of experience building web applications with Ruby on Rails, Vue.js, Nuxt.js, and more. Passionate about clean code, performance, and user experience.</prose-p>
    </template>

    <template #headline>
      <app-status-badge />
    </template>

    <div class="relative size-full drop-shadow-lg">
      <landing-screenshot
        name="rails"
        class="-rotate-12 -translate-x-24"
      />

      <landing-screenshot
        name="vue"
        class="-rotate-3 -translate-x-12"
      />

      <landing-screenshot
        name="ui"
        class="rotate-6"
      />
    </div>
  </u-page-hero>
</template>
