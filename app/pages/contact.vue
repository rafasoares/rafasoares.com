<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui'

useTitle('Contact', 'Send me a message, schedule a meeting, or follow me on social media')

const links: ButtonProps[]
  = [
    {
      to: 'https://calendly.com/rafasoares/meet-and-greet',
      icon: 'i-tabler-calendar',
      target: '_blank',
      label: 'Schedule a meeting',
      variant: 'solid',
      color: 'primary',
    },
    {
      to: 'https://www.linkedin.com/in/rafasoaresms',
      icon: 'i-tabler-brand-linkedin',
      target: '_blank',
      variant: 'ghost',
    },
    {
      to: 'https://github.com/rafasoares',
      icon: 'i-tabler-brand-github',
      target: '_blank',
      variant: 'ghost',
    },
  ]
</script>

<template>
  <u-container>
    <u-page>
      <u-page-header
        title="Get in touch"
        description="Send me a message, schedule a meeting, or follow me on social media"
        :links
      />

      <u-page-body>
        <nuxt-page />
      </u-page-body>
    </u-page>
  </u-container>
</template>
