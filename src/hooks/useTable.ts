import {
  ref,
  onMounted,
  nextTick,
  // getCurrentInstance,
  Ref,
} from 'vue';
import { ElTable as ElTableRef } from 'element-plus';

/**
 * @see https://segmentfault.com/a/1190000038828338
 * @see https://juejin.cn/post/6963557112400052231
 * @description 解决表格错位
 */
const useTable = () => {
  onMounted(() => {
    // console.log('onMounted refTable', refTable.value);
    // console.log('onMounted proxy', proxy.$refs['refTable'])

    (async () => {
      await nextTick(() => {
        // proxy.$refs['refTable'].doLayout();
        refTable.value?.doLayout();
      });
    })();
  });
};

/**
 * @see https://orzi.me/index.php/archives/49/
 * @see https://segmentfault.com/a/1190000040098033
 * @see https://v3.vuejs.org/guide/typescript-support.html#typing-template-refs
 * @see https://python.iitter.com/other/287180.html
 */
// const { proxy }: any = getCurrentInstance();
export const refTable: Ref<InstanceType<typeof ElTableRef> | null> = ref(null);

export default useTable;
