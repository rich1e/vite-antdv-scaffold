/// <reference types="vite/client" />

/**
 * @see https://github.com/antfu/vitesse/pull/46#issuecomment-773138077
 */
declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const component: ReturnType<ComponentOptions>;
  export default component;
}

/**
 * @see https://github.com/antfu/vitesse/issues/184
 */
// declare module '*.vue' {
//   import { defineComponent } from 'vue';
//   const Component: ReturnType<typeof defineComponent>;
//   export default Component;
// }
/**
 * @see https://github.com/vuejs/vue-next-webpack-preview/issues/5
 */
// declare module '*.vue' {
//   import { DefineComponent } from 'vue';
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
//   const Component: DefineComponent<{}, {}, any>;
//   export default Component;
// }
