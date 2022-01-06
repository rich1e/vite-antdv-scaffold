// import type { RouteRecordRaw } from 'vue-router';
import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout';
import { RouterTy } from '~/router';

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

// const routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     component: () => import('@/views/Demo.vue'),
//   },
//   // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
//   // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
// ];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouterTy = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'Permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'], // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page.vue'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'Page Permission',
  //         roles: ['admin'], // or you can only set roles in sub nav
  //       },
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive.vue'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'Directive Permission',
  //         // if do not set roles, means: this page does not require permission
  //       },
  //     },
  //     {
  //       path: 'code-index',
  //       component: () => import('@/views/permission/CodePermission.vue'),
  //       name: 'CodePermission',
  //       meta: {
  //         title: 'Code Index',
  //       },
  //     },
  //     {
  //       path: 'code-page',
  //       component: () => import('@/views/permission/CodePage.vue'),
  //       name: 'CodePage',
  //       meta: {
  //         title: 'Code Page',
  //         code: 1,
  //       },
  //     },

  //     // 404 page must be placed at the end !!!
  //     // using pathMatch install of "*" in vue-router 4.0
  //     { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true },
  //   ],
  // },

  {
    path: '/tenant',
    component: Layout,
    redirect: '/tenant/search',
    alwaysShow: true, // will always show the root menu
    name: 'Tenant',
    meta: {
      title: '租户管理',
      icon: 'user',
      roles: ['admin', 'editor'], // you can set roles in root nav
    },
    children: [
      {
        path: 'search',
        name: 'TenantSearch',
        component: () => import('@/views/tenant/TenantSearch.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: '租户查询' },
      },
      {
        path: 'add',
        name: 'AddTenant',
        component: () => import('@/views/tenant/AddTenant.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: '添加租户' },
      },
      {
        path: 'edit',
        name: 'EditTenant',
        component: () => import('@/views/tenant/EditTenant.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
        meta: { title: '编辑租户' },
      },
      // 404 page must be placed at the end !!!
      // using pathMatch install of "*" in vue-router 4.0
      { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes,
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
