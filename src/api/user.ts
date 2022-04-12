/*
 * @Author: rich1e
 * @Date: 2022-04-11 16:55:39
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-12 20:30:55
 */
import httpClient from '/@/helper/request';
import {
  GetPermissionRequest,
  GetPermissionResponse,
  GetUserRequest,
  GetUserResponse,
  LoginRequest,
  LoginResponse,
} from './models/userModel';
import type { ResponseTransform } from '../helper/request/types';

/**
 * @description User API
 */
enum Api {
  /** 登录接口路径 */
  Login = '/login',
  /** 用户信息接口路径 */
  User = '/user',
  /** 权限菜单接口路径 */
  Permission = '/permission',
  /** 退出接口路径 */
  logout = 'logout',
}
/**
 * @description 登录信息
 * @param data 登录请求参数
 */
export const login = (
  data: LoginRequest,
): Promise<ResponseTransform<LoginResponse>> => {
  return httpClient.post(Api.Login, data, {
    baseURL: import.meta.env.VITE_BASE_URL,
  });
};

/**
 * @description 用户信息
 * @param data 用户请求参数
 */
export const getUser = (
  data: GetUserRequest,
): Promise<ResponseTransform<GetUserResponse>> => {
  return httpClient.post(Api.User, data);
};

/**
 * @description 权限菜单
 * @param data 权限菜单请求参数
 */
export const getPermission = (
  data: GetPermissionRequest,
): Promise<ResponseTransform<GetPermissionResponse>> => {
  return httpClient.post(Api.Permission, data);
};
