import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/Dashboard.vue'),
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
