<style lang="stylus">
  @import '../../../assets/stylus/imports.styl'

  .drawer
    +has('footer')
      background-color: palette('White')
      border-top: 0.0625rem solid palette('Grey', '100')
      font-size: .875rem
      padding: 1rem 1.5rem
      line-height: 1rem
      font-weight: 300
</style>

<template>
  <footer :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </footer>
</template>

<script>
  import ComponentMixin from './../../mixins/component';
  import ElementMixin from './../../mixins/element';
  import SlotMixin from './../../mixins/slot';

  export default {
    /**
     * The name of the component
     */
    name: 'drawer-footer',

    /**
     * The element name of the component.
     */
    element: 'footer',

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
