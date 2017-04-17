<style lang="stylus">
  @import './../../../assets/stylus/imports.styl'

  .nav-icon
    border-radius: 100%
    color: palette('White')
    display: inline-flex
    justify-content: space-between
    flex-direction: column
    padding: .5rem
    margin: .75rem
    position: relative
    vertical-align: middle
    &:hover
      cursor: pointer

    +variant('green')
      color: palette('Green')
</style>

<template>
  <div
    :class="classNames"
    @click="$bus.$emit('application@toggleDrawer')"
  >
    <v-icon>
      menu
    </v-icon>
  </div>
</template>

<script>
  import BlockMixin from './../../mixins/block';
  import ComponentMixin from './../../mixins/component';
  import { VIcon } from './../icon';

  export default {
    /**
     * The name of the component
     */
    name: 'nav-icon',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
    ],

    /**
     * The properties which the component can use.
     */
    props: {
      /**
       * The bar being displayed.
       */
      bar: {
        required: false,
        type: Object,
      },
    },

    /**
     * The sub components for this component.
     */
    components: {
      VIcon,
    },
  };
</script>
