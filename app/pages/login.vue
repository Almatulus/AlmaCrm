<script setup lang="ts">
import type { FormRules } from "naive-ui";

definePageMeta({
  layout: "auth",
});

const form = ref({
  email: "",
  password: "",
});

const { email, required, formRef } = useValidator();

const rules: FormRules = {
  email: [required("Email"), email()],
  password: [required("Пароль")],
};
</script>

<template>
  <n-form
    ref="formRef"
    :model="form"
    :rules="rules"
    require-mark-placement="right-hanging"
  >
    <h1
      class="mb-6 text-2xl font-bold tracking-tight text-purple-600 text-center"
    >
      Войти
    </h1>

    <BaseField
      v-model="form.email"
      path="email"
      label="Email"
      placeholder="example@gmail.com"
    />

    <BaseField
      v-model="form.password"
      path="password"
      type="password"
      label="Пароль"
      placeholder=""
      clearable
    />

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
