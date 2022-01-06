/**
 * @deprecated 错误异常处理函数
 */
import type { AxiosError, AxiosResponse } from 'axios';
import { getStatusCodeInfo } from './statusCode';

export interface INetworkException {
  status: string | number;
  message: string;
}

/**
 * @function 网络异常处理
 * @param error
 * @description 统一处理网络异常和接口错误(401,403)，返回网络异常code或业务错误码
 */
export const netWorkExceptionHandler = function (
  error: AxiosError,
): INetworkException {
  const { config, response } = error;
  const { url: APIUrl } = config;

  // 网络超时
  if (
    error.code === 'ECONNABORTED' &&
    error.message.indexOf('timeout') !== -1
  ) {
    const [{ status, message }] = getStatusCodeInfo(90000);
    return { status, message };
  }

  // netCode-http状态码，APIUrl-接口路径，serveCode-接口状态码
  const {
    data: { status: serveCode },
    status: netCode,
  } = response as AxiosResponse;
  const [{ status, message }] = getStatusCodeInfo(serveCode || netCode);

  console.error(
    `openpl# => 请求 ${APIUrl} 接口返回 ${netCode}， 错误信息 ${message}`,
  );

  return {
    status,
    message,
  };
};
