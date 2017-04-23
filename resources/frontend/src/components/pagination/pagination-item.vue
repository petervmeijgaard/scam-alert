<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .pagination
    +has('item')
      border-radius: .125rem
      color: palette('Grey', '600')
      cursor: pointer
      display: inline-flex
      font-size: 1rem
      font-weight: 500
      height: 1.5rem
      line-height: 1.5rem
      text-align: center
      text-decoration: none
      transition: color $transition_speed ease-in-out
      vertical-align: middle
      padding: 0 .5rem
      +variant('active')
        color: palette('Green')
      +variant('disabled')
        color: palette('Grey', '300')
        cursor: not-allowed
      +variant('icon')
        padding: 0
</style>

<template>
  <a :class="classNames"
     @click.prevent="emitClick"
  >
    <slot>{{ content }}</slot>
  </a>
</template>

<script>
  import CSSUtil from '@/utils/css';
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'pagination-item',

    /**
     * The element name of the component.
     */
    element: 'item',

    /**
     * The properties which the component can use.
     */
    props: {
      /**
       * If the item is active.
       */
      isActive: {
        type: Boolean,
        required: false,
        default() {
          return false;
        },
      },

      /**
       * If the item is enabled.
       */
      isEnabled: {
        type: Boolean,
        required: false,
        default() {
          return true;
        },
      },
    },

    /**
     * The computed properties for the component.
     */
    computed: {
      /**
       * Get the CSS module class names.
       *
       * @returns {Array} The CSS module class names.
       */
      classNames() {
        const classNames = CSSUtil
          .getElementClasses(this.block, this.$options.element, this.getVariants);

        if (this.isActive) {
          classNames.push(CSSUtil.variant(this.getElementClassName, 'active'));
        }

        if (!this.isEnabled) {
          classNames.push(CSSUtil.variant(this.getElementClassName, 'disabled'));
        }

        return classNames.map(className => this.getClass(className));
      },
    },

    /**
     * The methods which the component can use.
     */
    methods: {
      /**
       * This method will emit the @click event to the parent.
       */
      emitClick() {
        if (this.isEnabled) {
          this.$emit('click');
        }
      },
    },

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
