<style lang="stylus">
  @import '~@/assets/stylus/imports.styl'

  .select
    +has('label')
      align-items: center
      cursor: pointer
      display: flex
      flex-direction: row
</style>

<template>
  <div
    :class="classNames"
    @click.prevent="$emit('click')"
  >
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
    name: 'select-label',

    /**
     * The element name of the component.
     */
    element: 'label',

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
