/* ============
 * Bootstrap File
 * ============
 *
 * Will configure and bootstrap the application.
 */


/* ============
 * Vue
 * ============
 *
 * Vue.js is a library for building interactive web interfaces.
 * It provides data-reactive components with a simple and flexible API.
 *
 * http://rc.vuejs.org/guide/
 */
import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

const bus = new Vue();

// Bind the event bus to Vue.
Vue.$bus = bus;
Object.defineProperty(Vue.prototype, '$bus', {
  get() {
    return bus;
  },
});


/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */
import Axios from 'axios';

Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.Accept = 'application/json';

// Bind Axios to Vue.
Vue.$http = Axios;
Object.defineProperty(Vue.prototype, '$http', {
  get() {
    return Axios;
  },
});


/* ============
 * Laravel Echo
 * ============
 *
 * Laravel Echo is a JavaScript library that makes it painless to subscribe
 * to channels and listen for events broadcast by Laravel.
 *
 * https://github.com/laravel/echo
 */
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.PUSHER_KEY,
  cluster: process.env.PUSHER_CLUSTER,
  authEndpoint: process.env.BROADCAST_ENDPOINT,
});

// Bind Laravel Echo to Vue.
Vue.$echo = echo;
Object.defineProperty(Vue.prototype, '$echo', {
  get() {
    return echo;
  },
});


/* ============
 * Vuex Router Sync
 * ============
 *
 * Effortlessly keep vue-router and vuex store in sync.
 *
 * https://github.com/vuejs/vuex-router-sync/blob/master/README.md
 */
import VuexRouterSync from 'vuex-router-sync';
import store from 'store';


/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */
import VueRouter from 'vue-router';
import routes from 'routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
});
router.afterEach(() => {
  if (store.state.application.drawerActive) {
    Vue.nextTick(() => {
      bus.$emit('application@hideDrawer');
    });
  }
});
VuexRouterSync.sync(store, router);

Vue.router = router;


/* ============
 * Vue i18n
 * ============
 *
 * Internationalization plugin of Vue.js
 *
 * https://kazupon.github.io/vue-i18n/
 */
import VueI18n from 'vue-i18n';
import messages from 'locale';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: store.state.application.language,
  fallbackLocale: 'en',
  messages,
});

store.watch(
  state => state.application.language,
  language => (i18n.locale = language),
);


/* ============
 * Styling
 * ============
 *
 * Require the application styling.
 *
 * http://stylus-lang.com/
 */
import './assets/stylus/app.styl';


export default {
  router,
  i18n,
};
