<script setup lang="ts">
  import * as Svg from '@element-plus/icons-vue';
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const username = computed(() => {
    return store.state.user.username;
  });
</script>

<template>
  <div class="scroll-y">
    <div class="dashboard-container">
      <div class="dashboard-text">
        name: {{ username }}
        <el-icon>
          <Svg.Edit></Svg.Edit>
        </el-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dashboard {
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
</style>
