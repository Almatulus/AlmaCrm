<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <n-form require-mark-placement="right-hanging">
    <h1
      class="mb-6 text-2xl font-bold tracking-tight text-purple-600 text-center"
    >
      Войти
    </h1>
    <BaseField label="Email" placeholder="example@gmail.com" />

    <BaseField type="password" label="Пароль" placeholder="" clearable />

    <n-button type="primary" class="w-full">
      <template #icon>
        <BaseIcon name="login" />
      </template>
      Войти
    </n-button>

    <NuxtLink
      to="/register"
      class="mt-4 block text-center text-sm text-gray-500 transition-colors hover:text-purple-600"
    >
      Нет аккаунта? Зарегистрируйтесь
    </NuxtLink>
  </n-form>
</template>
