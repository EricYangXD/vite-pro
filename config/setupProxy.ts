import { ProxyOptions } from 'vite';

/* 做自定义代理 */
const proxy: Record<string, string | ProxyOptions> = {
  // 字符串简写写法
  '/foo': 'http://localhost:4567',
  // 选项写法
  '/api': {
    target: 'http://jsonplaceholder.typicode.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ''),
  },
  // 正则表达式写法
  '^/fallback/.*': {
    target: 'http://jsonplaceholder.typicode.com',
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/fallback/, ''),
  },
  // 使用 proxy 实例
  '/apii': {
    target: 'http://jsonplaceholder.typicode.com',
    changeOrigin: true,
    // eslint-disable-next-line no-unused-vars
    configure: (proxy, options) => {
      // proxy 是 'http-proxy' 的实例
    },
  },
};
export default proxy;
