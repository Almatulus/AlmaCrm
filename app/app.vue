<script setup lang="ts">
import { naiveThemeOverrides } from "~/config/naive-ui";
</script>

<template>
  <div>
    <n-config-provider :theme-overrides="naiveThemeOverrides">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </n-config-provider>
  </div>
</template>
