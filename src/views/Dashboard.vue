<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue';
  import { loginInfo, userInfo, menuInfo, MenuResponseType } from '@/api/user';
  import { awaitWrapper } from '@/utils/awaitWrapper';
  import { IResponseTransform } from '@/helper/request/responseTransformHandler';

  loginInfo({
    username: 'user',
    password: '1234',
  })
    .then((response) => {
      const { data, status } = response;

      if (status) {
        const { token, timestamp, userId } = data;
        console.log('===========================================loginInfo');
        console.log(data);
        console.log('token', token);
        console.log('timestamp', timestamp);
        console.log('userId', userId);
      }
    })
    .catch((error) => {
      console.log('loginInfo', error);
    });

  userInfo({
    userId: '1234',
  })
    .then((response) => {
      const { data, status } = response;

      if (status) {
        const { permission, isGod } = data;
        console.log('===========================================userInfo');
        console.log(data);
        console.log('permission', permission);
        console.log('isGod', isGod);
      }
    })
    .catch((error) => {
      console.log('userInfo', error);
    });

  (async () => {
    const [error, response] = await awaitWrapper(menuInfo({ productId: 100 }));
    if (error) {
      return console.log(error);
    }
    const { data, status } = response as IResponseTransform;
    const { menu } = data as MenuResponseType;

    if (status) {
      console.log('===========================================menuInfo');
      console.log(data);
      console.log('menu', menu);
    }
  })();
</script>
<template>
  <ElContainer style="height: 100vh">
    <ElAside> Sider </ElAside>
    <ElContainer>
      <ElHeader> Header </ElHeader>
      <ElMain>
        <HelloWorld msg="Hello World!" />
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>
<style scoped>
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
