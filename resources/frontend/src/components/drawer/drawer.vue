<style lang="stylus">
  @import '~assets/stylus/imports.styl'

  .drawer
    background-color: palette('White')
    display: flex
    flex-direction: column
    height: 100%
    left: 0
    position: fixed
    top: 0
    transition: left $transition_speed ease-in-out
    width: 17.5rem
    z-index: 999
</style>

<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script>
  import BlockMixin from 'mixins/block';
  import ComponentMixin from 'mixins/component';
  import SlotMixin from 'mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'drawer',

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
