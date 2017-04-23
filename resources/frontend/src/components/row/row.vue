<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .row
    display: flex
    flex: 0 1 100%
    flex-direction: row
    flex-wrap: wrap
    list-style: none
    margin: -1rem -.5rem 1rem -.5rem
    padding: 0
    &:last-child
      margin-bottom: 0

    +variant(no-gutters)
      margin: 0

  // Function to create the row helpers for the breakpoint.
  create-row-helpers($breakpoint)
    .row--{$breakpoint}-top
      align-items: flex-start
    .row--{$breakpoint}-center
      align-items: center
    .row--{$breakpoint}-bottom
      align-items: flex-end
    .row--{$breakpoint}-reverse
      flex-direction: row-reverse

  for $breakpoint, $width in $breakpoints
    if $width == 0
      create-row-helpers($breakpoint)
    else
      @media (min-width: $width)
        create-row-helpers($breakpoint)
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
    name: 'row',

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
