import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "default"
declare module "C:/Users/acer/Documents/dev/nuxt-project/node_modules/.pnpm/nuxt@3.5.3_@types+node@18.16.17_sass@1.63.4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}