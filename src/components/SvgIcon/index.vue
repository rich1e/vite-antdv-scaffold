<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-on="$attrs"
  />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
  import { defineComponent, computed, reactive } from 'vue';
  // doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
  import { isExternal } from '@/utils/validate';

  export default defineComponent({
    name: 'SvgIcon',
    props: {
      iconClass: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const state = reactive({
        isExternal: computed(() => isExternal(props.iconClass)),
        svgClass: computed(() => `#icon-${props.iconClass}`),
        iconName: computed(() => {
          if (props.className) {
            return 'svg-icon ' + props.className;
          } else {
            return 'svg-icon';
          }
        }),
        styleExternalIcon: computed(() => {
          return {
            mask: `url(${props.iconClass}) no-repeat 50% 50%`,
            '-webkit-mask': `url(${props.iconClass}) no-repeat 50% 50%`,
          };
        }),
      });

      return {
        ...state,
      };
    },
  });
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .svg-external-icon {
    background-color: currentColor;
    mask-size: cover !important;
    display: inline-block;
  }
</style>
