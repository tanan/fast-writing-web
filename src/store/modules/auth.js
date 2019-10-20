import jwtDecode from 'vue-jwt-decode'
import LessonService from '../../services/LessonService'

export const namespaced = true

export const state = {
  userId: '',
  token: ''
}

export const getters = {
  loggedIn (state) {
    console.log('getters: ' + state.userId)
    return Boolean(state.userId.trim())
  },
  getToken (state) {
    return state.token
  }
}

export const mutations = {
  CREATE_USER (state, data) {
    state.token = data
    console.log(state.token)
    var token = jwtDecode.decode(data)
    state.userId = token.sub
  },
  REMOVE_USER (state) {
    state.userId = ''
  }
}

export const actions = {
  login ({ commit, dispatch }, data) {
    dispatch(
      'http/post',
      { url: '/login', data },
      { root: true }
    ).then(res => commit('CREATE_USER', res['access-token']))
      .catch(err => err)
    // LessonService.login(data)
    //   .then((r) => {
    //     commit('CREATE_USER', r['access-token'])
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  },
  logout ({ commit }, data) {
    LessonService.logout(data)
      .then(() => {
        commit('CREATE_USER', '')
      })
      .catch(error => {
        console.log(error)
        // const notification = {
        //   type: 'error',
        //   message: 'There was a problem authentication:' + error.message
        // }
        // this.$store.dispatch('notification/add', notification, {root: true})
      })
      // logout anyway ...
      .finally(commit('REMOVE_USER', ''))
  }
}
