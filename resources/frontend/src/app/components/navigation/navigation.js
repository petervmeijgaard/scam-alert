import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';
import * as VNavigationItem from './item/item.vue';
import * as VNavigationLink from './link/link.vue';
import * as VNavigationContent from './content/content.vue';

export default {
  /**
   * The name of the component
   */
  name: 'navigation',

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
     * The title being displayed.
     */
    routes: {
      type: [Array],
      required: true,
    },
  },

  /**
   * The sub components for this component.
   */
  components: {
    VNavigationItem,
    VNavigationLink,
    VNavigationContent,
  },
};
