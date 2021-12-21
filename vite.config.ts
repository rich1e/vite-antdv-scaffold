/**
 * vite config 配置
 * @see https://juejin.cn/post/6988704825450397709#heading-14
 * @see https://www.kuxiaoxin.com/categories/handtearvben
 */
/**
 * 引入vant rem适配方案
 * @see https://juejin.cn/post/7012946831877341191#heading-37
 */
/**
 * Electron monorepos 方案
 * @see https://github.com/tjx666/electron-vue-vite-boilerplate
 */
/**
 * WebSocket 的嵌入
 * @see https://juejin.cn/post/6916304048505225223#heading-15
 */
/**
 * stylelint
 * @see https://cdmana.com/2021/09/20210911221512902L.html
 */
/**
 * 使用 vite + typescript + react + antd 一个月的开发体验和遇到的问题
 * @see https://www.cnblogs.com/givingwu/p/15223160.html
 */
/**
 * Pont 把 swagger、rap、dip 等多种接口文档平台，转换成 Pont 元数据。Pont 利用接口元数据，
 * 可以高度定制化生成前端接口层代码，接口 mock 平台和接口测试平台。其中 swagger 数据源，
 * Pont 已经完美支持。并在一些大型项目中使用了近两年，各种高度定制化需求都可以满足。
 * @see https://github.com/alibaba/pont
 */
import { UserConfigExport, ConfigEnv } from 'vite';
import path from 'path';

// config
import { createVitePlugins } from './build/plugins';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return {
    base: '/',
    server: {
      host: 'localhost',
      port: 3388,
      open: true,
      proxy: {
        '/api': {
          target: 'http://10.217.116.221/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: createVitePlugins({ command, mode }),
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  };
};
