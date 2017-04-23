<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .select
    +has('selected')
      color: palette('Grey', '600')
      display: inline-flex
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
    name: 'select-selected',

    /**
     * The element name of the component.
     */
    element: 'selected',

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
