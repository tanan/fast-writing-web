// import _ from 'lodash'
export const namespaced = true

export const state = {
  card: {},
}

export const mutations = {
  SET_CARD(state, card) {
    state.card = card
  }
}

export const actions = {
  setCard({ commit }, card) {
    console.log(card)
    commit('SET_CARD', card)
  }
}