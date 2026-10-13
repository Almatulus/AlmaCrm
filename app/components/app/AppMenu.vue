<script setup lang="ts">
import type { MenuOption } from "naive-ui";

defineProps<{
  menuOptions: MenuOption[];
}>();

const route = useRoute();

const activeKey = computed(() => {
  const paths: Record<string, string> = {
    "/": "home",
    "/employees": "employees",
    "/goods": "goods",
    "/reports": "reports",
    "/statistics": "statistics",
    "/channels": "channels",
  };

  return paths[route.path] ?? "home";
});
</script>

<template>
  <n-menu :options="menuOptions" :value="activeKey"></n-menu>
</template>
