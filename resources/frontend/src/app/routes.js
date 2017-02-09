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
    component: require('./pages/home/index/index.vue'),
  },
  // 404
  {
    path: '/404',
    name: 'not-found.index',
    component: require('./pages/not-found/index/index.vue'),
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
