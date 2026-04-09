<script setup>
const { global: { seo } } = useAppConfig()

useSeoMeta({
  ...seo,

  ogDescription: seo.description,
})
</script>

<template>
  <u-app>
    <nuxt-layout>
      <u-main>
        <nuxt-page />
      </u-main>
    </nuxt-layout>
  </u-app>
</template>
