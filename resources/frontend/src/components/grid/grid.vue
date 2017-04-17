<style lang="stylus">
  @import '~assets/stylus/imports.styl'

  .grid
    padding: 0 .5rem

    +variant(container)
      margin: 0 auto
      max-width: 1200px
      width: 100%

    +variant(no-gutters)
      padding: 0
</style>

<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script>
  import ComponentMixin from 'mixins/component';
  import BlockMixin from 'mixins/block';
  import SlotMixin from 'mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'grid',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      BlockMixin,
      SlotMixin,
    ],
  };
</script>
