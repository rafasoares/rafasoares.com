<script setup>
const { global: { seo } } = useAppConfig()

useSeoMeta({
  ...seo,

  ogDescription: seo.description,
})
</script>

<template>
  <u-app>
    <app-header />

    <nuxt-layout>
      <u-main class="flex flex-col">
        <nuxt-page />

        <app-footer />
      </u-main>
    </nuxt-layout>
  </u-app>
</template>
