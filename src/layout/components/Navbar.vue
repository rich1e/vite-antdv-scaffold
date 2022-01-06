<script setup lang="ts">
  import { CaretBottom } from '@element-plus/icons-vue';
  import Breadcrumb from './Breadcrumb';
  import Hamburger from './Hamburger';
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();

  const username = computed(() => {
    return store.state.user.username;
  });

  const settings = computed(() => {
    return store.state.app.settings;
  });

  const opened = computed(() => {
    return store.state.app.sidebar.opened;
  });

  const toggleSideBar = () => {
    store.commit('app/M_toggleSideBar');
  };

  /**
   * 退出登录
   */
  const loginOut = () => {
    store.dispatch('user/logout').then(() => {
      // ElMessage({ message: '退出登录成功', type: 'success' })
      // proxy.$router.push(`/login?redirect=${proxy.$route.fullPath}`)
      //此处reload清空路由和重置部分状态
      location.reload();
    });
  };
</script>

<template>
  <div class="navbar rowBC">
    <div class="rowSC">
      <hamburger
        v-if="settings.showHamburger"
        :is-active="opened"
        class="hamburger-container"
        @toggle-click="toggleSideBar"
      />
      <breadcrumb class="breadcrumb-container" />
    </div>
    <!--nav title-->
    <div v-if="settings.showNavbarTitle" class="heardCenterTitle">
      {{ settings.title }}
    </div>
    <div v-if="settings.ShowDropDown" class="right-menu">
      <el-dropdown trigger="click" size="medium">
        <div class="avatar-wrapper rowSC">
          <img src="@/assets/head.jpg" class="user-avatar" />
          {{ username }}
          <CaretBottom style="width: 1em; height: 1em; margin-left: 4px" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item>Home</el-dropdown-item>
            </router-link>
            <a
              target="_blank"
              href="https://gitlab.zmaxis.com/outclass/saas-ops-web/sass-administrator-management"
            >
              <el-dropdown-item>Project</el-dropdown-item>
            </a>
            <!--<el-dropdown-item>修改密码</el-dropdown-item>-->
            <el-dropdown-item divided @click="loginOut">
              login out
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .navbar {
    height: $navBarHeight;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }

  //logo
  .avatar-wrapper {
    margin-top: 5px;
    position: relative;
    cursor: pointer;

    .user-avatar {
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      margin-right: 10px;
    }

    .el-icon-caret-bottom {
      cursor: pointer;
      position: absolute;
      right: -20px;
      top: 25px;
      font-size: 12px;
    }
  }

  //center-title
  .heardCenterTitle {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 46%;
    font-weight: 600;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }

  //drop-down
  .right-menu {
    cursor: pointer;
    margin-right: 40px;
  }
</style>
