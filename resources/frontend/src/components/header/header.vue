<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .header
    height: 4rem
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
  import BlockMixin from '@/mixins/block';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'header',

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
