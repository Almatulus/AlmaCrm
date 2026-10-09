<script setup lang="ts">
defineProps<{
  label?: string;
  placeholder?: string;
}>();
</script>

<template>
  <n-form-item :label="label">
    <n-input :placeholder="placeholder" clearable />
  </n-form-item>
</template>
