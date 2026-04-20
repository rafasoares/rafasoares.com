<script lang="ts" setup>
</script>

<template>
  <u-header
    :toggle="false"
  >
    <template #title>
      <icon name="i-tabler-home" />
    </template>

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
  </u-header>
</template>
