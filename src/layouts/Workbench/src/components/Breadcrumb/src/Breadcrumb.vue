<script lang="ts">
  export default {
    name: 'BreadCrumb',
  };
</script>
<script lang="ts" setup>
  /**
   * @see https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/Hamburger/index.vue
   */
  const breadcrumb = ['Home', 'Dateil'];
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumb" :key="item">
      {{ item }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
