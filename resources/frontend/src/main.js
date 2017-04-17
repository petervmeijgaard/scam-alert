/* ============
 * Main File
 * ============
 *
 * Will initialize the application
 */
import Vue from 'vue';
import app from './app';

require('./bootstrap');

new Vue(app).$mount('#app');
