// import _ from 'lodash'
export const namespaced = true

export const state = {
  card: {},
  updateContentList: false
}

export const mutations = {
  SET_CARD(state, card) {
    state.card = card
  },
  SET_UPDATE_CONTENT_LIST(state, update) {
    state.updateContentList = update
  }
}

export const actions = {
  setCard({ commit }, card) {
    console.log(card)
    commit('SET_CARD', card)
  },
  refleshEditContent({ commit }) {
    commit('SET_UPDATE_CONTENT_LIST', true)
  },
  finishEditContent({ commit }) {
    commit('SET_UPDATE_CONTENT_LIST', false)
  }
}

export const getters = {
  reflesh(state) {
    return state.updateContentList
  }
}