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
      Регистрация
    </h1>

    <BaseField label="Имя" placeholder="Базарбек" />

    <BaseField label="Фамилия" placeholder="Базарбекулы" />

    <BaseField label="Email" placeholder="example@gmail.com" />

    <BaseField type="password" label="Пароль" placeholder="" />

    <BaseField type="password" label="Повторите пароль" placeholder="" />

    <n-button type="primary" class="w-full"> Зарегистрироваться </n-button>

    <NuxtLink
      to="/login"
      class="mt-4 block text-center text-sm text-gray-500 transition-colors hover:text-purple-600"
    >
      Есть аккаунт? Войдите
    </NuxtLink>
  </n-form>
</template>
