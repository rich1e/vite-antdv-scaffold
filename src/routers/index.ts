import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { RouterTy } from '~/router';
import Layout from '@/layout';

import { tenant, dictionary, application, records } from './modules';

/**
 * @description 静态路由
 */
export const constantRoutes: RouterTy = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/innerSys/redirect'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/innerSys/login'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/views/innerSys/notfound/404.vue'),
    hidden: true,
  },
  {
    path: '/401',
    component: () => import('@/views/innerSys/notfound/401.vue'),
    hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/innerSys'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: 'Dashboard', elSvgIcon: 'Fold' },
      },
    ],
  },
];

/**
 * @description 动态路由，根据用户角色动态加载
 */
export const asyncRoutes: RouterTy = [tenant, dictionary, application, records];

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes,
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
