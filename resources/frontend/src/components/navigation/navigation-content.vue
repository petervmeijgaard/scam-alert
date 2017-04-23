<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .navigation
    +has('content')
      font-size: 0.875rem
</style>

<template>
  <span :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </span>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'navigation-content',

    /**
     * The element name of the component.
     */
    element: 'content',

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
