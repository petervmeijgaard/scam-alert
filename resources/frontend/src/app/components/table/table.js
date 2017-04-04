import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';
import * as VTableHead from './head/head.vue';
import * as VTableBody from './body/body.vue';
import * as VTableRow from './row/row.vue';
import * as VTableCol from './col/col.vue';

export default {
  /**
   * The name of the component
   */
  name: 'table',

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
     * The headings for the table being displayed.
     */
    headings: {
      type: Array,
      required: true,
    },

    /**
     * The message being displayed if there are no items.
     */
    emptyMessage: {
      type: String,
      required: true,
    },

    /**
     * The content being displayed inside the table.
     */
    content: {
      type: Array,
      required: false,
    },
  },

  /**
   * The sub components for this component.
   */
  components: {
    VTableHead,
    VTableBody,
    VTableRow,
    VTableCol,
  },
};
