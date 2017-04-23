<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .drawer
    +has('body')
      background-color: palette('White')
      flex: 1
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
    name: 'drawer-body',

    /**
     * The element name of the component.
     */
    element: 'body',

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
