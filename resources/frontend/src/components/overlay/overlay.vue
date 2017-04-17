<style lang="stylus">
  @import '~assets/stylus/imports.styl'

  .overlay
    background-color: rgba(0, 0, 0, 0.5)
    height: 100%
    left: 0
    position: fixed
    top: 0
    width: 100%
    z-index: 1
</style>

<template>
  <div
    :class="classNames"
    @click.prevent="$emit('click')"
  ></div>
</template>

<script>
  import BlockMixin from 'mixins/block';
  import ComponentMixin from 'mixins/component';

  export default {
    /**
     * The name of the component
     */
    name: 'overlay',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
    ],
  };
</script>
