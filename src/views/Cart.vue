<template>
  <div>
    <template v-if="cart.length === 0">
      <div class="d-flex justify-content-center">
        <h3>Добавтье наши услуги в карзину, для оплаты</h3>
      </div>
    </template>
    <template v-else>
      <ul class="list-group">
        <li
          class="list-group-item d-flex justify-content-between"
          v-for="(item, idx) in cart"
          :key="idx"
        >
          <h3>{{ item.title }}</h3>
          <button class="btn btn-danger" @click="delete_item(idx)">
            &times;
          </button>
        </li>
      </ul>
      <div class="d-flex justify-content-between mt-2 mb-4">
        <span>Итог: {{ total }} руб</span>
        <button @click="isPay = !isPay" class="btn btn-success">
          Оплатить
        </button>
      </div>
      <template v-if="isPay">
        <card
          class="stripe-card"
          :class="{ complete }"
          stripe="pk_test_51IhzEnEFrIhe0ZsKnppo23ukWXqRs6gQfdMkChHxWomxfVYGO4eFFl24O652crXutjKAKYIWtq8VkWVmTJ133Var00VNJ6cNB5"
          :options="stripeOptions"
          @change="complete = $event.complete"
        />
        <button
          class="btn btn-outline-success mt-2"
          @click="handlegetpaymentIntent()"
        >
          Оплатить
        </button>
        <template v-if="isError">
          <h3>Ууууупсб что то пошло не так^^</h3>
        </template>
      </template>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

import { Card, handleCardPayment } from 'vue-stripe-elements-plus'

export default {
  data() {
    return {
      isPay: false,
      complete: false,
      isError: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
      paymentIntent: null,
    }
  },
  components: {
    Card,
  },
  computed: {
    ...mapGetters({
      cart: 'cart',
      total: 'total',
    }),
  },
  methods: {
    ...mapMutations({
      delete_item: 'DELETE_ITEM',
      deleteAll: 'DELETE_ALL',
    }),

    ...mapActions({
      handleBuy: 'handleBuy',
    }),

    async handlegetpaymentIntent() {
      try {
        const intent = await this.handleBuy()
        this.paymentIntent = intent.client_secret
        await handleCardPayment(this.paymentIntent)
        this.deleteAll()
        this.$router.push('/')
      } catch (error) {
        this.isError = true
      }
    },
  },
}
</script>

<style></style>
