<script lang="ts">
  import { h, defineComponent } from 'vue';

  export default defineComponent({
    name: 'MenuItem',
    props: {
      icon: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
    },
    setup(props, { slots }) {
      return () => {
        const { icon, title } = props;
        if (icon) {
          return `<svg-icon icon-class=${props.icon} className="nav-icon" />`;
        }

        if (title) {
          return h('span', null, [slots.title?.()]);
        }
      };
    },
  });
</script>

<style scoped>
  .sub-el-icon {
    color: currentColor;
    width: 1em;
    height: 1em;
  }
</style>
