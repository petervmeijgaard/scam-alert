<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .card
    background-color: palette('White')
    border-radius: .125rem
    box-shadow: $box_shadow_minimum
    display: flex
    width: 100%
    +variant('inline')
      display: inline-flex
      width: auto
</style>

<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import BlockMixin from '@/mixins/block';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'card',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      BlockMixin,
      SlotMixin,
    ],
  };
</script>
