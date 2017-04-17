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
  import { router, i18n } from './bootstrap';

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

    /**
     * The translations.
     */
    i18n,

    mounted() {
      store.dispatch('scammer/all');
      store.dispatch('application/fetchLanguage');

      this.$echo
        .channel('scammer')
        .listen('Scammer.Created', scammer => store.dispatch('scammer/created', scammer))
        .listen('Scammer.Updated', scammer => store.dispatch('scammer/updated', scammer))
        .listen('Scammer.Deleted', scammer => store.dispatch('scammer/deleted', scammer));
    },
  };
</script>
