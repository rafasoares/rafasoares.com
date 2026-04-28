<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const links = ref<ButtonProps[]>([
  {
    to: '/',
    label: 'Back to home',
    icon: 'i-tabler-home',
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
