import type { FormInst, FormItemRule } from "naive-ui";
import { isValidEmail } from "#imports";

export const useValidator = () => {
  const formRef = ref<FormInst | null>(null);

  const required = (field: string): FormItemRule => ({
    required: true,
    message: `Поле ${field} обязательно для заполнения`,
    trigger: ["blur", "input"],
  });

  const email = (message = "Введите корректный email"): FormItemRule => ({
    validator: (_, value: string) => isValidEmail(value),
    message,
    trigger: ["input", "blur"],
  });

  const minLength = (length: number): FormItemRule => ({
    min: length,
    message: `Данное поле должно содержать не менее ${length} символов`,
    trigger: ["blur", "input"],
  });

  const sameAs = (
    target: () => string,
    message = "Значения не совпадают",
  ): FormItemRule => ({
    validator: (_, value: string) => value === target(),
    message,
    trigger: ["input", "blur"],
  });

  return {
    required,
    email,
    minLength,
    sameAs,
    formRef,
  };
};
