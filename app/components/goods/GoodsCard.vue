<script setup lang="ts">
const { type = "default" } = defineProps<{
  title: string;
  quantity: number;
  type?: "default" | "warning" | "danger";
}>();

const iconTypeClasses = {
  default: "bg-purple-50 text-purple-600",
  warning: "bg-yellow-50 text-yellow-600",
  danger: "bg-red-50 text-red-600",
};

const quantityTypeClasses = {
  default: "text-gray-900",
  warning: "text-yellow-600",
  danger: "text-red-600",
};

const iconClasses = [
  "flex h-11 w-11 items-center justify-center rounded-xl",
  iconTypeClasses[type],
];

const quantityClasses = [
  "mt-2 text-2xl font-semibold",
  quantityTypeClasses[type],
];
</script>

<template>
  <n-card
    :bordered="false"
    class="cursor-pointer rounded-xl shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
  >
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm text-gray-500">{{ title }}</p>

        <p :class="quantityClasses">
          {{ quantity }}
        </p>
      </div>

      <div :class="iconClasses">
        <BaseIcon name="cube" :size="25" />
      </div>
    </div>
  </n-card>
</template>
