<script setup lang="ts">
const { titleDisabled = false, width = "60" } = defineProps<{
  width?: string;
  titleDisabled?: boolean;
}>();
</script>

<template>
  <div class="flex flex-col items-center justify-center py-3 gap-1">
    <n-image :width="width" src="/Logo.png" preview-disabled />
    <p v-if="!titleDisabled" class="text-white font-bold">AlmaCrm</p>
  </div>
</template>
