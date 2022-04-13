import {
  AxiosDefaults,
  AxiosInterceptorManager,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

/**
 * @description AxiosResponse扩展属性
 */
export interface AxiosResponseExtends<T = any> extends AxiosResponse<T> {
  /** 业务code */
  code: number;
  /** 业务消息 */
  message: string;
}

export interface ResponseTransform<T = any> {
  status: number | boolean;
  message?: string;
  data: T;
}

export interface UnexpectedError {
  status: string | number;
  message: string;
}

/**
 * @description 数据请求方法
 */
export interface HttpClient {
  (config: AxiosRequestConfig): AxiosPromise;

  (url: string, config?: AxiosRequestConfig): AxiosPromise;

  defaults: AxiosDefaults;

  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };

  getUri(config?: AxiosRequestConfig): string;

  request<T = any, R = AxiosResponseExtends<T>>(
    config: AxiosRequestConfig,
  ): Promise<R>;

  get<T = any, R = AxiosResponseExtends<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  delete<T = any, R = AxiosResponseExtends<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  head<T = any, R = AxiosResponseExtends<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  options<T = any, R = AxiosResponseExtends<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  post<T = any, R = AxiosResponseExtends<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  put<T = any, R = AxiosResponseExtends<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;

  patch<T = any, R = AxiosResponseExtends<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<R>;
}
