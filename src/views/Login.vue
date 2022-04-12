<!--
 * @Author: rich1e
 * @Date: 2022-04-11 18:08:24
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-12 21:45:31
-->
<script lang="ts">
  export default {
    name: 'LogIn',
  };
</script>
<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import type { FormInstance } from 'element-plus';

  import { login } from '/@/api/user';
  import { awaitWrapper } from '/@/helper/request/awaitWrapper';
  import { LoginRequest } from '/@/api/models/userModel';
  import { errorMessage } from '/@/helper/message';

  const router = useRouter();

  const ruleFormRef = ref<FormInstance>();

  const loginServe = async (params: LoginRequest) => {
    const [error, response] = await awaitWrapper(login(params));

    if (error) {
      errorMessage(error.message);
      return;
    }

    if (response.status) {
      const { data } = response;
      const { token } = data;

      localStorage.setItem('ACCESS_TOKEN', token);
      router.push('/');
    }
  };

  const checkUsername = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('请输入用户名'));
    } else {
      callback();
    }
  };

  const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请输入密码'));
    } else {
      callback();
    }
  };

  const ruleForm = reactive({
    user: 'admin',
    pass: '12345',
  });

  const rules = reactive({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    user: [{ validator: checkUsername, trigger: 'blur' }],
  });

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        const { pass, user } = ruleForm;
        loginServe({ password: pass, username: user });
      } else {
        return false;
      }
    });
  };
</script>
<template>
  <div class="vs-login">
    <div class="vs-login__box">
      <h1> Vite Scaffold 管理后台 </h1>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
      >
        <el-form-item label="Username" prop="user">
          <el-input v-model="ruleForm.user" />
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            Login
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .vs-login {
    width: 100%;
    text-align: center;
    height: 100%;
    color: #fff;
    background-color: #114fa9;
    position: relative;

    // https://element-plus.org/en-US/guide/theming.html#by-css-variable
    --el-text-color-regular: #fff;
    // --el-input-text-color: #333 !important;

    :deep(.el-input__inner) {
      color: #333;
    }

    &__box {
      height: 240px;
      width: 30%;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
  }
</style>
