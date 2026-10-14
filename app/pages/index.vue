<script setup lang="ts">
import { computed, h } from "vue";
import { NButton, NTag, type DataTableColumns } from "naive-ui";
import {
  CashOutline,
  CartOutline,
  CubeOutline,
  TrendingUpOutline,
  ArrowForwardOutline,
  EllipsisHorizontalOutline,
} from "@vicons/ionicons5";

type Sale = {
  id: number;
  product: string;
  customer: string;
  date: string;
  channel: string;
  amount: number;
  status: "Завершена" | "В обработке" | "Отменена";
};

const formatMoney = (value: number) =>
  new Intl.NumberFormat("ru-KZ", {
    style: "currency",
    currency: "KZT",
    maximumFractionDigits: 0,
  }).format(value);

const metrics = [
  {
    label: "Общая выручка",
    value: "2 450 000 ₸",
    change: "+12,5%",
    caption: "к предыдущему периоду",
    icon: CashOutline,
    iconClass: "bg-violet-100 text-violet-700",
    positive: true,
  },
  {
    label: "Количество продаж",
    value: "184",
    change: "+8,2%",
    caption: "к предыдущему периоду",
    icon: CartOutline,
    iconClass: "bg-blue-100 text-blue-700",
    positive: true,
  },
  {
    label: "Продано товаров",
    value: "327",
    change: "+5,4%",
    caption: "к предыдущему периоду",
    icon: CubeOutline,
    iconClass: "bg-emerald-100 text-emerald-700",
    positive: true,
  },
  {
    label: "Средний чек",
    value: "13 315 ₸",
    change: "-2,1%",
    caption: "к предыдущему периоду",
    icon: TrendingUpOutline,
    iconClass: "bg-amber-100 text-amber-700",
    positive: false,
  },
];

const chartValues = [34, 48, 39, 64, 52, 78, 68];
const chartLabels = [
  "7 окт.",
  "8 окт.",
  "9 окт.",
  "10 окт.",
  "11 окт.",
  "12 окт.",
  "13 окт.",
];

const chartPoints = computed(() =>
  chartValues
    .map((value, index) => {
      const x = 28 + index * 54;
      const y = 142 - value * 1.45;
      return `${x},${y}`;
    })
    .join(" "),
);

const sales: Sale[] = [
  {
    id: 1048,
    product: "Беспроводные наушники",
    customer: "Алексей К.",
    date: "13 окт. 2026, 15:42",
    channel: "Kaspi",
    amount: 25000,
    status: "Завершена",
  },
  {
    id: 1047,
    product: "Умные часы",
    customer: "Мария С.",
    date: "13 окт. 2026, 14:18",
    channel: "Instagram",
    amount: 18500,
    status: "Завершена",
  },
  {
    id: 1046,
    product: "Портативная колонка",
    customer: "Данияр Т.",
    date: "13 окт. 2026, 12:06",
    channel: "Kaspi",
    amount: 32000,
    status: "В обработке",
  },
  {
    id: 1045,
    product: "Зарядное устройство",
    customer: "Анна П.",
    date: "12 окт. 2026, 18:30",
    channel: "Магазин",
    amount: 8500,
    status: "Отменена",
  },
];

const statusType = (status: Sale["status"]) => {
  if (status === "Завершена") return "success";
  if (status === "В обработке") return "warning";
  return "error";
};

const columns: DataTableColumns<Sale> = [
  {
    title: "Продажа",
    key: "product",
    minWidth: 220,
    render: (row) =>
      h("div", { class: "flex flex-col gap-1" }, [
        h("span", { class: "font-medium text-gray-800" }, row.product),
        h("span", { class: "text-xs text-gray-500" }, `Заказ #${row.id}`),
      ]),
  },
  {
    title: "Клиент",
    key: "customer",
    minWidth: 120,
  },
  {
    title: "Канал",
    key: "channel",
    minWidth: 100,
  },
  {
    title: "Дата",
    key: "date",
    minWidth: 170,
  },
  {
    title: "Сумма",
    key: "amount",
    minWidth: 120,
    render: (row) =>
      h(
        "span",
        { class: "font-semibold text-gray-800 whitespace-nowrap" },
        formatMoney(row.amount),
      ),
  },
  {
    title: "Статус",
    key: "status",
    minWidth: 130,
    render: (row) =>
      h(
        NTag,
        { type: statusType(row.status), bordered: false, round: true },
        { default: () => row.status },
      ),
  },
];

