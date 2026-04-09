<script lang="ts" setup>
import type { NuxtError } from 'nuxt/app'

const { error } = defineProps<{
  error: NuxtError
}>()

useTitle(`Error ${error.status} - ${error.statusText}`)
</script>

<template>
  <u-app>
    <nuxt-layout>
      <u-main>
        <u-error
          :error
          :clear="{
            color: 'neutral',
            icon: 'i-tabler-arrow-left',
            size: 'lg',
          }"
        />
      </u-main>
    </nuxt-layout>
  </u-app>
</template>
