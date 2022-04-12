/*
 * @Author: rich1e
 * @Date: 2022-04-12 17:33:16
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-12 17:55:24
 */
import type {
  RouteLocationNormalized,
  RouteRecordRaw,
  RouteMeta,
} from 'vue-router';

/**
 * @description App自定义页面路由信息
 */
interface AppPageMeta extends RouteMeta {
  /** 页面标题 */
  title?: string;
  /** 页面是否缓存 */
  keepAlive?: boolean;
}

export type AppRouteRecord = RouteRecordRaw & {
  /** 页面路由信息 */
  meta: AppPageMeta;
};

export interface AppRouteLocationNormalized extends RouteLocationNormalized {
  /** 页面路由信息 */
  meta: AppPageMeta;
}
