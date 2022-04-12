/*
 * @Author: rich1e
 * @Date: 2022-04-12 20:14:36
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-12 20:23:09
 */

import { ElMessage } from 'element-plus';

export const infoMessage = (message: string) => {
  ElMessage({
    message,
    type: 'info',
  });
};

export const successMessage = (message: string) => {
  ElMessage({
    message,
    type: 'success',
  });
};

export const warningMessage = (message: string) => {
  ElMessage({
    message,
    type: 'warning',
  });
};

export const errorMessage = (message: string) => {
  ElMessage({
    message,
    type: 'error',
  });
};
