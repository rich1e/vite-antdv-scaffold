/*
 * @Author: rich1e
 * @Date: 2022-04-11 16:55:39
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-12 21:10:10
 */
/**
 * Antdv2.x Icons 图标批量注册，动态引用
 * @see https://juejin.cn/post/6979534282649763847#heading-5
 */
/**
 * TypeScript × @ant-design/icons 动态加载与类型提示
 * @see https://juejin.cn/post/6922086052027072520
 */
import { createApp } from 'vue';
import App from './App.vue';
import { router, setupRouter } from '/@/routers/index';

// 初始化样式
import 'normalize.css';

const app = createApp(App);

// 挂载路由
setupRouter(app);

// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'));
