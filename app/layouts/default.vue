<script setup lang="ts">
const menuOptions = [
  {
    label: "Главная",
    key: "home",
  },
];
</script>

<template>
  <n-layout>
    <n-layout-header> Header </n-layout-header>

    <n-layout has-sider>
      <n-layout-sider>
        <n-menu :options="menuOptions"></n-menu>
      </n-layout-sider>

      <n-layout> Content </n-layout>
    </n-layout>
  </n-layout>
</template>
