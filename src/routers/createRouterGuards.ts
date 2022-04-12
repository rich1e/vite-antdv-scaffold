/*
 * @Author: rich1e
 * @Date: 2022-04-11 20:04:26
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-12 17:52:40
 */
import { isNavigationFailure, NavigationGuardNext, Router } from 'vue-router';
import { AppRouteLocationNormalized } from './types';

const allowList = ['LogIn']; // no redirect whitelist
const rootRoutePath = '/login';

export default function createRouterGuards(router: Router): void {
  router.beforeEach(
    (
      to: AppRouteLocationNormalized,
      from: AppRouteLocationNormalized,
      next: NavigationGuardNext,
    ) => {
      const token = localStorage.getItem('ACCESS_TOKEN');
      const { name, path, fullPath } = to;

      // 已登录
      if (token) {
        if (path === '/') {
          next(); // 跳出循环
        }
        // 会再次执行全局路由守卫，进行再次判断并继续循环
        else {
          next(fullPath);
        }
      }
      // 未登录
      else {
        // 在免登录名单，直接进入
        if (allowList.includes(name as string)) {
          next();
        }
        // 重新登陆
        else {
          next({
            path: rootRoutePath,
            query: { redirect: fullPath },
            replace: true,
          });
        }
      }
    },
  );

  router.afterEach((to, from, failure) => {
    document.title = 'Vite Scaffold 管理后台 - ';
    document.title += (to?.meta?.title as string) || document.title;

    if (isNavigationFailure(failure)) {
      console.log('failed navigation', failure);
    }
  });

  router.onError((error) => {
    console.log(error, '路由错误');
  });
}
