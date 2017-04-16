import { mapState } from 'vuex';
import { VContent } from './../../components/content';
import {
  VDrawer,
  VDrawerBody,
  VDrawerHeader,
  VDrawerTitle,
  VDrawerFooter
} from './../../components/drawer';
import * as VNavIcon from './../../components/nav-icon/nav-icon.vue';
import { VHeader } from './../../components/header';
import * as VOverlay from './../../components/overlay/overlay.vue';
import { VToolbar, VToolbarTitle } from './../../components/toolbar';
import * as VNavigation from './../../components/navigation/navigation.vue';
import ComponentMixin from './../../mixins/component';

export default {
  name: 'base-layout',

  data() {
    return {
      title: {
        content: 'Scam Alert',
      },
      navIcon: {
        variant: 'green',
      },
      routes: [
        {
          to: { name: 'home.index' },
          content: 'Home',
        },
        {
          to: { name: 'scammers.index' },
          content: 'Scammers',
        },
      ],
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
    VContent,
    VDrawer,
    VDrawerHeader,
    VNavIcon,
    VDrawerTitle,
    VDrawerFooter,
    VDrawerBody,
    VHeader,
    VOverlay,
    VToolbar,
    VToolbarTitle,
    VNavigation,
  },
};
