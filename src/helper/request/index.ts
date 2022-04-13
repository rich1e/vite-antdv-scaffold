import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  RequestExceptionHandler,
  ResponseExceptionHandler,
} from './exceptionHandler';
import { responseTransformHandler } from './responseTransformHandler';
import type { HttpClient } from './types';

/**
 * useAsync Hook
 * @see https://juejin.cn/post/7048214402121596959
 */

const httpClient: HttpClient = axios.create({
  timeout: 5000,
  withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_URL,
});

httpClient.interceptors.request.use((config: AxiosRequestConfig) => {
  // if (store.getters.token) {
  //   config.headers['Authorization'] = store.getters.token;
  // }
  return config;
}, RequestExceptionHandler);

httpClient.interceptors.response.use((response: AxiosResponse) => {
  if (response?.status === 200) {
    return responseTransformHandler(response.data);
  }
}, ResponseExceptionHandler);

export default httpClient;
