import { getToures, getToure } from '../services/toures.service'

const mutations = {
  SET_TOURES(state, payload) {
    state.toures = payload
  },

  SET_TOURE(state, payload) {
    state.toure = payload
  },

  FILTER_TOURES(state, payload) {
    state.toures.filter((toure) => toure.title === payload)
  },
}
const actions = {
  async fetchToures({ commit }) {
    try {
      const items = await getToures()
      commit('SET_TOURES', items.data)
    } catch (error) {
      console.log(error)
    }
  },

  async fetchToure({ commit }, id) {
    try {
      const item = await getToure(id)
      commit('SET_TOURE', item.data)
    } catch (error) {
      console.log(error)
    }
  },
}
const getters = {
  toures: ({ toures }) => toures,
  toure: ({ toure }) => toure,
}
const state = () => ({
  toures: [],
  toure: {},
})

export default {
  mutations,
  actions,
  getters,
  state,
}
