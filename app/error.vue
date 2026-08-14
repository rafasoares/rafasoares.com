<script lang="ts" setup>
import type { NuxtError } from 'nuxt/app'

const { error } = defineProps<{
  error: NuxtError
}>()

useTitle(`Error ${error.status} - ${error.statusText}`)

function hasPath(data: unknown): data is { path: string } {
  return typeof data === 'object' && data !== null && 'path' in data && data.path != null
}

const description = computed(() => {
  if (error.status !== 404) return error.message || 'An unexpected error occurred.'

  if (!hasPath(error.data)) return 'The requested page does not exist.'

  return `The page \`${error.data.path}\` does not exist.`
})
</script>

<template>
  <u-app>
    <app-header />

    <nuxt-layout>
      <u-error
        :error
        :clear="{
          color: 'neutral',
          icon: 'i-tabler-arrow-left',
          size: 'lg',
        }"
      >
        <template
          v-if="error.status === 404"
          #statusMessage
        >
          Page not found
        </template>

        <template #message>
          <markdown
            v-if="error.status === 404"
            :value="description"
          />
        </template>
      </u-error>

      <app-footer />
    </nuxt-layout>
  </u-app>
</template>
