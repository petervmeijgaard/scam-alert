<style lang="stylus">
  @import './../../../assets/stylus/imports.styl'

  .icon
    font-family: 'Material Icons'
    font-feature-settings: 'liga'
    font-weight: normal
    font-style: normal
    font-size: 1.5rem
    direction: ltr
    display: flex
    letter-spacing: normal
    line-height: 1
    text-transform: none
    word-wrap: normal
    white-space: nowrap
    -webkit-font-smoothing: antialiased
    text-rendering: optimizeLegibility
    -moz-osx-font-smoothing: grayscale
    +variant('signifier')
      vertical-align: middle
      color: palette('Grey')
</style>

<template>
  <i :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </i>
</template>

<script>
  import ComponentMixin from './../../mixins/component';
  import BlockMixin from './../../mixins/block';
  import SlotMixin from './../../mixins/slot';

  export default {
    /**
     * The name of the component
     */
    name: 'icon',

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
