import { mapState } from 'vuex';
import * as VToolbar from './../../components/toolbar/toolbar.vue';
import * as VDrawer from './../../components/drawer/drawer.vue';
import * as VOverlay from './../../components/overlay/overlay.vue';
import * as VGrid from './../../components/grid/grid.vue';
import * as VRow from './../../components/row/row.vue';
import * as VCol from './../../components/col/col.vue';
import ComponentMixin from './../../mixins/component';

export default {
  name: 'base-layout',

  data() {
    return {
      title: {
        content: 'Scam Alert',
      },
    };
  },


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
    VOverlay,
    VGrid,
    VRow,
    VCol,
  },
};
