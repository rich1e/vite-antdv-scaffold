/*
 * @Author: rich1e
 * @Date: 2022-04-11 18:37:01
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-12 20:38:49
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  RequestExceptionHandler,
  ResponseExceptionHandler,
} from './exceptionHandler';
import {
  requestTransformHandler,
  responseTransformHandler,
} from './responseTransformHandler';
import type { HttpClient } from './types';

/**
 * useAsync Hook
 * @see https://juejin.cn/post/7048214402121596959
 */

const httpClient: HttpClient = axios.create({
  timeout: 5000,
  withCredentials: true,
  // baseURL: import.meta.env.VITE_BASE_URL
});

httpClient.interceptors.request.use((config: AxiosRequestConfig) => {
  // if (sessionStorage.getItem('SCHEDULE__USER') && config.headers) {
  //   config.headers['accesstoken'] = JSON.parse(
  //     sessionStorage.getItem('SCHEDULE__USER') as string,
  //   ).saasToken;

  //   config.headers['isH5'] = 'true';
  // }
  return requestTransformHandler(config);
}, RequestExceptionHandler);

httpClient.interceptors.response.use((response: AxiosResponse) => {
  if (response?.status === 200) {
    return responseTransformHandler(response.data);
  }
}, ResponseExceptionHandler);

export default httpClient;
