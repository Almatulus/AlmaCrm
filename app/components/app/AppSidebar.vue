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
    <div class="flex justify-center py-6">
      <n-image
        width="60"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </div>
    <AppMenu :menu-options="menuOptions" />
  </div>
</template>
