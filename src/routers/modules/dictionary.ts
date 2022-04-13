import { RouterRowTy } from '~/router';
import Layout from '@/layout';

/**
 * @description 标签字典路由
 */
const dictionary: RouterRowTy = {
  path: '/dictionary',
  component: Layout,
  redirect: '/dictionary/search',
  alwaysShow: true, // will always show the root menu
  name: 'Dictionary',
  meta: {
    title: '标签字典',
    icon: 'nested',
    roles: ['admin', 'editor'], // you can set roles in root nav
  },
  children: [
    {
      path: 'search',
      name: 'DictSearch',
      component: () => import('@/views/dictionary/DictSearch.vue'),
      //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
      meta: { title: '父/子标签查询' },
    },
    {
      path: 'add',
      name: 'AddDict',
      component: () => import('@/views/dictionary/AddDict.vue'),
      //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
      meta: { title: '添加父/子标签' },
    },
    {
      path: 'edit',
      name: 'EditDict',
      component: () => import('@/views/dictionary/EditDict.vue'),
      //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
      meta: { title: '编辑父/子标签' },
    },
    // 404 page must be placed at the end !!!
    // using pathMatch install of "*" in vue-router 4.0
    { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true },
  ],
};

export default dictionary;
