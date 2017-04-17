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
  import eventMapper from './foo/eventMapper';

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

      eventMapper.setChannel('scammer')
        .mapEvent('created')
        .mapEvent('updated')
        .mapEvent('deleted');
    },
  };
</script>
