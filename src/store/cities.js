import { getCities, getCity } from '../services/cities.service'

const mutations = {
  SET_CITIES(state, payload) {
    state.cities = payload
  },
  SET_CITY(state, payload) {
    state.city = payload
  },
}
const actions = {
  async fetchCities({ commit }) {
    try {
      const items = await getCities()
      commit('SET_CITIES', items.data)
    } catch (error) {
      console.log(error)
    }
  },

  async fetchCity({ commit }, id) {
    try {
      const item = await getCity(id)
      commit('SET_CITY', item.data)
    } catch (error) {
      console.log(error)
    }
  },
}
const getters = {
  cities: ({ cities }) => cities,
  city: ({ city }) => city,
}
const state = () => ({
  cities: [],
  city: {},
})

export default {
  mutations,
  actions,
  getters,
  state,
}
