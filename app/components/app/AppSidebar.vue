<script setup lang="ts">
const menuOptions = [
  {
    label: "Главная",
    key: "home",
  },
  {
    label: "Сотрудники",
    key: "employees",
  },
  {
    label: "Товары",
    key: "goods",
  },
  {
    label: "Отчеты",
    key: "reports",
  },
  {
    label: "Статистика",
    key: "statistics",
  },
  {
    label: "Каналы продаж",
    key: "channels",
  },
];
</script>

<template>
  <div class="min-h-screen bg-[#282735]">
    <NuxtLink to="/">
      <AppLogo />
    </NuxtLink>

    <AppMenu :menu-options="menuOptions" />
  </div>
</template>
