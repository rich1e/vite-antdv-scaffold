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
import { router, setupRouter } from '@/routers/index';
import store from './store';

import '@/styles/index.scss'; // global css
import './permission';

/**
 * @description svg-icon
 * @see https://github.com/anncwb/vite-plugin-svg-icons/blob/main/README.zh_CN.md
 */
import 'virtual:svg-icons-register';
import svgIcon from '@/icons/SvgIcon.vue';

const app = createApp(App);

app.component('SvgIcon', svgIcon);
app.use(store);

// Set Router
setupRouter(app);

router.isReady().then(() => {
  app.mount('#app');
});
