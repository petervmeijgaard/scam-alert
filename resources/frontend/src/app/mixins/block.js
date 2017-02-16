import CSSUtil from '../utils/css';
import StyleMixin from './style';

export default {
  /**
   * The mixins used for the mixin.
   */
  mixins: [
    StyleMixin,
  ],

  computed: {
    /**
     * Get the CSS module class names.
     *
     * @returns {Array} The CSS module class names.
     */
    classNames() {
      return CSSUtil.getBlockClasses(this.$options.name, this.variants)
        .map(className => this.getClass(className));
    },
  },
};
