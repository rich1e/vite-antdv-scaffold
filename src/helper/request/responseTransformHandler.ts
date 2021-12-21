import { IAxiosResponse } from './index';

export interface IResponseTransform<T = any> {
  status: number | boolean;
  message?: string;
  data: T;
}

/**
 * @function response业务逻辑处理
 * @param response
 * @returns Promise
 * @description 翻译response的业务错误码，并将处理结果以一个Promise对象返回
 */
export const responseTransformHandler = (
  response: IAxiosResponse,
): Promise<IResponseTransform> => {
  const { data, code, message } = response;
  const defaultResult = {
    data,
    message,
    status: false,
  };

  return new Promise((resolve, reject) => {
    return code === 200
      ? resolve(Object.assign({}, defaultResult, { status: true }))
      : reject(Object.assign({}, defaultResult, { status: false }));
  });
};
