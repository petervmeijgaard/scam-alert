<template>
  <div>
    <v-header>
      <v-toolbar>
        <v-nav-icon />
        <v-toolbar-title>
          Scam alert
        </v-toolbar-title>
      </v-toolbar>

      <transition name="slide-left">
        <v-drawer v-if="application.drawerActive">
          <v-drawer-header>
            <v-nav-icon variant="green" />
            <v-drawer-title>
              Scam alert
            </v-drawer-title>
          </v-drawer-header>
          <v-drawer-body>
            <v-navigation :routes="routes">
              <v-navigation-item
                v-for="route in routes"
                :key="route"
              >
                <v-navigation-link :route="route.to">
                  <v-navigation-content>
                    {{ route.content }}
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
      <v-overlay v-show="application.drawerActive"/>
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
      VNavigationContent,
      VNavigationLink,
      VNavigationItem,
    },
  };
</script>
