/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

/**
 * The routes
 *
 * @type {object} The routes
 */
export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: resolve => require(['./pages/home/index/index.vue'], resolve),
  },

  // Scammers
  {
    path: '/scammers',
    name: 'scammers.index',
    component: resolve => require(['./pages/scammers/index/index.vue'], resolve),
  },

  {
    path: '/scammers/:scammerId',
    name: 'scammers.show',
    component: resolve => require(['./pages/scammers/show/show.vue'], resolve),
    props: true,
  },

  // 404
  {
    path: '/404',
    name: 'not-found.index',
    component: resolve => require(['./pages/not-found/index/index.vue'], resolve),
  },

  // Redirects
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/*',
    redirect: '/404',
  },
];
