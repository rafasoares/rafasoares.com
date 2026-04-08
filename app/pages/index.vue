<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

useTitle('Home')

const links = ref<ButtonProps[]>([
  {
    label: 'Get in touch',
    icon: 'i-tabler-mail',
    to: '/contact',
  },
])
</script>

<template>
  <u-page>
    <u-page-hero
      title="Hi, I'm Rafael."
      description="This website is currently being rebuilt. Please check again later."
      :links
    >
      <template #headline>
        <u-badge
          color="success"
          variant="soft"
          class="rounded-full"
        >
          <u-chip
            color="success"
            standalone
            inset
          />
          Available for contract and full-time work
        </u-badge>
      </template>
    </u-page-hero>
  </u-page>
</template>