const topProducts = [
  {
    name: "Беспроводные наушники",
    category: "Электроника",
    sold: 82,
    revenue: "820 000 ₸",
    percent: 86,
  },
  {
    name: "Умные часы",
    category: "Электроника",
    sold: 64,
    revenue: "640 000 ₸",
    percent: 67,
  },
  {
    name: "Портативная колонка",
    category: "Аксессуары",
    sold: 49,
    revenue: "490 000 ₸",
    percent: 51,
  },
  {
    name: "Зарядное устройство",
    category: "Аксессуары",
    sold: 38,
    revenue: "190 000 ₸",
    percent: 40,
  },
];
</script>

<template>
  <main class="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
    <div class="mx-auto max-w-[1440px] space-y-6">
      <!-- Заголовок -->
      <header
        class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-gray-900">Обзор</h1>
          <p class="mt-1 text-sm text-gray-500">
            Добро пожаловать! Вот что происходит с продажами вашего магазина.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <n-select
            :options="[
              { label: 'Последние 7 дней', value: '7d' },
              { label: 'Последние 30 дней', value: '30d' },
              { label: 'Этот месяц', value: 'month' },
            ]"
            default-value="7d"
            class="w-44"
          />
          <n-button type="primary">
            <template #icon>
              <n-icon><ArrowForwardOutline /></n-icon>
            </template>
            Создать отчёт
          </n-button>
        </div>
      </header>

      <!-- Карточки показателей -->
      <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <n-card
          v-for="metric in metrics"
          :key="metric.label"
          :bordered="false"
          class="rounded-2xl shadow-sm"
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="text-sm font-medium text-gray-500">
                {{ metric.label }}
              </p>
              <p class="mt-3 text-2xl font-bold tracking-tight text-gray-900">
                {{ metric.value }}
              </p>
            </div>
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
              :class="metric.iconClass"
            >
              <n-icon :component="metric.icon" size="22" />
            </div>
          </div>
          <div class="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span
              class="rounded-full px-2 py-1 font-semibold"
              :class="
                metric.positive
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'bg-rose-50 text-rose-700'
              "
            >
              {{ metric.change }}
            </span>
            <span class="text-gray-500">{{ metric.caption }}</span>
          </div>
        </n-card>
      </section>

      <!-- График и краткая сводка -->
      <section class="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <n-card :bordered="false" class="rounded-2xl shadow-sm xl:col-span-2">
          <div class="mb-5 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 class="text-base font-semibold text-gray-900">
                Динамика выручки
              </h2>
              <p class="mt-1 text-sm text-gray-500">
                Выручка по дням за выбранный период
              </p>
            </div>
            <div class="text-right">
              <p class="text-2xl font-bold text-gray-900">1 840 000 ₸</p>
              <p class="mt-1 text-xs font-medium text-emerald-600">
                ↑ 12,5% к прошлому периоду
              </p>
            </div>
          </div>

          <div class="w-full overflow-hidden">
            <svg
              viewBox="0 0 390 190"
              class="h-56 w-full"
              role="img"
              aria-label="Демонстрационный график выручки за семь дней"
            >
              <defs>
                <linearGradient id="revenueFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stop-color="#a855f7" stop-opacity=".22" />
                  <stop offset="100%" stop-color="#a855f7" stop-opacity="0" />
                </linearGradient>
              </defs>
              <g stroke="#e5e7eb" stroke-dasharray="4 4">
                <line x1="28" y1="26" x2="352" y2="26" />
                <line x1="28" y1="64" x2="352" y2="64" />
                <line x1="28" y1="102" x2="352" y2="102" />
                <line x1="28" y1="140" x2="352" y2="140" />
              </g>
              <polygon
                :points="`28,150 ${chartPoints} 352,150`"
                fill="url(#revenueFill)"
              />
              <polyline
                :points="chartPoints"
                fill="none"
                stroke="#a855f7"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                v-for="(value, index) in chartValues"
                :key="chartLabels[index]"
                :cx="28 + index * 54"
                :cy="142 - value * 1.45"
                r="4"
                fill="#fff"
                stroke="#a855f7"
                stroke-width="2"
              />
              <g fill="#9ca3af" font-size="9" text-anchor="middle">
                <text
                  v-for="(label, index) in chartLabels"
                  :key="label"
                  :x="28 + index * 54"
                  y="172"
                >
                  {{ label }}
                </text>
              </g>
            </svg>
          </div>
          <div class="mt-2 flex items-center gap-2 text-xs text-gray-500">
            <span class="h-2.5 w-2.5 rounded-full bg-violet-500" />
            Выручка
            <span class="ml-auto">Данные для демонстрации</span>
          </div>
        </n-card>

        <n-card :bordered="false" class="rounded-2xl shadow-sm">
          <div class="flex items-start justify-between">
            <div>
              <h2 class="text-base font-semibold text-gray-900">
                Каналы продаж
              </h2>
              <p class="mt-1 text-sm text-gray-500">Распределение выручки</p>
            </div>
            <n-button
              quaternary
              circle
              size="small"
              aria-label="Дополнительные действия"
            >
              <template #icon
                ><n-icon><EllipsisHorizontalOutline /></n-icon
              ></template>
            </n-button>
          </div>

          <div class="my-7 flex justify-center">
            <div
              class="relative flex h-40 w-40 items-center justify-center rounded-full"
              style="
                background: conic-gradient(
                  #a855f7 0% 48%,
                  #60a5fa 48% 76%,
                  #34d399 76% 91%,
                  #fbbf24 91% 100%
                );
              "
            >
              <div
                class="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white"
              >
                <span class="text-xs text-gray-500">Всего</span>
                <span class="mt-1 text-lg font-bold text-gray-900"
                  >2,45 млн</span
                >
                <span class="text-xs text-gray-500">тенге</span>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div
              v-for="channel in [
                {
                  name: 'Kaspi',
                  amount: '1 176 000 ₸',
                  share: '48%',
                  color: 'bg-violet-500',
                },
                {
                  name: 'Instagram',
                  amount: '686 000 ₸',
                  share: '28%',
                  color: 'bg-blue-400',
                },
                {
                  name: 'Магазин',
                  amount: '367 500 ₸',
                  share: '15%',
                  color: 'bg-emerald-400',
                },
                {
                  name: 'Другие',
                  amount: '220 500 ₸',
                  share: '9%',
                  color: 'bg-amber-400',
                },
              ]"
              :key="channel.name"
              class="flex items-center gap-3"
            >
              <span
                class="h-2.5 w-2.5 shrink-0 rounded-full"
                :class="channel.color"
              />
              <span class="min-w-0 flex-1 truncate text-sm text-gray-600">{{
                channel.name
              }}</span>
              <span class="text-xs text-gray-500">{{ channel.share }}</span>
              <span class="w-28 text-right text-sm font-medium text-gray-800">{{
                channel.amount
              }}</span>
            </div>
          </div>
        </n-card>
      </section>

      <!-- Последние продажи -->
      <section class="grid grid-cols-1 gap-6 2xl:grid-cols-3">
        <n-card :bordered="false" class="rounded-2xl shadow-sm 2xl:col-span-2">
          <template #header>
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 class="text-base font-semibold text-gray-900">
                  Последние продажи
                </h2>
                <p class="mt-1 text-sm font-normal text-gray-500">
                  Недавние операции в магазине
                </p>
              </div>
              <n-button text type="primary"
                >Все продажи
                <template #icon
                  ><n-icon><ArrowForwardOutline /></n-icon></template
              ></n-button>
            </div>
          </template>

          <div class="-mx-2 overflow-x-auto">
            <n-data-table
              :columns="columns"
              :data="sales"
              :bordered="false"
              :single-line="false"
              :pagination="false"
              size="small"
              :scroll-x="850"
            />
          </div>
        </n-card>

        <!-- Топ товаров -->
        <n-card :bordered="false" class="rounded-2xl shadow-sm">
          <template #header>
            <div class="flex items-center justify-between gap-3">
              <div>
                <h2 class="text-base font-semibold text-gray-900">
                  Популярные товары
                </h2>
                <p class="mt-1 text-sm font-normal text-gray-500">
                  По количеству продаж
                </p>
              </div>
              <n-button text type="primary">Все товары</n-button>
            </div>
          </template>

          <div class="space-y-5">
            <div
              v-for="(product, index) in topProducts"
              :key="product.name"
              class="space-y-2"
            >
              <div class="flex items-start gap-3">
                <div
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm font-semibold text-gray-600"
                >
                  {{ index + 1 }}
                </div>
                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-medium text-gray-800">
                    {{ product.name }}
                  </p>
                  <p class="mt-1 text-xs text-gray-500">
                    {{ product.category }} · {{ product.sold }} шт.
                  </p>
                </div>
                <p
                  class="whitespace-nowrap text-sm font-semibold text-gray-800"
                >
                  {{ product.revenue }}
                </p>
              </div>
              <div class="h-1.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  class="h-full rounded-full bg-violet-500"
                  :style="{ width: `${product.percent}%` }"
                />
              </div>
            </div>
          </div>
        </n-card>
      </section>

      <p class="text-center text-xs text-gray-400">
        Все показатели на этой странице демонстрационные.
      </p>
    </div>
  </main>
</template>
