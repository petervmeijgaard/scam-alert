<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .select
    +has('icon')
      color: palette('Grey', '600')
      display: inline-flex
      margin-left: .5rem
      margin-right: -.5rem
      text-align: end
</style>

<template>
  <v-icon :class="classNames">
    arrow_drop_down
  </v-icon>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';
  import { VIcon } from '@/components/icon/index';

  export default {
    /**
     * The name of the component.
     */
    name: 'select-icon',

    /**
     * The element name of the component.
     */
    element: 'icon',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      ElementMixin,
      SlotMixin,
    ],

    /**
     * The sub components for this component.
     */
    components: {
      VIcon,
    },
  };
</script>
