<script lang="ts">
  export default {
    name: 'TagItem',
  };
</script>
<script lang="ts" setup>
  import { onMounted } from 'vue';

  onMounted(() => {
    console.log('tag');
  });
</script>

<template>
  <div> tag </div>
</template>
