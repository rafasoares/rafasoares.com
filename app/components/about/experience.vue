<script setup lang="ts">
import type { Collections } from '@nuxt/content'

defineProps<{
  entry: Collections['experience']
}>()

const { format } = Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short' })

function formatDate(date?: string) {
  if (!date) return 'Present'

  return format(new Date(date))
}
</script>

<template>
  <u-changelog-version
    :id="entry.stem"
    :key="entry.id"
    :title="entry.title"
    :to="`#${entry.stem}`"
    :as="{ title: 'h3' }"
  >
    <template #description>
      {{ entry.company }}
      <u-icon
        name="tabler-calendar"
        class="size-5 align-text-top"
      />
      {{ formatDate(entry.startDate) }}
      <u-icon
        name="tabler-arrow-right"
        class="size-3"
      />
      {{ formatDate(entry.endDate) }}
    </template>

    <template #badge>
      <u-badge
        color="neutral"
        variant="soft"
        icon="tabler-map-pin"
      >
        {{ entry.location }}
      </u-badge>
    </template>

    <template #body>
      <content-renderer :value="entry.body" />

      <footer class="flex flex-wrap gap-2">
        <u-badge
          v-for="skill in entry.skills"
          :key="skill"
          color="neutral"
          variant="subtle"
        >
          {{ skill }}
        </u-badge>
      </footer>
    </template>
  </u-changelog-version>
</template>
