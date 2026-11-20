<script lang="ts" setup>
const { data: experiences, error: experiencesError } = await useAsyncData(
  'experience:all',
  () => queryCollection('experience').order('startDate', 'DESC').all(),
)

if (experiencesError.value) {
  throw createError({ statusCode: 500, statusMessage: 'Unable to load experience', cause: experiencesError.value })
}
</script>

<template>
  <u-changelog-versions v-if="experiences">
    <about-experience
      v-for="entry in experiences"
      :key="entry.id"
      :entry
    />

    <u-changelog-version
      :indicator="false"
      :ui="{
        footer: 'text-muted block',
      }"
    >
      <template #footer>
        See my
        <u-link
          active
          to="https://www.linkedin.com/in/rafasoaresms"
          target="_blank"
        >
          LinkedIn profile
          <u-icon name="tabler-external-link" />
        </u-link>
        for earlier roles (2004-2015).
      </template>
    </u-changelog-version>
  </u-changelog-versions>
</template>
