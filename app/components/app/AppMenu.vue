<script setup lang="ts">
import type { MenuOption } from "naive-ui";

defineProps<{
  menuOptions: MenuOption[];
}>();

const menuThemeOverrides = {
  itemTextColor: "#ffffff",

  itemTextColorHover: "#a855f7",
  itemTextColorActive: "#ffffff",
  itemTextColorActiveHover: "#ffffff",

  itemColorHover: "rgba(168, 85, 247, 0.1)",
  itemColorActive: "rgba(168, 85, 247, 0.2)",
  itemColorActiveHover: "rgba(168, 85, 247, 0.25)",
};
</script>

<template>
  <n-menu :options="menuOptions" :theme-overrides="menuThemeOverrides"></n-menu>
</template>
