import { UnexpectedError } from './types';

/**
 * await 包装函数
 * @param promise
 * @returns promise
 * @description 始终返回2个参数，第一个参数表示错误，第二个参数表示结果；
 * @see https://www.cnblogs.com/Wayou/p/elegant_async_await.html
 * @see https://cnodejs.org/topic/5a6857b89288dc8153288136
 * @see https://github.com/scopsy/await-to-js/blob/master/src/await-to-js.ts
 * @see https://blog.logrocket.com/async-await-in-typescript/
 * @see https://dev.to/dewaldels/javascript-async-await-wrapper-22ao
 * @see https://github.com/JFDI-Consulting/attempt/blob/master/index.js
 * @see https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
 */
export const awaitWrapper = <T, K = UnexpectedError>(
  promise: Promise<T>,
): Promise<[K, undefined] | [undefined, T]> => {
  return promise
    .then<[undefined, T]>((response: T) => [undefined, response])
    .catch<[K, undefined]>((error: K) => [error, undefined]);
};
