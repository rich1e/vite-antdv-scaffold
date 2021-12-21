/*
 * @Author: your name
 * @Date: 2021-06-11 01:02:42
 * @LastEditTime: 2021-08-09 17:40:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /openpl/mock/user.ts
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
    url: '/api/menu',
    method: 'post',
    timeout: 1000,
    response: {
      code: 200,
      message: 'OK',
      data: {
        menu: {
          namespaceList: [
            {
              namespace: 'ns1',
              note: '命名空间1',
              productList: [
                {
                  product: 'product1',
                  note: '产品1',
                  apiList: [
                    {
                      api: 'api1',
                      note: '接口1',
                    },
                  ],
                },
              ],
              docList: [
                {
                  title: 'title1',
                  tag: 'tag1',
                },
              ],
              hasPublicCodeDoc: 'Y',
            },
            {
              namespace: 'ns2',
              note: '命名空间2',
              productList: [
                {
                  product: 'product11',
                  note: '产品11',
                  apiList: [
                    {
                      api: 'api1',
                      note: '接口1',
                    },
                  ],
                },
                {
                  product: 'product22',
                  note: '产品22',
                  apiList: [
                    {
                      api: 'api1',
                      note: '接口1',
                    },
                  ],
                },
              ],
              docList: [
                {
                  title: 'title1',
                  tag: 'tag1',
                },
              ],
              hasPublicCodeDoc: 'Y',
            },
            {
              namespace: 'ns3',
              note: '命名空间3',
              productList: [
                {
                  product: 'product111',
                  note: '产品111',
                  apiList: [
                    {
                      api: 'api1',
                      note: '接口1',
                    },
                  ],
                },
                {
                  product: 'product222',
                  note: '产品2',
                  apiList: [
                    {
                      api: 'api1',
                      note: '接口1',
                    },
                  ],
                },
              ],
              docList: [
                {
                  title: 'title1',
                  tag: 'tag1',
                },
              ],
              hasPublicCodeDoc: 'Y',
            },
          ],
        },
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
        permission: {
          namespaceList: ['ns1', 'ns2', 'ns3', 'ns4', 'ns5'],
          productId: 100,
        },
        isGod: 'Y',
      },
    },
  },
  {
    url: '/api/login1',
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
