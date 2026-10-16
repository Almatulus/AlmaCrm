<script setup lang="ts">
import { h, ref } from "vue";
import { NButton, NIcon, type DataTableColumns } from "naive-ui";
import { CheckmarkCircleOutline, BanOutline } from "@vicons/ionicons5";

interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Активен" | "Неактивен";
}

const employees = ref<Employee[]>([
  {
    id: 1,
    name: "Александр Иванов",
    email: "alex@example.com",
    role: "Администратор",
    status: "Активен",
  },
  {
    id: 2,
    name: "Мария Петрова",
    email: "maria@example.com",
    role: "Менеджер",
    status: "Активен",
  },
  {
    id: 3,
    name: "Данияр Садыков",
    email: "daniyar@example.com",
    role: "Сотрудник",
    status: "Неактивен",
  },
]);

const toggleEmployeeStatus = (employee: Employee) => {
  employee.status = employee.status === "Активен" ? "Неактивен" : "Активен";
};

const columns: DataTableColumns<Employee> = [
  {
    title: "Имя",
    key: "name",
    sorter: "default",
  },
  {
    title: "Email",
    key: "email",
  },
  {
    title: "Роль",
    key: "role",
  },
  {
    title: "Статус",
    key: "status",
    render(row) {
      return h(
        "span",
        {
          class: row.status === "Активен" ? "text-green-600" : "text-gray-400",
        },
        row.status,
      );
    },
  },
  {
    title: "Действия",
    key: "actions",
    align: "center",
    render(row) {
      const isActive = row.status === "Активен";

      return h(
        NButton,
        {
          size: "small",
          quaternary: true,
          circle: true,
          type: isActive ? "error" : "success",
          "aria-label": isActive
            ? "Деактивировать сотрудника"
            : "Активировать сотрудника",
          title: isActive ? "Деактивировать" : "Активировать",
          onClick: () => toggleEmployeeStatus(row),
        },
        {
          icon: () =>
            h(NIcon, null, {
              default: () => h(isActive ? BanOutline : CheckmarkCircleOutline),
            }),
        },
      );
    },
  },
];
</script>

<template>
  <div class="flex min-h-full flex-col gap-6">
    <header
      class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-gray-900">
          Права доступа
        </h1>

        <p class="mt-1 text-sm text-gray-500">
          Управление сотрудниками и их доступом к системе
        </p>
      </div>
    </header>

    <n-data-table
      :columns="columns"
      :data="employees"
      :row-key="(row: Employee) => row.id"
      :bordered="false"
      striped
    />
  </div>
</template>
