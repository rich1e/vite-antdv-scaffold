import { RouterRowTy } from '~/router';
import Layout from '@/layout';

/**
 * @description 租户管理路由
 */
const tenant: RouterRowTy = {
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
};

export default tenant;
