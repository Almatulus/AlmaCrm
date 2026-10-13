<script setup lang="ts">
const props = defineProps<{
  profile: {
    avatar?: string;
    role: string;
    name: string;
  };
}>();

const profileLetter = props.profile.name.slice(0, 1);
</script>

<template>
  <div class="flex items-center">
    <n-avatar v-if="profile.avatar" round :size="48" :src="profile.avatar" />
    <n-avatar v-else round :size="48" class="text-lg font-bold">
      {{ profileLetter }}
    </n-avatar>
    <div class="ml-4 font-bold">
      <p class="text-sm text-gray-500">{{ profile.role }}</p>
      <p class="text-lg">{{ profile.name }}</p>
    </div>
  </div>
</template>
