/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@kangc/v-md-editor/lib/theme/vuepress.js'
declare module '@kangc/v-md-editor'
declare module '@kangc/v-md-editor/lib/lang/en-US.js'
declare module '@kangc/v-md-editor/lib/lang/zh-CN.js'

declare module 'prismjs'
