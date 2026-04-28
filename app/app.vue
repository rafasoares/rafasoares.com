<script setup>
const { global: { seo } } = useAppConfig()

useSeoMeta({
  ...seo,

  ogDescription: seo.description,
})
</script>

<template>
  <u-app :toaster="{ position: 'top-right' }">
    <app-header />

    <u-main class="flex flex-col">
      <nuxt-layout>
        <nuxt-page />

        <app-footer />
      </nuxt-layout>
    </u-main>
  </u-app>
</template>
