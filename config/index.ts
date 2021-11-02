/**
 * @description 开发端口
 */
export const VITE_APP_PORT = 3000;
/**
 * @description 公共基础路径
 */
export const VITE_APP_BASE = '/';
/**
 * @description 是否自动在浏览器中打开应用程序
 */
export const VITE_APP_OPEN = true;
/**
 * @description 是否在打包环境下，开启打包的分析可视化图
 */
export const VITE_APP_VISUALIZER = false;
/**
 * @description 是否在打包环境下，去除console.log
 */
export const VITE_APP_CONSOLE = true;
/**
 * @description 打包环境下，删除debugger
 */
export const VITE_APP_DEBUGGER = true;
/**
 * @description 打包环境下是否生成source map 文件
 */
export const VITE_APP_SOURCEMAP = false;
/**
 * @description 是否在开发模式下，启动eslint
 */
export const VITE_APP_ESLINT = true;

/*

config所有文件中不能通过，import.meta.env来获取环境变量，会报错，
要想在config文件中用环境变量，只能通过vite-config-ts传入进来，
通过configEnv传入给config文件，那么config文件，就必须要写成函数的形式

*/
