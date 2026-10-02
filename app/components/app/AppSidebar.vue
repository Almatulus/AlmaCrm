<script setup lang="ts">
import type { MenuOption } from "naive-ui";

defineProps<{
  menuOptions: MenuOption[];
}>();
</script>

<template>
  <div class="min-h-screen bg-[#282735]">
    <div class="flex justify-center py-6">
      <n-image
        width="60"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </div>
    <n-menu :options="menuOptions"></n-menu>
  </div>
</template>
