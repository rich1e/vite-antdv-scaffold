<script setup lang="ts">
  import * as ElSvg from '@element-plus/icons-vue';
  import { toRefs } from 'vue';

  const props: any = defineProps({
    elSvgName: {
      require: true,
      default: 'Fold',
      type: String,
    },
  });
  const { elSvgName } = toRefs(props);
</script>

<template>
  <el-icon class="el-svg-icon">
    <component :is="ElSvg[elSvgName]" />
  </el-icon>
</template>

<style scoped lang="scss">
  .el-svg-icon {
    width: 1em;
    height: 1em;
    margin-left: -2px; //el-svg-icon has some margin
    font-size: 20px !important;
    text-align: left !important;
  }
</style>
