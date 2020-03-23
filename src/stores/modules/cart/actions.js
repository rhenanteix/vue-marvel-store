'use strict';

export default {

  addTocart(context, payload) {
    context.commit('ADD_TO_CART', payload);
  },

  updateCartQtd(context, payload) {
    context.commit('UPDATE_CART_QTD', payload);
  },

  updateCartSubtotal(context, payload) {
    context.commit('UPDATE_CART_SUBTOTAL', payload);
  },

  deleteProduct(context, payload) {
    context.commit('DELETE_PRODUCT', payload);
  },

  updateProductQuantity(context, payload) {
    context.commit('UPDATE_PRODUCT_QUANTITY', payload);
  },

  setStatusCart(context, payload) {
    context.commit('SET_STATUS', payload);
  }
}
