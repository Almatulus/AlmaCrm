<script setup lang="ts">
import type { MenuOption } from "naive-ui";

defineProps<{
  menuOptions: MenuOption[];
}>();
</script>

<template>
  <n-menu :options="menuOptions"></n-menu>
</template>
