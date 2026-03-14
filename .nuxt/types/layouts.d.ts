import type { ComputedRef, MaybeRef } from 'vue'

type ComponentProps<T> = T extends new(...args: any) => { $props: infer P } ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any ? P
  : {}

declare module 'nuxt/app' {
  interface NuxtLayouts {
    "admin-layout": ComponentProps<typeof import("/Users/minjaekim/Desktop/event-dashboard/src/layouts/AdminLayout.vue").default>,
    "dash-board-layout": ComponentProps<typeof import("/Users/minjaekim/Desktop/event-dashboard/src/layouts/DashBoardLayout.vue").default>,
    "manager-layout": ComponentProps<typeof import("/Users/minjaekim/Desktop/event-dashboard/src/layouts/ManagerLayout.vue").default>,
    "root-layout": ComponentProps<typeof import("/Users/minjaekim/Desktop/event-dashboard/src/layouts/RootLayout.vue").default>,
    admin: ComponentProps<typeof import("/Users/minjaekim/Desktop/event-dashboard/src/layouts/admin.vue").default>,
    default: ComponentProps<typeof import("/Users/minjaekim/Desktop/event-dashboard/src/layouts/default.vue").default>,
    manager: ComponentProps<typeof import("/Users/minjaekim/Desktop/event-dashboard/src/layouts/manager.vue").default>,
}
  export type LayoutKey = keyof NuxtLayouts extends never ? string : keyof NuxtLayouts
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}