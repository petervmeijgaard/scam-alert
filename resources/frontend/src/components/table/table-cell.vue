<style lang="stylus">
  @import '~assets/stylus/imports.styl'

  .table
    +has('cell')
      font-size: 1rem
      padding: 1rem
      text-align: left
      color: palette('Grey', '800')
      font-weight: 400
</style>

<template>
  <td :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </td>
</template>

<script>
  import ComponentMixin from 'mixins/component';
  import ElementMixin from 'mixins/element';
  import SlotMixin from 'mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'table-cell',

    /**
     * The element name of the component.
     */
    element: 'cell',

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
