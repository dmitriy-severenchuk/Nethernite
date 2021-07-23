import Vue from 'vue'
import Vuex from 'vuex'
import jsDelivr from './modules/jsDelivr'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    jsDelivr,
  },
})
