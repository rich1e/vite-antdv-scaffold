<script lang="ts">
  export default {
    name: 'SideBar',
  };
</script>
<script lang="ts" setup>
  import SideMenu from './SideMenu.vue';
</script>

<template>
  <div class="sidebar-container">
    <SideMenu />
  </div>
</template>

<style lang="scss" scoped>
  .sidebar-container {
    height: 100%;
  }
</style>
