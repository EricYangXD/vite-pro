import { defineConfig, UserConfigExport, ConfigEnv } from 'vite';
import * as path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import vitePluginIndexHtml from './plugins/vite-plugin-index-html/index';
import hosts from './env/hosts-dev.json';
// import cssOption from './config/style';
// import createVitePlugins from './plugins';
import build from './config/build';
import { VITE_APP_BASE, VITE_APP_PORT, VITE_APP_OPEN } from './config';
import proxy from './config/setupProxy';
import { viteMockServe } from 'vite-plugin-mock';

// export default defineConfig((configEnv) => {
//   return {
//     plugins: createVitePlugins(),
//     css: cssOption,
//   };
// });

// const localEnabled = process.env.USE_MOCK || false;
// const prodEnabled = process.env.USE_CHUNK_MOCK || false;
// console.log('localEnabled, prodEnabled', localEnabled, prodEnabled);

// defineConfig
export default ({ command }: ConfigEnv): UserConfigExport => {
  const prodMock = false;
  // command: "serve" 等...
  return {
    base: VITE_APP_BASE,
    server: {
      host: true,
      port: VITE_APP_PORT,
      open: VITE_APP_OPEN,
      proxy,
    },
    plugins: [
      // createVitePlugins(),
      reactRefresh(),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: (name) => `antd/lib/${name}/style/index.css`,
          },
        ],
      }),
      vitePluginIndexHtml(hosts),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
        logger: true,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        initial: path.resolve(__dirname, './src/initial'),
        utils: path.resolve(__dirname, './src/utils'),
        components: path.resolve(__dirname, './src/components'),
        pages: path.resolve(__dirname, './src/pages'),
        config: path.resolve(__dirname, './src/config'),
        assets: path.resolve(__dirname, './src/assets'),
        '~antd': path.resolve(__dirname, './node_modules/antd'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
        scss: {
          additionalData: '@import "./src/assets/scss/varible.scss";',
        },
      },
    },
    build,
  };
};
