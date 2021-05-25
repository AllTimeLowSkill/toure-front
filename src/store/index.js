import Vue from 'vue'
import Vuex from 'vuex'

import toures from './toures'
import cart from './cart'
import setion from './section'
import cities from './cities'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    toures,
    cart,
    setion,
    cities,
  },
})
