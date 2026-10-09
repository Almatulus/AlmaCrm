// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: true,
  },

  vite: {
    plugins: [
      Components({
        dirs: [],
        resolvers: [NaiveUiResolver()],
        dts: false,
      }),
    ],

    ssr: {
      noExternal: ["naive-ui", "vueuc"],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "nuxtjs-naive-ui"],
});
