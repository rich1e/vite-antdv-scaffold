import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/tenant/query',
    method: 'post',
    timeout: 1000,
    status: 200,
    response: (req) => {
      const tableList = ((id) => {
        let counts = id;
        const arr: any[] = [];

        while (counts > 0) {
          counts -= 1;
          const tmp = {
            tenantId: `tenantId_${counts}`,
            tenantCompanyName: '上海掌门',
            tenantState: '试用期',
            tenantRegion: '上海市',
            tenantCategory: 'T区',
            tenantPerson: 'Tom',
            tenantRole: '试用',
            contractDate: '2016-05-03',
            creator: '管理员',
            action: '编辑',
          };
          arr.push(tmp);
        }

        return arr;
      })(10);

      return {
        code: 200,
        data: {
          list: tableList,
        },
        req,
      };
    },
  },
  {
    url: '/api/test',
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
