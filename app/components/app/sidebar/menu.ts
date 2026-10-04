import { type MenuOption, NIcon } from "naive-ui";
import { h } from "vue";
import type { Component } from "vue";
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
    label: "Главная",
    key: "home",
    icon: renderIcon(HomeOutline),
  },
  {
    label: "Сотрудники",
    key: "employees",
    icon: renderIcon(PeopleOutline),
  },
  {
    label: "Товары",
    key: "goods",
    icon: renderIcon(CubeOutline),
  },
  {
    label: "Отчеты",
    key: "reports",
    icon: renderIcon(DocumentTextOutline),
  },
  {
    label: "Статистика",
    key: "statistics",
    icon: renderIcon(BarChartOutline),
  },
  {
    label: "Каналы продаж",
    key: "channels",
    icon: renderIcon(StorefrontOutline),
  },
];
