import httpClient from '@/helper/request';
import { IResponseTransform } from '@/helper/request/responseTransformHandler';
import { ObjTy } from '~/common';

/**
 * @enum
 * @property {string} Login 登录接口路径
 * @property {string} Logout 退出接口路径
 */
enum Api {
  Login = '/login',
  User = '/user',
  Menu = '/menu',
}

/**
 * @description 登录接口请求参数
 */
interface LoginRequestType {
  /** 用户名 */
  username: string;
  /** 密码 */
  password: string;
}

interface LoginResponseType {
  /** 服务标识 */
  token: string;
  /** 时间戳 */
  timestamp: string;
  /** 用户ID */
  userId: string;
}
/**
 * @description 登录信息
 * @param data 登录接口请求参数
 */
export const loginInfo = (
  data: LoginRequestType,
): Promise<IResponseTransform<LoginResponseType>> => {
  return httpClient.post(Api.Login, data);
};

/**
 * @description 用户接口请求参数
 */
interface UserRequestType {
  /** 用户ID */
  userId: string;
}

interface UserResponseType {
  permission: {
    namespaceList: Array<string>;
    productId: number;
  };
  isGod: string;
}

/**
 * @description 用户信息
 * @param data 用户接口请求参数
 */
export const userInfo = (
  data: UserRequestType,
): Promise<IResponseTransform<UserResponseType>> => {
  return httpClient.post(Api.User, data);
};

/**
 * @description 菜单接口请求参数
 */
interface MenuRequestType {
  /** 用户ID */
  productId: number;
}

export interface MenuResponseType {
  /** 菜单 */
  menu: {
    /** 空间列表 */
    namespaceList: any[];
  };
}

/**
 * @description 菜单信息
 * @param data 登录接口请求参数
 */
export const menuInfo = (
  data: MenuRequestType,
): Promise<IResponseTransform<MenuResponseType>> => {
  return httpClient.post(Api.Menu, data);
};

/*******************************************************************/

enum Api2 {
  loginReq = '/ty-user/user/loginValid',
  getInfoReq = '/ty-user/user/getUserInfo',
  logoutReq = '/ty-user/user/loginOut',
}

export const loginReq = (data: ObjTy) => {
  return httpClient.post(Api2.loginReq, data);
};

export const getInfoReq = () => {
  return httpClient.post(Api2.getInfoReq);
};

export const logoutReq = () => {
  return httpClient.post(Api2.logoutReq);
};
