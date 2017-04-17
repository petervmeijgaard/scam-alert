<style lang="stylus">
  @import '../../../assets/stylus/imports.styl'

  .table
    +has('col')
      font-size: 1rem
      padding: 1rem
      text-align: left
      +variant('head')
        color: palette('Green')
        font-weight: 500
      +variant('body')
        color: palette('Grey', '700')
        font-weight: 400
</style>

<script>
  import ComponentMixin from '../../mixins/component';
  import ElementMixin from '../../mixins/element';
  import SlotMixin from '../../mixins/slot';

  export default {
    /**
     * The name of the component
     */
    name: 'table-col',

    /**
     * The element name of the component.
     */
    element: 'col',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      ElementMixin,
      SlotMixin,
    ],

    /**
     * The properties which the component can use.
     */
    props: {
      /**
       * The type of the column.
       */
      type: {
        type: String,
        required: true,
      },
    },

    /**
     * Render method which is used to render the component.
     *
     * @returns {XML} The XML.
     */
    render(createElement) {
      const content = this.$slots.default || this.content;

      return createElement(
        this.type === 'head' ? 'th' : 'td',
        {
          class: this.classNames,
        },
        content,
      );
    },
  };
</script>
