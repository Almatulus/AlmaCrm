import type { GlobalThemeOverrides } from "naive-ui";

export const naiveThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#a855f7",
    primaryColorHover: "#9333ea",
    primaryColorPressed: "#7e22ce",

    warningColor: "#F8B712",

    successColor: "#54B800",

    errorColor: "#ef4444",
  },

  Menu: {
    itemTextColor: "#ffffff",
    itemTextColorHover: "#a855f7",
    itemTextColorActive: "#ffffff",
    itemTextColorActiveHover: "#ffffff",

    itemIconColor: "#ffffff",
    itemIconColorHover: "#a855f7",
    itemIconColorActive: "#ffffff",
    itemIconColorActiveHover: "#ffffff",

    itemColorHover: "rgba(168, 85, 247, 0.1)",
    itemColorActive: "rgba(168, 85, 247, 0.2)",
    itemColorActiveHover: "rgba(168, 85, 247, 0.25)",
  },
};
