<script setup lang="ts">
import type { FormRules } from "naive-ui";

definePageMeta({
  layout: "auth",
});

const form = ref({
  name: "",
  secondName: "",
  email: "",
  password: "",
  repeatPassword: "",
});

const { required, email, minLength, sameAs, formRef } = useValidator();

const rules: FormRules = {
  name: [required("Имя")],
  secondName: [required("Фамилия")],
  email: [required("Email"), email()],
  password: [required("Пароль"), minLength(6)],
  repeatPassword: [
    sameAs(() => form.value.password, "Пароли должны совпадать"),
  ],
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
      Регистрация
    </h1>

    <BaseField
      v-model="form.name"
      path="name"
      label="Имя"
      placeholder="Базарбек"
    />

    <BaseField
      v-model="form.secondName"
      path="secondName"
      label="Фамилия"
      placeholder="Базарбекулы"
    />

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
    />

    <BaseField
      v-model="form.repeatPassword"
      path="repeatPassword"
      type="password"
      label="Повторите пароль"
      placeholder=""
    />

    <n-button type="primary" class="w-full"> Зарегистрироваться </n-button>

    <NuxtLink
      to="/login"
      class="mt-4 block text-center text-sm text-gray-500 transition-colors hover:text-purple-600"
    >
      Есть аккаунт? Войдите
    </NuxtLink>
  </n-form>
</template>
