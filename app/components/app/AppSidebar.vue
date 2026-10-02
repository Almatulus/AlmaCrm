<script setup lang="ts">
import type { MenuOption } from "naive-ui";

defineProps<{
  menuOptions: MenuOption[];
}>();
</script>

<template>
  <div class="min-h-screen bg-[#282735]">
    <NuxtLink to="/">
      <AppLogo />
    </NuxtLink>

    <n-menu :options="menuOptions"></n-menu>
  </div>
</template>
