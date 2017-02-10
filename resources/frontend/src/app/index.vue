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
      store.dispatch('scammer/all');

      Vue.echo.channel('scammer')
        .listen('Scammer.Created', scammer => console.log('created', scammer))
        .listen('Scammer.Updated', scammer => console.log('updated', scammer))
        .listen('Scammer.Deleted', scammer => console.log('deleted', scammer));
    },
  };


</script>
