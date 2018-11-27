import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import products from './modules/products'
import cart from './modules/cart'
import citypick from './modules/citypick'
export default new Vuex.Store({
  modules: {
    products,
    cart,
    citypick
  }
})
