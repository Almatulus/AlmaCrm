<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <header
    class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-2"
  >
    <div>
      <h1 class="text-2xl font-bold tracking-tight text-gray-900">
        {{ title }}
      </h1>

      <p class="mt-1 text-sm text-gray-500">
        {{ subtitle }}
      </p>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <slot></slot>
    </div>
  </header>
</template>
