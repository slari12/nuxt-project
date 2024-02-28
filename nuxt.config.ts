// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  ssr: true,
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/input.css"],
  modules: ["@nuxt/content", "@pinia/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
