<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .navigation
    +has('link')
      color: palette('Grey', '900')
      display: flex
      padding: 1rem 1.5rem
      text-decoration: none
      transition: background-color $transition_speed ease-in-out, color $transition_speed ease-in-out
      &:hover
        background-color: palette('Grey', '200')

      +variant('active')
        background-color: palette('Grey', '100')
        color: palette('Green')
</style>

<template>
  <router-link
    :to="route"
    :class="classNames"
    :active-class="activeClass"
  >
    <slot>
      {{ content }}
    </slot>
  </router-link>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';
  import CSSUtil from '@/utils/css';

  export default {
    /**
     * The name of the component.
     */
    name: 'navigation-link',

    /**
     * The element name of the component.
     */
    element: 'link',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      ElementMixin,
      SlotMixin,
    ],

    /**
     * The properties which the component can use.
     */
    props: {
      /**
       * The route information.
       */
      route: {
        type: Object,
        required: true,
      },
    },

    /**
     * The computed properties for the component.
     */
    computed: {
      /**
       * Get the active class name in a CSS module form.
       *
       * @returns {string} The correct CSS module name.
       */
      activeClass() {
        return this.getClass(CSSUtil.variant(CSSUtil.has(this.block, this.$options.element), 'active'));
      },
    },
  };
</script>
