/*
 * @Author: your name
 * @Date: 2021-06-24 15:39:23
 * @LastEditTime: 2021-06-26 11:20:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /openpl/src/utils/helper.ts
 */
/**
 * @see https://github.com/vitejs/vite/issues/512
 * @returns
 */
// function getEnv() {
//   const envFilePath = path.resolve(__dirname, "./.env");
//   try {
//     let res = {};
//     const data = fs.readFileSync(envFilePath, "utf8");

//     data.split("\n").forEach((kv) => {
//       const [key, value] = kv.replace(/\s*/g, "").split("=");
//       if (key && value) {
//         res[key] = value;
//       }
//     });

//     return res;
//   } catch (err) {
//     console.error(err);
//   }
// }
// const envs = getEnv();
// console.log( envs.VITE_YOUR_KEY );
/**
 * @name await 包装函数
 * @description 始终返回2个参数，第一个参数表示错误，第二个参数表示结果；
 * @param promise
 * @returns promise
 * @see https://www.cnblogs.com/Wayou/p/elegant_async_await.html
 * @see https://cnodejs.org/topic/5a6857b89288dc8153288136
 * @see https://github.com/scopsy/await-to-js/blob/master/src/await-to-js.ts
 * @see https://blog.logrocket.com/async-await-in-typescript/
 * @see https://dev.to/dewaldels/javascript-async-await-wrapper-22ao
 */
// export const awaitWrapper = <T, U = Error>(
//   promise: Promise<T>,
//   errorExt?: object,
// ): Promise<[U, undefined] | [null, T]> => {
//   return promise
//     .then<[null, T]>((response: T) => [null, response])
//     .catch<[U, undefined]>((err: U) => {
//       if (errorExt) {
//         const parsedError = Object.assign({}, err, errorExt);
//         return [parsedError, undefined];
//       }

//       return [err, undefined];
//     });
// };
// export const awaitWrapper = <T, K = Error>(
//   promise: Promise<T>,
// ): Promise<any> => {
//   return promise
//     .then<[undefined, T]>((response: T) => [undefined, response])
//     .catch<[K, undefined]>((error: K) => [error, undefined]);
// };
export const awaitWrapper = <T, K = Error>(
  promise: Promise<T>,
): Promise<[K, undefined] | [undefined, T]> => {
  return promise
    .then<[undefined, T]>((response: T) => [undefined, response])
    .catch<[K, undefined]>((error: K) => [error, undefined]);
};
