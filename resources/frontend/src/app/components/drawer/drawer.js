import CSSUtil from './../../utils/css';
import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';
import * as VDrawerBody from './body/body.vue';
import * as VDrawerFooter from './footer/footer.vue';
import * as VDrawerHeader from './header/header.vue';

export default {
  /**
   * The name of the component
   */
  name: 'drawer',

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
     * Whether the drawer is active.
     */
    isActive: {
      required: false,
      type: Boolean,
      default() {
        return true;
      },
    },
  },

  /**
   * The sub components for this component.
   */
  components: {
    VDrawerBody,
    VDrawerFooter,
    VDrawerHeader,
  },

  /**
   * The computed properties for the component.
   */
  computed: {
    /**
     * Get the CSS module class names.
     *
     * @returns {Array} The CSS module class names.
     */
    classNames() {
      const classNames = CSSUtil.getBlockClasses(this.$options.name, this.variants);

      if (this.isActive) {
        classNames.push(CSSUtil.variant(this.$options.name, 'active'));
      }

      return classNames.map(className => this.getClass(className));
    },
  },
};
