<script setup lang="ts">
const stats = [
  { value: '20+', label: 'Years Building' },
  { value: '50+', label: 'Shipped Systems' },
  { value: 'Rails • Nuxt', label: 'Core Specialization' },
  { value: 'Global', label: 'Distributed Teams' },
]
</script>

<template>
  <u-card class="text-left">
    <dl class="grid grid-cols-2 gap-6 md:grid-cols-4">
      <div
        v-for="stat in stats"
        :key="stat.label"
      >
        <dt class="text-sm text-muted">
          {{ stat.label }}
        </dt>
        <dd class="text-2xl font-semibold text-highlighted sm:text-3xl">
          {{ stat.value }}
        </dd>
      </div>
    </dl>
  </u-card>
</template>
