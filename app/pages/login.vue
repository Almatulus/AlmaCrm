<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <n-form require-mark-placement="right-hanging">
    <UiField label="Email" placeholder="Введите email" />

    <UiField
      type="password"
      label="Пароль"
      placeholder="Введите пароль"
      clearable
    />

    <n-form-item>
      <n-button type="primary" class="w-full">
        <template #icon>
          <UiIcon name="logout" />
        </template>
        Войти
      </n-button>
    </n-form-item>
  </n-form>
</template>
