/*
 * @Author: rich1e
 * @Date: 2022-04-11 18:37:01
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-11 18:39:15
 */
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
  code: string | number;
  /** 业务消息 */
  message: string;
}

/**
 * @description 自定义Response响应参数
 */
export interface ResponseTransform<T = any> {
  status: number | boolean;
  message?: string;
  data: T;
}

/**
 * @description 自定义错误异常参数
 */
export interface UnexpectedError {
  status: string | number;
  message: string;
}

/**
 * @description 子定义数据请求方法
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
