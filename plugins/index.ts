import { Plugin } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VITE_APP_VISUALIZER, VITE_APP_ESLINT } from '../config/index';
import configVisualizerConfig from './visualizer';
import configEslint from './eslint';

export default function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[])[] = [reactRefresh()];
  VITE_APP_VISUALIZER && vitePlugins.push(configVisualizerConfig());
  VITE_APP_ESLINT && vitePlugins.push(...configEslint());
  return vitePlugins;
}
