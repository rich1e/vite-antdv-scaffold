/*
 * @Author: rich1e
 * @Date: 2022-04-11 16:55:39
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-12 18:00:55
 */

import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import createRouterGuards from './createRouterGuards';
import { AppRouteRecord } from './types';

const routes: AppRouteRecord[] = [
  {
    path: '/',
    component: () => import('/@/views/Dashboard.vue'),
    meta: {
      title: '控制台',
    },
  },

  {
    path: '/login',
    name: 'LogIn',
    component: () => import('/@/views/Login.vue'),
    meta: {
      title: '登陆',
    },
  },

  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('/@/views/NotFound.vue'),
    meta: {
      title: '404',
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}

export default router;
