<script setup lang="ts">
import type { DataTableColumns } from "naive-ui";
import { h } from "vue";
import { NButton, NTag, NSpace, NDropdown } from "naive-ui";
import {
  AddOutline,
  SearchOutline,
  EllipsisHorizontal,
  CubeOutline,
} from "@vicons/ionicons5";

interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  status: "В наличии" | "Заканчивается" | "Нет в наличии";
}

const products: Product[] = [
  {
    id: 1,
    name: "Беспроводные наушники",
    sku: "PRD-001",
    category: "Электроника",
    price: 24990,
    stock: 24,
    status: "В наличии",
  },
  {
    id: 2,
    name: "Механическая клавиатура",
    sku: "PRD-002",
    category: "Аксессуары",
    price: 18990,
    stock: 5,
    status: "Заканчивается",
  },
  {
    id: 3,
    name: "USB-C кабель",
    sku: "PRD-003",
    category: "Аксессуары",
    price: 2990,
    stock: 0,
    status: "Нет в наличии",
  },
  {
    id: 4,
    name: "Компьютерная мышь",
    sku: "PRD-004",
    category: "Периферия",
    price: 8990,
    stock: 18,
    status: "В наличии",
  },
  {
    id: 5,
    name: "Внешний SSD 1 ТБ",
    sku: "PRD-005",
    category: "Накопители",
    price: 42990,
    stock: 3,
    status: "Заканчивается",
  },
];

const search = ref("");
const selectedStatus = ref<string | null>(null);

const filteredProducts = computed(() =>
  products.filter((product) => {
    const query = search.value.toLowerCase().trim();

    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.sku.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);

    const matchesStatus =
      !selectedStatus.value || product.status === selectedStatus.value;

    return matchesSearch && matchesStatus;
  }),
);

const formatPrice = (price: number) =>
  new Intl.NumberFormat("ru-RU").format(price) + " ₸";

const statusType = (status: Product["status"]) => {
  if (status === "В наличии") return "success";
  if (status === "Заканчивается") return "warning";
  return "error";
};

const columns: DataTableColumns<Product> = [
  {
    title: "Товар",
    key: "name",
    minWidth: 220,
    render(row) {
      return h("div", { class: "flex items-center gap-3" }, [
        h(
          "div",
          {
            class:
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-600",
          },
          [h(CubeOutline, { class: "h-5 w-5" })],
        ),
        h("div", { class: "min-w-0" }, [
          h("div", { class: "font-medium text-gray-800" }, row.name),
          h("div", { class: "mt-1 text-xs text-gray-400" }, row.sku),
        ]),
      ]);
    },
  },
  {
    title: "Категория",
    key: "category",
    minWidth: 140,
  },
  {
    title: "Цена",
    key: "price",
    minWidth: 120,
    render(row) {
      return h(
        "span",
        { class: "font-medium text-gray-800" },
        formatPrice(row.price),
      );
    },
  },
  {
    title: "Остаток",
    key: "stock",
    minWidth: 100,
    render(row) {
      return h(
        "span",
        {
          class:
            row.stock <= 5 ? "font-medium text-orange-600" : "text-gray-600",
        },
        `${row.stock} шт.`,
      );
    },
  },
  {
    title: "Статус",
    key: "status",
    minWidth: 160,
    render(row) {
      return h(
        NTag,
        {
          type: statusType(row.status),
          bordered: false,
          round: true,
        },
        { default: () => row.status },
      );
    },
  },
  {
    title: "",
    key: "actions",
    width: 70,
    align: "center",
    render(row) {
      return h(
        NDropdown,
        {
          trigger: "click",
          options: [
            { label: "Редактировать", key: "edit" },
            { label: "Удалить", key: "delete" },
          ],
          onSelect: (key: string) => {
            if (key === "edit") {
              console.log("Редактировать товар", row.id);
            }

            if (key === "delete") {
              console.log("Удалить товар", row.id);
            }
          },
        },
        {
          default: () =>
            h(
              NButton,
              {
                quaternary: true,
                circle: true,
                size: "small",
              },
              { icon: () => h(EllipsisHorizontal, { size: 20 }) },
            ),
        },
      );
    },
  },
];

const totalProducts = computed(() => products.length);
const lowStock = computed(
  () => products.filter((p) => p.stock > 0 && p.stock <= 5).length,
);
const outOfStock = computed(() => products.filter((p) => p.stock === 0).length);
</script>

<template>
  <div class="flex min-h-full flex-col gap-6">
    <AppPageHeader title="Список товаров" subtitle="Управление списком товаров">
      <BaseButton
        type="primary"
        icon="add"
        @click="console.log('Добавить товар')"
      >
        Добавить товар
      </BaseButton>
    </AppPageHeader>

    <!-- Статистика -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <n-card :bordered="false" class="rounded-xl shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Всего товаров</p>
            <p class="mt-2 text-2xl font-semibold text-gray-800">
              {{ totalProducts }}
            </p>
          </div>
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600"
          >
            <CubeOutline class="h-6 w-6" />
          </div>
        </div>
      </n-card>

      <n-card :bordered="false" class="rounded-xl shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Заканчиваются</p>
            <p class="mt-2 text-2xl font-semibold text-orange-600">
              {{ lowStock }}
            </p>
          </div>
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600"
          >
            <CubeOutline class="h-6 w-6" />
          </div>
        </div>
      </n-card>

      <n-card :bordered="false" class="rounded-xl shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Нет в наличии</p>
            <p class="mt-2 text-2xl font-semibold text-red-600">
              {{ outOfStock }}
            </p>
          </div>
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600"
          >
            <CubeOutline class="h-6 w-6" />
          </div>
        </div>
      </n-card>
    </div>

    <!-- Таблица товаров -->
    <n-card :bordered="false" class="rounded-xl shadow-sm">
      <div
        class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h2 class="text-base font-semibold text-gray-800">Все товары</h2>
          <p class="mt-1 text-sm text-gray-500">
            Найдено: {{ filteredProducts.length }}
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
          <n-input
            v-model:value="search"
            clearable
            placeholder="Поиск товаров..."
            class="sm:w-64"
          >
            <template #prefix>
              <SearchOutline class="h-4 w-4 text-gray-400" />
            </template>
          </n-input>

          <n-select
            v-model:value="selectedStatus"
            clearable
            placeholder="Все статусы"
            class="sm:w-48"
            :options="[
              { label: 'В наличии', value: 'В наличии' },
              { label: 'Заканчивается', value: 'Заканчивается' },
              { label: 'Нет в наличии', value: 'Нет в наличии' },
            ]"
          />
        </div>
      </div>

      <n-data-table
        :columns="columns"
        :data="filteredProducts"
        :row-key="(row: Product) => row.id"
        :pagination="{ pageSize: 10 }"
        :bordered="false"
        :single-line="false"
        :scroll-x="850"
      />

      <div
        v-if="filteredProducts.length === 0"
        class="py-8 text-center text-sm text-gray-500"
      >
        Товары не найдены
      </div>
    </n-card>
  </div>
</template>
