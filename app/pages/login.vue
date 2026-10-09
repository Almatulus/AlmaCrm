<script setup lang="ts">
import { ref, computed } from "vue";
import type { FormInst, FormRules } from "naive-ui";
import { isValidEmail } from "#imports";

definePageMeta({
  layout: "auth",
});

const form = ref({
  email: "",
  password: "",
});

const formRef = ref<FormInst | null>(null);

const rules: FormRules = {
  email: [
    {
      required: true,
      message: "Поле Email обязательно",
      trigger: "blur",
    },
    {
      validator: (_, value: string) => isValidEmail(value),
      message: "Введите корректный email",
      trigger: "input",
    },
  ],

  password: [
    {
      required: true,
      message: "Поле Пароль обязательно",
      trigger: "blur",
    },
  ],
};

const isFormValid = computed(() => {
  return isValidEmail(form.value.email) && form.value.password.length > 0;
});
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

    <n-button :disabled="!isFormValid" type="primary" class="w-full">
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
