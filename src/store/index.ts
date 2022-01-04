import { App, InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

import app, { AppStateType } from './modules/app';

export interface StateType {
  // any
  app: AppStateType;
}

const store = (() => {
  const store = createStore<StateType>({
    modules: {
      app,
    },
    getters: {
      sidebar: (state) => state.app.sidebar,
      // device: (state) => state.app.device,
      // token: (state) => state.user.token,
      // avatar: (state) => state.user.avatar,
      // name: (state) => state.user.name,
    },
    mutations: {
      // some things
    },
    actions: {
      // some things
    },
  });
  // TODO 处理热更新时需要刷新页面，vuex才能继续使用
  // if (import.meta.env.DEV) {
  //   import.meta.hot.accept(
  //     [
  //       './modules/user'
  //     ],
  //     ([resUser]: any[]) => {
  //       store.hotUpdate({
  //         getters: {
  //           token: (state: StateType) => state.user.token
  //         },
  //         mutations: {},
  //         actions: {},
  //         modules: {
  //           user: resUser
  //         }
  //       });
  //     }
  //   );
  // }
  return store;
})();

// store的key
export const key: InjectionKey<Store<StateType>> = Symbol();

export function setupStore(app: App): void {
  app.use(store, key);
}

export default store;
