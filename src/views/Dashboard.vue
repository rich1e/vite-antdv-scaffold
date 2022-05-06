<!--
 * @Author: rich1e
 * @Date: 2022-04-11 18:08:50
 * @LastEditors: rich1e
 * @LastEditTime: 2022-04-12 17:15:33
-->
<script lang="ts">
  export default {
    name: 'DashBoard',
  };
</script>
<script lang="ts" setup>
  import { WorkBench } from '/@/layouts/Workbench';
  const pageName = '工作台1';
</script>
<template>
  <WorkBench>
    {{ pageName }}
  </WorkBench>
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
    }

    &__main {
      position: relative;
    }
  }
</style>
