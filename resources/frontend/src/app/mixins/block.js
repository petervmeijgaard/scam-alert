import CSSUtil from '../utils/css';
import StyleMixin from './style';

export default {
  mixins: [
    StyleMixin,
  ],
  computed: {
    classNames() {
      return CSSUtil.getBlockClasses(this.$options.name, this.variants)
        .map(className => this.getClass(className));
    },
  },
};
