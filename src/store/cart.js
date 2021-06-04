import { getPaymentIntent } from '../services/payment.service'

const mutations = {
  SET_CART(state, payload) {
    state.cart.push(payload)
  },
  DELETE_ITEM({ cart }, id) {
    cart.splice(id, 1)
  },
  DELETE_ALL(state) {
    state.cart = []
  },
}
const actions = {
  async handleBuy({ getters }) {
    try {
      const intent = await getPaymentIntent({ amount: getters.total })
      return intent.data
    } catch (error) {
      console.log(error)
    }
  },
}
const getters = {
  cart: ({ cart }) => cart,
  cartCount: ({ cart }) => cart.length,
  total: ({ cart }) => {
    let sum = 0
    cart.forEach((item) => {
      sum += item.price
    })
    return sum
  },
}
const state = () => ({
  cart: [],
})

export default {
  mutations,
  actions,
  getters,
  state,
}
