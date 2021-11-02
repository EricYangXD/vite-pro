import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import roleMock from '../mock/role';
import userMock from '../mock/user';
import testMock from '../mock/index';

export const mockModules = [...roleMock, ...userMock, ...testMock];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
