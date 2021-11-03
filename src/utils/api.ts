import axios, { AxiosRequestConfig } from 'axios';
import { Modal } from 'antd';

/* *
 * 自定义状态码
 * */
export enum ResCode {
  Success = 0,
  RRPSuccess = 1,
  NoPrivilege = -403,
  GwErrorCode = -501,
  BackErrorCode = -1,
  DuplicateCode = -110,
  OverUserNum = '-151',
  SaasUserError = '-152',
  NotExitedAccount = -120,
  NotExitedRole = -3,
  AuthFail = -4,
}

axios.defaults.withCredentials = true;
// vite 获取process.env使用import.meta.env
// environmentVariable
// const BASE_URL = process.env.BASE_URL;
// axios.defaults.adapter = adapter;
// axios.defaults.baseURL = BASE_URL;

export const setCommonHeader = (name, value) => {
  axios.defaults.headers.common[name] = value;
};

// axios.interceptors.request.use(
//   (config) => {
//     Object.assign(config.headers, {
//       openId: 'wx_testopenid',
//     });
//     return config;
//   },
//   (error) => {
//     // 对请求失败做处理
//     return Promise.reject(error);
//   }
// );
axios.interceptors.response.use((response) => {
  const { data: resData, config } = response;
  return response;
});

// const defaultParser = (data) =>
//   new Promise((resolve, reject) => {
//     if (data.code === ResCode.NoPrivilege) {
//       window.location.href = `/`;
//       reject(data);
//     }
//     if (data.code === ResCode.AuthFail) {
//       window.location.href = `/`;
//       reject(data);
//     }
//     resolve(data);
//     reject(data);
//   });

export interface ApiError {
  code: number;
  message: string;
  /** 如果 error 是由网络问题（断网、502 等）导致的，则会出现该字段，告知状态码。特殊状态码 -1 代表断网 */
  networkErrorCode?: number;
}

export interface ApiPromise<T = any> extends Promise<T> {
  // 以下类型定义摘自 node_modules/typescript/lib/lib.es5.d.ts
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: ApiError) => TResult2 | PromiseLike<TResult2>) | undefined | null
  ): Promise<TResult1 | TResult2>;
  catch<TResult = never>(
    onrejected?: ((reason: ApiError) => TResult | PromiseLike<TResult>) | undefined | null
  ): Promise<T | TResult>;
}

export interface CallApi {
  <T = any>(endpoint: string, options?: AxiosRequestConfig): Promise<{ response: T }>;
}

export interface RawBackendResp<T = any> {
  code: number;
  data: T | null;
  message: string;
}

type RawRespParser<T> = (rawResp: RawBackendResp) => Promise<T> | T;

interface CommonCallApiOptions<T> extends AxiosRequestConfig {
  parser?: RawRespParser<T>;
}

// export const callApi: CallApi = (endpoint: string, options?: CommonCallApiOptions<any>) =>
//   axios(endpoint, options)
//     .then((response) => response.data)
//     .then(options && options.parser)
//     // .then((options && options.parser) || defaultParser)
//     .then(options && options.parser)
//     .catch((error) => {
//       Modal.error({
//         title: '网络错误',
//         content: '请检查网络后，刷新页面后重试！',
//       });
//     })
//     .then((response) => ({ response }));

export default axios;
