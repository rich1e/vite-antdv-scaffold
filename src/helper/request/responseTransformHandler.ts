/**
 * @description response 转换函数
 */

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

  const successCode = [200, 2000];

  return new Promise((resolve, reject) => {
    return successCode.includes(code)
      ? resolve(Object.assign({}, defaultResult, { status: true }))
      : reject(Object.assign({}, defaultResult, { status: false }));
  });
};
