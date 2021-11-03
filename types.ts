export interface CSSModulesOptions {
  scopeBehaviour?: 'global' | 'local';
  globalModulePaths?: RegExp[];
  generateScopedName?: string | ((name: string, filename: string, css: string) => string);
  hashPrefix?: string;
  /**
   * 默认：'camelCaseOnly'
   */
  localsConvention?: 'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly';
}
