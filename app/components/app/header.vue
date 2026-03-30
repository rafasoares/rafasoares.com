<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([])
</script>

<template>
  <header>
    <u-navigation-menu :items />
  </header>
</template>
