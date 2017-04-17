<style lang="stylus">
  @import '~assets/stylus/imports.styl'

  .text-field
    border: none
    border-bottom: .0625rem solid palette('Grey')
    background-color: transparent
    outline: none
    font-size: 1rem
    padding: .5rem 0
    transition: border-bottom-color $transition_speed ease-in-out
    display: inline-flex
    vertical-align: middle
    margin: 0
    &:focus
      border-bottom-color: palette('Green')
    +variant('with-signifier')
      margin-left: 1rem
      flex-grow: 1
      flex-basis: 0
      max-width: 100%
</style>

<template>
  <input
    :class="classNames"
    type="text"
    :value="value"
    @input="updateInput($event.target.value)"
  >
</template>

<script>
  import BlockMixin from 'mixins/block';
  import ComponentMixin from 'mixins/component';

  export default {
    /**
     * The name of the component.
     */
    name: 'text-field',

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
       * The value displayed in the text box.
       */
      value: {
        type: String,
        required: false,
      },
    },

    /**
     * The methods which the component can use.
     */
    methods: {
      /**
       * This method will emit an event when the input has been updated.
       *
       * @param {*} value The value to be updated.
       */
      updateInput(value) {
        this.$emit('input', value);
      },
    },
  };
</script>
