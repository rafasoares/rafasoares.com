<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>

<template>
  <u-color-mode-image
    :dark="`screenshots/${name}-dark.png`"
    :light="`screenshots/${name}-light.png`"
    class="absolute w-full inset-0 drop-shadow-xl rounded-xl scale-75"
  />
</template>
