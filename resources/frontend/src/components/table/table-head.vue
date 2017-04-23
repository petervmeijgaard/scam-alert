<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .table
    +has('head')
      font-size: 1rem
      padding: 1rem
      text-align: left
      color: palette('Grey', '600')
</style>

<template>
  <th :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </th>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'table-head',

    /**
     * The element name of the component.
     */
    element: 'head',

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
