<style lang="stylus">
  @import '~assets/stylus/imports.styl'

  .toolbar
    box-shadow: $box_shadow_minimum
    background-color: palette('Green')
    height: 4rem
    position: fixed
    top: 0
    width: 100%
</style>

<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script>
  import BlockMixin from 'mixins/block';
  import ComponentMixin from 'mixins/component';
  import SlotMixin from 'mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'toolbar',

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
