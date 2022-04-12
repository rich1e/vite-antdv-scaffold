/*
 * @Author: rich1e
 * @Date: 2022-04-11 16:55:39
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-11 17:42:09
 */
import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/login',
    method: 'post',
    timeout: 1000,
    status: 200,
    response: {
      code: 200,
      message: 'OK',
      data: {
        token: 'mockeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
        timestamp: '20211228',
        userId: 'user@id.com',
      },
    },
  },
  {
    url: '/api/permission',
    method: 'post',
    timeout: 1000,
    response: {
      code: 200,
      message: 'OK',
      data: {
        role: 0,
        menu: [],
        level: ['lv1', 'lv2', 'lv3'],
      },
    },
  },
  {
    url: '/api/user',
    method: 'post',
    timeout: 1000,
    status: 200,
    response: {
      code: 200,
      message: 'OK',
      data: {
        userName: 'rich1e',
        telphone: '13899999999',
        email: 'user@id.com',
      },
    },
  },
  {
    url: '/api/logout',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = '';
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 500;
      res.end(`hello, ${reqbody}`);
    },
  },
] as MockMethod[];
