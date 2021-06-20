const mutations = {
  ADD_COMMENTS(state, payload) {
    state.comments.push(payload)
  },
}
const getters = {
  comments: ({ comments }) => comments,
}
const state = () => ({
  comments: [],
})

export default {
  mutations,
  getters,
  state,
}
