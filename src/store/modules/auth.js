import jwtDecode from 'vue-jwt-decode'
import router from '@/router.js'
import Axios from 'axios'

export const namespaced = true

export const state = {
  userId: ''
}

export const getters = {
  loggedIn (state) {
    return Boolean(state.userId)
  },
  getUserId (state) {
    return state.userId
  }
}

export const mutations = {
  CREATE_USER (state, data) {
    localStorage.setItem('user', JSON.stringify(data))
    var token = jwtDecode.decode(data)
    state.userId = token.sub
  },
  REMOVE_USER (state) {
    state.userId = ''
    localStorage.removeItem('user')
    Axios.defaults.headers.common['Authorization'] = null
    location.reload()
  }
}

export const actions = {
  login ({ commit, dispatch }, data) {
    dispatch(
      'http/post',
      { url: '/login', data },
      { root: true }
    ).then(res =>  {
      commit('CREATE_USER', res['access-token'])
      router.push('/')
    })
      .catch(err => err)
  },
  register ({ dispatch }, data) {
    dispatch(
      'http/post',
      { url: '/users/register', data },
      { root: true }
    ).then(() => {
      router.push('/login')
    })
    .catch(error => {
      console.log(error)
    })
  },
  logout ({ commit }) {
    commit('REMOVE_USER')
  }
}
