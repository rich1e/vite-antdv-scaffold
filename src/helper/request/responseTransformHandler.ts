/*
 * @Author: rich1e
 * @Date: 2022-04-11 18:37:01
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-12 20:44:22
 */
/**
 * @description response 转换函数
 */

import { AxiosRequestConfig } from 'axios';
import type { AxiosResponseExtends, ResponseTransform } from './types';

/**
 * @function response业务逻辑处理
 * @param response
 * @returns Promise
 * @description 翻译response的业务错误码，并将处理结果以一个Promise对象返回
 */
export const responseTransformHandler = (
  response: AxiosResponseExtends,
): Promise<ResponseTransform> => {
  const { data, code, message } = response;
  const defaultResult = {
    data,
    message,
    status: false,
  };

  const successCode = [0, 200, 2000];

  return new Promise((resolve, reject) => {
    return successCode.includes(code as number)
      ? resolve(Object.assign({}, defaultResult, { status: true }))
      : reject(Object.assign({}, defaultResult, { status: false }));
  });
};

export const requestTransformHandler = (config: AxiosRequestConfig) => {
  // const { baseURL, url } = config;

  // if (["/biz", "/api"].includes(baseURL)) {
  //   return config;
  // }
  // // TODO currentUserId 异常判断
  // const currentUserId = useAuthStoreHook().getUserId;
  // const surl = `${url}?currentUserId=${currentUserId}`;
  // config.url = surl;

  return config;
};
