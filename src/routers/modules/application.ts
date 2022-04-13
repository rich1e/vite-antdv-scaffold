import { RouterRowTy } from '~/router';
import Layout from '@/layout';

/**
 * @description 应用权限路由
 */
const application: RouterRowTy = {
  path: '/application',
  component: Layout,
  redirect: '/application/search',
  alwaysShow: true, // will always show the root menu
  name: 'Application',
  meta: {
    title: '应用权限',
    icon: 'tree',
    roles: ['admin', 'editor'], // you can set roles in root nav
  },
  children: [
    {
      path: 'search',
      name: 'AppSearch',
      component: () => import('@/views/application/AppSearch.vue'),
      //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
      meta: { title: '应用查询' },
    },
    {
      path: 'add',
      name: 'AddApp',
      component: () => import('@/views/application/AddApp.vue'),
      //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
      meta: { title: '添加应用' },
    },
    {
      path: 'edit',
      name: 'EditApp',
      component: () => import('@/views/application/EditApp.vue'),
      //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
      meta: { title: '编辑应用' },
    },
    // 404 page must be placed at the end !!!
    // using pathMatch install of "*" in vue-router 4.0
    { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true },
  ],
};

export default application;
