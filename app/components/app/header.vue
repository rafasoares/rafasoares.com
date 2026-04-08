<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  { label: 'Projects', icon: 'i-tabler-briefcase', to: '/projects' },
  { label: 'About', icon: 'i-tabler-user', to: '/about' },
  { label: 'Contact', icon: 'i-tabler-mail', to: '/contact' },
])
</script>

<template>
  <header class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">
    <u-navigation-menu
      :items
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      variant="link"
    >
      <template #list-trailing>
        <u-color-mode-button />
        <u-tooltip
          text="View source on Github"
          :kbds="['ctrl', 'G']"
        >
          <u-button
            variant="ghost"
            color="neutral"
            icon="i-tabler-brand-github"
            to="https://github.com/rafasoares/rafasoares"
            target="_blank"
            aria-label="Github"
          />
        </u-tooltip>
      </template>
    </u-navigation-menu>
  </header>
</template>
