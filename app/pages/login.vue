<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <n-form require-mark-placement="right-hanging">
    <n-form-item label="Email">
      <n-input placeholder="Введите email" clearable />
    </n-form-item>

    <n-form-item label="Пароль">
      <n-input type="password" placeholder="Введите пароль" clearable />
    </n-form-item>

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
