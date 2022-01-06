<script setup lang="ts">
  /*初始化参数比如引入组件，proxy,state等*/
  import { getCurrentInstance, onMounted } from 'vue';
  import Link from './Link.vue';
  import Item from './Item';
  import { isExternal } from '@/utils/validate';
  /**
   * Error: Module "path" has been externalized for browser compatibility and cannot be accessed in client code.
   * @see https://blog.csdn.net/qq_32063079/article/details/120769787
   */
  import path from 'path-browserify';
  import { RouteItemTy } from '~/router';

  const { proxy }: any = getCurrentInstance();

  defineProps({
    //每一个router Item
    item: {
      type: Object,
      required: true,
    },
    //用于判断是不是子Item,设置响应的样式
    isNest: {
      type: Boolean,
      default: false,
    },
    //基础路径，用于拼接
    basePath: {
      type: String,
      default: '',
    },
  });

  onMounted(() => {
    // console.log('我挂载了');
    // console.log(proxy.item);
  });

  // const onlyOneChild = ref(null);

  //显示sidebarItem 的情况
  // proxy.onlyOneChild = null;
  const { onlyOneChild } = proxy;

  const showSidebarItem = (children = [], parent: RouteItemTy) => {
    const showingChildren = children.filter((item: RouteItemTy) => {
      if (item.hidden) {
        return false;
      } else {
        // Temp set(will be used if only has one showing child)
        proxy.onlyOneChild = item;
        return true;
      }
    });
    if (showingChildren.length === 1 && !parent?.alwaysShow) {
      return true;
    }
    if (showingChildren.length === 0) {
      proxy.onlyOneChild = { ...parent, path: '', noChildren: true };
      return true;
    }
    return false;
  };
  const resolvePath = (routePath: string) => {
    if (isExternal(routePath)) {
      return routePath;
    }
    if (isExternal(proxy.basePath)) {
      return proxy.basePath;
    }
    return path.resolve(proxy.basePath, routePath);
  };
</script>

<template>
  <template v-if="!item.hidden">
    <template v-if="showSidebarItem(item.children, item)">
      <Link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item
          :index="resolvePath(onlyOneChild.path)"
          :class="{ 'submenu-title-noDropdown': !isNest }"
        >
          <item :meta="onlyOneChild.meta || item.meta" />
          <template #title>{{ onlyOneChild.meta?.title }}</template>
        </el-menu-item>
      </Link>
    </template>
    <el-sub-menu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template v-if="item.meta" #title>
        <item :meta="item.meta" />
        <span>{{ item.meta.title }}</span>
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-sub-menu>
  </template>
</template>

<style lang="scss" scoped>
  :deep(.el-sub-menu .el-menu-item) {
    padding-left: 48px;
  }
  // TODO menu hover
  /* .submenu-title-noDropdown,
  .el-submenu__title {
    &:hover {
      background-color: $menuHover !important;
    }
  }

  .is-active>.el-submenu__title {
    color: $subMenuActiveText !important;
  }*/
</style>
