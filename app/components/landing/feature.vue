<script lang="ts" setup>
import type { PageFeatureProps } from '@nuxt/ui'

const props = defineProps<Pick<PageFeatureProps, 'title' | 'description' | 'icon'>>()
</script>

<template>
  <u-page-card>
    <u-page-feature
      v-bind="props"
    />
  </u-page-card>
</template>
