<script lang="ts" setup>
import type { NuxtError } from 'nuxt/app'

const { error } = defineProps<{
  error: NuxtError
}>()

useTitle(`Error ${error.status} - ${error.statusText}`)

function hasPath(data: unknown): data is { path: string } {
  return typeof data === 'object' && data !== null && 'path' in data && data.path != null
}
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
        <template
          v-if="error.status === 404"
          #message
        >
          <p v-if="hasPath(error.data)">
            The page <prose-code>{{ error.data.path }}</prose-code> does not exist.
          </p>
          <p v-else>
            The requested page does not exist.
          </p>
        </template>

        <template
          v-else
          #message
        >
          <p>An unexpected error occurred.</p>
        </template>
      </u-error>

      <app-footer />
    </nuxt-layout>
  </u-app>
</template>
