<!--
 * @Author: rich1e
 * @Date: 2022-04-11 18:08:50
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-12 17:15:33
-->
<script lang="ts">
  export default {
    name: 'WorkBench',
  };
</script>
<script lang="ts" setup>
  import { SideBar } from './components/SideBar';
  import { TagView } from './components/TagView';
  import { HamBurger } from './components/Hamburger';
  import { Breadcrumb } from './components/Breadcrumb';
  import { SearchBar } from './components/Search';
  import { Notice } from './components/Notice';
  import { Settings } from './components/Settings';

  import avatars from '/@/assets/avatars.jpg';
</script>
<template>
  <el-container class="vs-layout">
    <!-- 侧边栏 -->
    <el-aside class="vs-layout__side">
      <SideBar />
    </el-aside>
    <!-- 内容主体 -->
    <el-container class="vs-layout__container">
      <!-- 头部 -->
      <el-header class="vs-layout__header">
        <!-- 导航栏 -->
        <div class="vs-layout__nav">
          <HamBurger style="margin-right: 20px" />
          <Breadcrumb />
        </div>

        <div class="vs-layout__center">
          <!-- 菜单搜索 -->
          <SearchBar />
          <!-- 通知 -->
          <Notice />
          <!-- 用户信息 -->
          <div class="user">
            <img class="user__avatars" :src="avatars" />
            <span class="user__name"> admin </span>
          </div>
          <!-- 系统设置 -->
          <Settings />
        </div>
      </el-header>
      <!-- 标签页 -->
      <TagView />
      <!-- 页面挂载 -->
      <el-main class="vs-layout__main">
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
  .vs-layout {
    width: 100%;
    height: 100%;

    &__side {
      width: 200px;
      height: 100%;
    }

    &__container {
      width: 100%;
      height: 100%;
    }

    &__header {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__nav {
      display: flex;
      align-items: center;
    }

    &__center {
      display: flex;
      float: right;
      min-width: 280px;
      height: 48px;
      align-items: center;
      color: #000000d9;
      justify-content: flex-end;

      > div {
        margin: 0 10px;
        &:last-child {
          margin: 0;
        }
      }

      ::v-deep(.el-icon) {
        position: relative;
        display: block;
      }
    }

    &__main {
      position: relative;
    }
  }

  .user {
    display: flex;

    &__avatars {
      display: block;
      height: 20px;
      width: 20px;
      border-radius: 10px;
      overflow: hidden;
      margin-right: 10px;
    }

    &__name {
      display: block;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
    }
  }
</style>
