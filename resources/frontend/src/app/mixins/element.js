import CSSUtil from './../utils/css';
import StyleMixin from './style';

export default {
  /**
   * The name of the element.
   */
  element: 'element',

  /**
   * The mixins used for the mixin.
   */
  mixins: [
    StyleMixin,
  ],

  computed: {
    /**
     * Get the block name.
     */
    block() {
      return this.$parent.$options.name;
    },

    classNames() {
      return CSSUtil
        .getElementClasses(this.block, this.$options.element, this.variants)
        .map(className => this.getClass(className));
    },
  },
};
