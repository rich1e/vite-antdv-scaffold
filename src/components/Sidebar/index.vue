<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
  import { computed, ComputedRef, defineComponent, reactive } from 'vue';
  import { useStore } from 'vuex';
  import Logo from './Logo.vue';
  import SidebarItem from './SidebarItem.vue';
  import variables from '@/styles/variables.scss';
  import { key } from '@/store';
  import { useRoute, useRouter } from 'vue-router';

  interface State<T = any> {
    sidebar: ComputedRef<T>;
    routes: ComputedRef<T>;
    activeMenu: ComputedRef<T>;
    showLogo: ComputedRef<T>;
    variables: ComputedRef<T>;
    isCollapse: ComputedRef<T>;
  }

  export default defineComponent({
    name: 'SideBar',
    components: { SidebarItem, Logo },
    setup() {
      const state = reactive<State>({
        sidebar: computed(() => store.getters.sidebar),
        routes: computed(() => router.options.routes),
        activeMenu: computed(() => {
          const route = useRoute();
          const { meta, path } = route;
          // if set path, the sidebar will highlight the path you set
          if (meta.activeMenu) {
            return meta.activeMenu;
          }
          return path;
        }),
        showLogo: computed(() => store.getters.sidebarLogo),
        variables: computed(() => variables),
        isCollapse: computed(() => !state.sidebar.opened),
      });

      const store = useStore(key);
      const router = useRouter();

      return {
        ...state,
      };
    },
  });
</script>
