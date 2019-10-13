import Vue from 'vue'
import Vuex from 'vuex'
import * as card from '@/store/modules/card.js';
import * as notification from '@/store/modules/notification.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    card,
    notification
  },
  state: {

  }
})
