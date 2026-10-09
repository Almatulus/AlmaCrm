<script setup lang="ts">
import { Glasses, GlassesOutline } from "@vicons/ionicons5";

defineProps<{
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "textarea";
  path?: string;
}>();

const model = defineModel<string>();
</script>

<template>
  <n-form-item :label="label" :path="path">
    <n-input
      v-model:value="model"
      :type="type"
      :placeholder="placeholder"
      show-password-on="click"
      clearable
    >
      <template #password-visible-icon>
        <n-icon :size="16" :component="GlassesOutline" />
      </template>
      <template #password-invisible-icon>
        <n-icon :size="16" :component="Glasses" />
      </template>
    </n-input>
  </n-form-item>
</template>
