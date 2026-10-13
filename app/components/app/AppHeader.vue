<script setup lang="ts">
const profile = {
  avatar: "",
  role: "Admin",
  name: "Almat",
};
</script>

<template>
  <div class="flex justify-between items-center p-3">
    <AppProfile :profile="profile" />
    <n-button>
      <template #icon>
        <BaseIcon name="logout" />
      </template>
      Выйти
    </n-button>
  </div>
</template>
