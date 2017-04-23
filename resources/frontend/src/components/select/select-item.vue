<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .select
    +has('item')
      color: palette('Grey', '700')
      line-height: 1
      padding: 1rem
      transition: background-color $transition_speed ease-in-out
      &:hover
        background-color: palette('Grey', '200')
        cursor: pointer

      +variant('selected')
        background-color: palette('Grey', '200')
        color: palette('Green', '600')
</style>

<template>
  <div
    :class="classNames"
    @click.prevent="$emit('click')"
  >
    <slot>
      {{ content }}
    </slot>
  </div>
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
    name: 'select-item',

    /**
     * The element name of the component.
     */
    element: 'item',

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
       * If the item is selected.
       */
      isSelected: {
        type: Boolean,
        required: false,
        default() {
          return false;
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

        if (this.isSelected) {
          classNames.push(CSSUtil.variant(this.getElementClassName, 'selected'));
        }

        return classNames.map(className => this.getClass(className));
      },
    },
  };
</script>
