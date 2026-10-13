import { type MenuOption, NIcon } from "naive-ui";
import { h, type Component } from "vue";
import { NuxtLink } from "#components";
import {
  HomeOutline,
  PeopleOutline,
  CubeOutline,
  DocumentTextOutline,
  BarChartOutline,
  StorefrontOutline,
} from "@vicons/ionicons5";

function renderIcon(icon: Component) {
  return () =>
    h(NIcon, null, {
      default: () => h(icon),
    });
}

export const menuOptions: MenuOption[] = [
  {
    label: () => h(NuxtLink, { to: "/" }, () => "Главная"),
    key: "home",
    icon: renderIcon(HomeOutline),
  },
  {
    label: () => h(NuxtLink, { to: "/employees" }, () => "Сотрудники"),
    key: "employees",
    icon: renderIcon(PeopleOutline),
  },
  {
    label: () => h(NuxtLink, { to: "/goods" }, () => "Товары"),
    key: "goods",
    icon: renderIcon(CubeOutline),
  },
  {
    label: () => h(NuxtLink, { to: "/reports" }, () => "Отчеты"),
    key: "reports",
    icon: renderIcon(DocumentTextOutline),
  },
  {
    label: () => h(NuxtLink, { to: "/statistics" }, () => "Статистика"),
    key: "statistics",
    icon: renderIcon(BarChartOutline),
  },
  {
    label: () => h(NuxtLink, { to: "/channels" }, () => "Каналы продаж"),
    key: "channels",
    icon: renderIcon(StorefrontOutline),
  },
];
