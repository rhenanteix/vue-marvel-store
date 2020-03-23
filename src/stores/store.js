'use strict';

/**
  * Documentation of third party
  * Docs for Vue: https://vuejs.org/
  * Docs for VueRouter: https://router.vuejs.org/en/
  *
*/

import Vue from 'vue';
import Vuex from 'vuex';

// Local
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

// Cart
import cart from './modules/cart/main';

// Alerts
import aletsFloat from './modules/alerts-float/main';

// Products filter
import productsFilter from './modules/products-filter/main';

/**
  * Vue Project Uses
  *
*/

Vue.use(Vuex);

/**
  * Vuex Exports
  *
*/

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    cart,
    aletsFloat,
    productsFilter
  }
});
