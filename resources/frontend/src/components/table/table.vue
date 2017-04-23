<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .table
    background-color: palette('White')
    border-radius: .125rem
    box-shadow: $box_shadow_minimum
    width: 100%
</style>

<template>
  <table :class="classNames">
    <slot>{{ content }}</slot>
  </table>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'table',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
      SlotMixin,
    ],
  };
</script>
