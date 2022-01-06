/**
 * @description 状态码
 * @see https://www.angularjswiki.com/angular/how-to-convert-a-string-to-enum-in-typescript-or-angular/
 * @see https://zhuanlan.zhihu.com/p/373653890
 * @see https://juejin.cn/post/7023238396931735583
 */
// export const getCodeMessage = (code: number): any => {
//   if (typeof code !== 'string') return '';
//   const codeType = '_' + code;
//   for (const key in StatusCode) {
//    if (key === codeType) {
//       return (<any>StatusCode)[codeType];
//     }
//   }
// };

// export const EventModelList: {
//   key: string;
//   value: string;
// }[] = Object.entries(StatusCode).map(([key, value]) => ({ key, value }));

// type StatusCode = Record<CodeType, string>;

enum StatusCode {
  '_10001' = 'Token过期，请重新登录',
  '_10002' = '密码或用户名错误，请重新输入',
  '_10003' = '认证异常，请稍后再试',
  '_90000' = '网络超时',
  '_90001' = '请求太频繁，请稍后再试',
  '_90003' = '调试接口异常',
}

/**
 * @description 获取StatusCodeInfo详细信息
 * @see https://dev.to/joaozitopolo/typescript-enum-to-array-42jg
 * @param code 服务端Code
 * @returns 返回StatusCodeInfo对象
 */
export const getStatusCodeInfo = (
  code: number,
): {
  status: string;
  message: string;
}[] => {
  return Object.entries(StatusCode).map(([status, message]) => {
    return '_' + code === status
      ? { status, message }
      : { status: '00000', message: '未定义的错误码' };
  });
};

/**
 * @description 获取StatusCodeMessage详细信息
 * @param code 服务端Code
 * @returns 返回StatusCodeMessage信息
 */
export const getStatusCodeMessage = (code: number): string => {
  const enumVal = (
    code: number,
  ): {
    message: string;
  }[] => {
    return Object.entries(StatusCode).map(([key, message]) => {
      return '_' + code === key ? { message } : { message: '未定义的错误码' };
    });
  };

  const [{ message }] = enumVal(code);

  return message;
};
