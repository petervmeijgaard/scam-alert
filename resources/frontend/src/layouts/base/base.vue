<template>
  <div>
    <v-header>
      <v-toolbar>
        <v-nav-icon @click.native="toggleDrawer"/>
        <v-toolbar-title>
          Scam alert
        </v-toolbar-title>
      </v-toolbar>

      <transition name="slide-left">
        <v-drawer v-if="application.drawerActive">
          <v-drawer-header>
            <v-nav-icon variant="green" @click.native="toggleDrawer"/>
            <v-drawer-title>
              Scam alert
            </v-drawer-title>
          </v-drawer-header>
          <v-drawer-body>
            <v-navigation>
              <v-navigation-item>
                <v-navigation-link :route="{ name: 'home.index' }">
                  <v-navigation-content>
                    Home
                  </v-navigation-content>
                </v-navigation-link>
                <v-navigation-link :route="{ name: 'scammers.index' }">
                  <v-navigation-content>
                    Scammers
                  </v-navigation-content>
                </v-navigation-link>
              </v-navigation-item>
            </v-navigation>
          </v-drawer-body>
          <v-drawer-footer>
            Vivid Websolutions &copy;
          </v-drawer-footer>
        </v-drawer>
      </transition>

    </v-header>

    <v-content>

      <slot></slot>

    </v-content>

    <transition name="fade">
      <v-overlay
        v-show="application.drawerActive"
        @click.native="hideDrawer"
      />
    </transition>

  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import { VContent } from 'components/content';
  import {
    VDrawer,
    VDrawerBody,
    VDrawerHeader,
    VDrawerTitle,
    VDrawerFooter,
  } from 'components/drawer';
  import { VNavIcon } from 'components/nav-icon';
  import { VHeader } from 'components/header';
  import { VOverlay } from 'components/overlay';
  import { VToolbar, VToolbarTitle } from 'components/toolbar';
  import {
    VNavigation,
    VNavigationContent,
    VNavigationItem,
    VNavigationLink,
  } from 'components/navigation';
  import ComponentMixin from 'mixins/component';

  export default {
    /**
     * The name of the layout.
     */
    name: 'base-layout',

    /**
     * The mixins used to extend the layout.
     */
    mixins: [
      ComponentMixin,
    ],

    /**
     * The computed properties the layout can use.
     */
    computed: {
      ...mapState('application', {
        application: state => state,
      }),
    },

    /**
     * The methods which the layout can use.
     */
    methods: {
      /**
       * Method used to toggle the drawer.
       */
      toggleDrawer() {
        this.$store.dispatch('application/toggleDrawer');
      },

      /**
       * Method used to hide the drawer.
       */
      hideDrawer() {
        this.$store.dispatch('application/hideDrawer');
      },
    },

    /**
     * The components shown on the layout page.
     */
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
      VNavigationContent,
      VNavigationLink,
      VNavigationItem,
    },
  };
</script>
