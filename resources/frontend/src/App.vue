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
        .listen('Scammer.Created', scammer => this.$bus.$emit('scammer@created', scammer))
        .listen('Scammer.Updated', scammer => this.$bus.$emit('scammer@updated', scammer))
        .listen('Scammer.Deleted', scammer => this.$bus.$emit('scammer@deleted', scammer));

      this.$bus.$on('application@toggleDrawer', () => store.dispatch('application/toggleDrawer'));
      this.$bus.$on('application@showDrawer', () => store.dispatch('application/showDrawer'));
      this.$bus.$on('application@hideDrawer', () => store.dispatch('application/hideDrawer'));
      this.$bus.$on('scammer@created', scammer => store.dispatch('scammer/created', scammer));
      this.$bus.$on('scammer@updated', scammer => store.dispatch('scammer/updated', scammer));
      this.$bus.$on('scammer@deleted', scammer => store.dispatch('scammer/deleted', scammer));
    },
  };
</script>
