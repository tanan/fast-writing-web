import Vue from 'vue'
import Vuex from 'vuex'
import * as card from '@/store/modules/card.js';
import * as auth from '@/store/modules/auth.js';
import * as http from '@/store/modules/http.js';
import * as notification from '@/store/modules/notification.js';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    card,
    auth,
    http,
    notification
  },
  state: {

  },
  plugins: [createPersistedState({
    key: 'fastwriting',
    paths: ['auth.token'],
    storage: window.sessionStorage
  })]
})
