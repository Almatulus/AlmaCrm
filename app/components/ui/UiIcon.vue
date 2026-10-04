<script setup lang="ts">
import { type IconName, icons } from "./icons";

defineProps<{
  name: IconName;
  size?: number;
}>();
</script>

<template>
  <n-icon :size="size">
    <component :is="icons[name]" />
  </n-icon>
</template>
