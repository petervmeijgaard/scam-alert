import { mapState } from 'vuex';
import * as VToolbar from './../../components/toolbar/toolbar.vue';
import * as VDrawer from './../../components/drawer/drawer.vue';
import ComponentMixin from './../../mixins/component';

export default {
  name: 'base-layout',

  computed: {
    ...mapState('application', {
      application: state => state,
    }),
  },
  mixins: [
    ComponentMixin,
  ],

  components: {
    VToolbar,
    VDrawer,
  },
};
