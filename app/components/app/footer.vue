<script setup lang="ts">
</script>

<template>
  <u-footer class="mt-auto">
    <template #left>
      Copyright &copy; Rafael Soares - <nuxt-time
        :datetime="Date.now()"
        year="numeric"
      />
    </template>
  </u-footer>
</template>
