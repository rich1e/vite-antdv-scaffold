<script lang="ts">
  export default {
    name: 'VsMenu',
  };
</script>
<script lang="ts" setup>
  import { ref } from 'vue';
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue';

  const isCollapse = ref(false);
</script>

<template>
  <el-menu default-active="2" class="vs-side-menu" :collapse="isCollapse">
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>工作台</span>
      </template>

      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>

      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>图表分析</template>
    </el-menu-item>

    <el-menu-item index="3">
      <el-icon><Setting /></el-icon>
      <template #title>功能组件</template>
    </el-menu-item>

    <el-menu-item index="4">
      <el-icon><Document /></el-icon>
      <template #title>系统管理</template>
    </el-menu-item>

    <el-menu-item index="5">
      <el-icon><Setting /></el-icon>
      <template #title>页面模块</template>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
  .vs-side-menu {
    height: 100%;
  }
</style>
