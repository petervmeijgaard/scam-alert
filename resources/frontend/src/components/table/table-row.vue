<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .table
    +has('row')
      border-bottom: .0625rem solid palette('Grey', '300')
      +variant('body')
        transition: background-color $transition_speed ease-in-out
        &:hover
          background-color: palette('Grey', '200')
        &:last-child
          border-bottom: none
</style>

<template>
  <tr :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </tr>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'table-row',

    /**
     * The element name of the component.
     */
    element: 'row',

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
