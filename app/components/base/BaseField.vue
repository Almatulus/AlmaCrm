<script setup lang="ts">
defineProps<{
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "textarea";
}>();
</script>

<template>
  <n-form-item :label="label">
    <n-input :type="type" :placeholder="placeholder" clearable />
  </n-form-item>
</template>
