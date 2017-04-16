import { mapState } from 'vuex';
import { VContent } from './../../components/content';
import * as VDrawer from './../../components/drawer/drawer.vue';
import * as VDrawerHeader from './../../components/drawer/header/header.vue';
import * as VDrawerTitle from './../../components/drawer/title/title.vue';
import * as VDrawerBody from './../../components/drawer/body/body.vue';
import * as VDrawerFooter from './../../components/drawer/footer/footer.vue';
import * as VNavIcon from './../../components/nav-icon/nav-icon.vue';
import * as VHeader from './../../components/header/header.vue';
import * as VOverlay from './../../components/overlay/overlay.vue';
import * as VToolbar from './../../components/toolbar/toolbar.vue';
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
    VNavigation,
  },
};
