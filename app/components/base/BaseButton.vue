<script setup lang="ts">
import type { IconName } from "./icon/icons";

defineProps<{
  icon?: IconName;
  iconPost?: boolean;
}>();
</script>

<template>
  <n-button class="items-center">
    <BaseIcon class="mr-1" :size="20" v-if="icon && !iconPost" :name="icon" />
    <slot></slot>
    <BaseIcon class="ml-1" :size="20" v-if="icon && iconPost" :name="icon" />
  </n-button>
</template>
