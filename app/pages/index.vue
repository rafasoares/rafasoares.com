<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

useTitle('Home')

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
    to: 'mailto:info@rafasoares.com',
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
