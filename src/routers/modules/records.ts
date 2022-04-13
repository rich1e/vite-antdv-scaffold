import { RouterRowTy } from '~/router';
import Layout from '@/layout';

/**
 * @description 操作日志路由
 */
const records: RouterRowTy = {
  path: '/records',
  component: Layout,
  redirect: '/records/search',
  alwaysShow: true, // will always show the root menu
  name: 'Records',
  meta: {
    title: '操作日志',
    icon: 'form',
    roles: ['admin', 'editor'], // you can set roles in root nav
  },
  children: [
    {
      path: 'search',
      name: 'RecordsSearch',
      component: () => import('@/views/records/RecordsSearch.vue'),
      //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
      meta: { title: '日志查询' },
    },
    // 404 page must be placed at the end !!!
    // using pathMatch install of "*" in vue-router 4.0
    { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true },
  ],
};

export default records;
