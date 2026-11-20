<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'About', to: '/about' },
]
</script>

<template>
  <u-header>
    <template #title>
      <icon name="i-tabler-home" />
    </template>

    <u-navigation-menu :items />

    <template #right>
      <u-color-mode-button />
      <u-tooltip
        text="View source on Github"
        :kbds="['ctrl', 'G']"
      >
        <u-button
          variant="ghost"
          color="neutral"
          icon="i-tabler-brand-github"
          to="https://github.com/rafasoares/rafasoares.com"
          target="_blank"
          aria-label="Github"
        />
      </u-tooltip>
    </template>

    <template #body>
      <u-navigation-menu
        :items
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </u-header>
</template>
