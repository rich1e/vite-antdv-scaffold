<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
  import { computed, defineComponent, reactive } from 'vue';
  import { isExternal } from '@/utils/validate';

  interface Props {
    to: string;
  }

  export default defineComponent({
    name: 'AppLink',
    props: {
      to: {
        type: String,
        required: true,
      },
    },
    setup(props: Props) {
      const state = reactive({
        isExternal: computed(() => isExternal(props.to)),
        type: computed(() => {
          if (state.isExternal) {
            return 'a';
          }
          return 'router-link';
        }),
      });

      const linkProps = (to) => {
        if (state.isExternal) {
          return {
            href: to,
            target: '_blank',
            rel: 'noopener',
          };
        }
        return {
          to: to,
        };
      };

      return {
        ...state,
        linkProps,
      };
    },
  });
</script>
