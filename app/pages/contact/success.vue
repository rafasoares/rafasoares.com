<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    to: '/',
    label: 'Home',
    icon: 'i-tabler-home',
  },
  {
    to: '/contact',
    label: 'Back to form',
    icon: 'i-tabler-arrow-left',
    color: 'neutral',
    variant: 'ghost',
  },
])
</script>

<template>
  <u-page-hero
    title="Message sent!"
    description="Thank you for reaching out. I'll get back to you as soon as possible."
    :links
  >
    <template #headline>
      <u-icon
        name="i-tabler-mood-happy-filled"
        class="text-8xl text-success"
      />
    </template>
  </u-page-hero>
</template>
