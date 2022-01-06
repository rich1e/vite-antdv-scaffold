<script lang="ts">
  export default {
    name: 'BaseLayout',
  };
</script>

<script setup lang="ts">
  import { Sidebar, Navbar, AppMain, TagsView } from './components';
  import { getCurrentInstance, computed } from 'vue';
  // import ResizeHook to listen page size that open or close
  import ResizeHook from './useResize';
  import { useStore } from 'vuex';

  const { proxy }: any = getCurrentInstance();
  const store = useStore();

  const opened = computed(() => {
    return proxy.$store.state.app.sidebar.opened;
  });

  const settings = computed(() => {
    return store.state.app.settings;
  });

  const classObj = computed(() => {
    return {
      closeSidebar: !opened.value,
      hideSidebar: !settings.value.showLeftMenu,
    };
  });
  ResizeHook();
</script>
<template>
  <div :class="classObj" class="layout-wrapper">
    <!--left side-->
    <Sidebar v-if="settings.showLeftMenu" class="sidebar-container" />
    <!--right container-->
    <div class="main-container">
      <Navbar v-if="settings.showTopNavbar" />
      <TagsView v-if="settings.showTagsView" />
      <AppMain />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: $sideBarWidth;
    position: relative;
  }
  .sidebar-container {
    transition: width 0.28s;
    width: $sideBarWidth !important;
    background-color: $menuBg;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }
  .closeSidebar {
    .sidebar-container {
      width: 54px !important;
    }
    .main-container {
      margin-left: 54px !important;
    }
  }
  .hideSidebar {
    .sidebar-container {
      width: 0 !important;
    }
    .main-container {
      margin-left: 0;
    }
  }
</style>
