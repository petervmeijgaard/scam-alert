import CSSUtil from './../../utils/css';
import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';
import SlotMixin from './../../mixins/slot';
import * as VDrawerBody from './body/body.vue';
import * as VDrawerFooter from './footer/footer.vue';
import * as VDrawerHeader from './header/header.vue';
import * as VDrawerTitle from './title/title.vue';
import * as VNavIcon from './../nav-icon/nav-icon.vue';

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
    SlotMixin,
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

    /**
     * The title being displayed.
     */
    title: {
      type: [Object, String],
      required: false,
    },

    /**
     * The header being displayed.
     */
    header: {
      type: [Object, String],
      required: false,
    },

    /**
     * The body being displayed.
     */
    body: {
      type: [Object, String],
      required: false,
    },

    /**
     * The footer being displayed.
     */
    footer: {
      type: [Object, String],
      required: false,
    },
  },

  /**
   * The data of the component
   *
   * @returns {Object} The data.
   */
  data() {
    return {
      navIcon: {
        variant: 'green',
      },
    };
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
      const classNames = CSSUtil.getBlockClasses(this.$options.name, this.getVariants);

      if (this.isActive) {
        classNames.push(CSSUtil.variant(this.$options.name, 'active'));
      }

      return classNames.map(className => this.getClass(className));
    },

    /**
     * Checks if the component has a body.
     *
     * @returns {boolean} If the component has a body.
     */
    hasBody() {
      return this.has('body');
    },

    /**
     * Checks if the component has a footer.
     *
     * @returns {boolean} If the component has a footer.
     */
    hasFooter() {
      return this.has('footer');
    },

    /**
     * Checks if the component has a header.
     *
     * @returns {boolean} If the component has a header.
     */
    hasHeader() {
      return this.has('header') || this.has('title');
    },

    /**
     * Checks if the component has a title.
     *
     * @returns {boolean} If the component has a title.
     */
    hasTitle() {
      return this.has('title');
    },
  },

  /**
   * The sub components for this component.
   */
  components: {
    VDrawerBody,
    VDrawerFooter,
    VDrawerHeader,
    VDrawerTitle,
    VNavIcon,
  },
};
