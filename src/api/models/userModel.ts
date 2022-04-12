/*
 * @Author: rich1e
 * @Date: 2022-04-11 17:10:15
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-12 20:55:56
 */

/**
 * @description 登录接口请求参数
 */
export interface LoginRequest {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
}

export interface LoginResponse {
  /** 用户服务标识 */
  token: string;
  /** 时间戳 */
  timestamp: string;
  /** 用户ID */
  userId: string;
}

/**
 * @description 获取用户信息请求参数
 */
export interface GetUserRequest {
  /** 用户服务标识 */
  token: string;
}

/**
 * @description 获取用户信息响应参数
 */
export interface GetUserResponse {
  /** 用户名称 */
  userName: string;
  /** 手机号 */
  telphone: string;
  /** 邮箱 */
  email: string;
}

/**
 * @description 权限菜单请求参数
 */
export interface GetPermissionRequest {
  /** 用户token */
  token: string;
}

/**
 * @description 权限菜单响应参数
 */
export interface GetPermissionResponse {
  /** 菜单 */
  menu: [];
  /** 权限 */
  role: number;
  /** 级别 */
  level: [];
}
