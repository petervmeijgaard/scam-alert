<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .drawer
    +has('header')
      background-color: palette('White')
      border-bottom: 0.0625rem solid palette('Grey', '100')
      height: 4rem
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
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'drawer-header',

    /**
     * The element name of the component.
     */
    element: 'header',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      ElementMixin,
      SlotMixin,
    ],
  };
</script>
