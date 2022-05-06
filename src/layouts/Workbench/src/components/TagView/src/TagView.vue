<script lang="ts">
  export default {
    name: 'TagView',
  };
</script>
<script lang="ts" setup>
  import {
    ArrowDown,
    Operation,
    Refresh,
    FullScreen,
  } from '@element-plus/icons-vue';
  import Tag from './Tag.vue';
</script>

<template>
  <div class="tag-view">
    <div class="tag-view__left" />
    <el-scrollbar>
      <div class="scrollbar-flex-content">
        <Tag v-for="item in 30" :key="item" class="scrollbar-demo-item" />
      </div>
    </el-scrollbar>
    <div class="tag-view__right">
      <div class="tag-view__action">
        <el-icon><refresh /></el-icon>
      </div>
      <el-divider direction="vertical" />
      <div class="tag-view__action">
        <el-icon><arrow-down /></el-icon>
      </div>
      <el-divider direction="vertical" />
      <div class="tag-view__action">
        <el-icon><operation /></el-icon>
      </div>
      <el-divider direction="vertical" />
      <div class="tag-view__action">
        <el-icon><full-screen /></el-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .tag-view {
    height: 40px;
    display: flex;
    align-items: center;
    box-shadow: 0 6px 5px -6px #ccc;
    padding-right: 12px;

    &__left {
      height: 100%;
      width: 44px;
      box-shadow: 5px 0 5px -6px #ccc;
      margin-right: 3px;

      display: flex;
      align-content: center;
      place-items: center;
      justify-content: center;
    }

    &__right {
      height: 100%;
      width: 180px;
      box-shadow: -8px 0 5px -6px #ccc;
      margin-left: 3px;

      display: flex;
      align-content: center;
      place-items: center;
      justify-content: center;

      .tag-view__action {
        width: 40px;
        text-align: center;
      }
    }
  }

  .scrollbar-flex-content {
    display: flex;
    height: 30px;
    margin-top: 5px;
  }

  .scrollbar-demo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 24px;
    margin: 3px;
    text-align: center;
    border-radius: 4px;
    background: var(--el-color-danger-light-9);
    color: var(--el-color-danger);
  }
</style>
