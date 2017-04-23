<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .input-group
    align-items: center
    display: flex
    flex: 0 1 100%
    flex-direction: row
    flex-wrap: wrap
    list-style: none
</style>

<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'input-group',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
      SlotMixin,
    ],
  };
</script>
