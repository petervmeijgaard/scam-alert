<template>
  <router-view/>
</template>
<script>
  /* ============
   * Entry Point
   * ============
   *
   * The entry point of the application
   */
  import store from './store';
  import { router } from './../bootstrap';
  import Vue from 'vue';

  export default {
    /**
     * The name of the application.
     */
    name: 'scam-alert',

    /**
     * The Vuex store
     */
    store,

    /**
     * The router.
     */
    router,

    mounted() {
      store.dispatch('facebookScammer/all');

      Vue.echo.channel('facebook_scammer')
        .listen('FacebookScammer.Created', scammer => console.log('created', scammer))
        .listen('FacebookScammer.Updated', scammer => console.log('updated', scammer))
        .listen('FacebookScammer.Deleted', scammer => console.log('deleted', scammer));
    },
  };


</script>
