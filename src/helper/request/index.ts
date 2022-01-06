import axios, {
  AxiosDefaults,
  AxiosError,
  AxiosInterceptorManager,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { netWorkExceptionHandler } from './exceptionHandler';
import { responseTransformHandler } from './responseTransformHandler';
import { getStatusCodeInfo } from './statusCode';

/**
 * useAsync Hook
 * @see https://juejin.cn/post/7048214402121596959
 */

interface HttpClient {
  (config: AxiosRequestConfig): AxiosPromise;

  (url: string, config?: AxiosRequestConfig): AxiosPromise;

  defaults: AxiosDefaults;

  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };

  getUri(config?: AxiosRequestConfig): string;

  request<T = any, R = IAxiosResponse<T>>(
    config: AxiosRequestConfig,
  ): Promise<R>;

  get<T = any, R = IAxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  delete<T = any, R = IAxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  head<T = any, R = IAxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  options<T = any, R = IAxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  post<T = any, R = IAxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  put<T = any, R = IAxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  patch<T = any, R = IAxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;
}

// 扩展属性
export interface IAxiosResponse<T = any> extends AxiosResponse<T> {
  /** 业务code */
  code: number;
  /** 业务消息 */
  message: string;
}

/**
 * 异常拦截处理器
 * @param error
 * @returns
 */
const errorHandler = (error: AxiosError): Promise<any> => {
  const [{ status, message }] = getStatusCodeInfo(0);

  return error
    ? Promise.reject(netWorkExceptionHandler(error))
    : Promise.reject({ status, message });
};

const httpClient: HttpClient = axios.create({
  timeout: 5000,
  withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_URL,
});

httpClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // if (store.getters.token) {
    //   config.headers['Authorization'] = store.getters.token;
    // }
    return config;
  },
  (error: any) => Promise.reject(error),
);

httpClient.interceptors.response.use((response: AxiosResponse) => {
  if (response?.status === 200) {
    return responseTransformHandler(response.data);
  }
}, errorHandler);

export default httpClient;
