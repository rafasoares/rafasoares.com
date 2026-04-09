<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <u-footer>
    <template #left>
      Copyright &copy; Rafael Soares - {{ year }}
    </template>
  </u-footer>
</template>
