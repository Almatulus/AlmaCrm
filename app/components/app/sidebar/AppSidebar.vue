<script setup lang="ts">
import { menuOptions } from "./sidebar-menu.ts";
</script>

<template>
  <div class="min-h-screen bg-[#282735]">
    <NuxtLink to="/">
      <AppLogo />
    </NuxtLink>

    <AppMenu :menu-options="menuOptions" />
  </div>
</template>
