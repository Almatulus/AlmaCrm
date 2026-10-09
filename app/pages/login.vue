<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <n-form require-mark-placement="right-hanging">
    <BaseField label="Email" placeholder="Введите email" />

    <BaseField
      type="password"
      label="Пароль"
      placeholder="Введите пароль"
      clearable
    />

    <n-button type="primary" class="w-full">
      <template #icon>
        <BaseIcon name="login" />
      </template>
      Войти
    </n-button>
  </n-form>
</template>
