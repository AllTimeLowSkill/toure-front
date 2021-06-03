<template>
  <div class="card m-3 card-wrapper">
    <img :src="toure.toure" class="card-img-top" alt="..." />
    <div class="card-body">
      <span class="card-title card-title-text">{{ toure.title }}</span>
      <p class="card-description">{{ toure.description }}</p>
      <div class="d-flex justify-content-between align-items-center btns">
        <button @click="addToCart(toure)" class="btn btn-primary">
          Добавить в корзину
        </button>
        <router-link class="btn" :to="{ path: `toure/${toure._id}` }"
          >Подробнее</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['toure'],
  methods: {
    ...mapMutations({
      addToCart: 'SET_CART',
    }),
  },
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  transition: 0.3s;
}
.card-wrapper:hover {
  box-shadow: 0 0 10px;
  transition: 0.3s;
}
.btns {
  width: 100%;
  padding: 0 1rem;
}

.card-title-text {
  font-family: 'Open sans' sans-serif;
  font-weight: 700;
  font-size: 24px;
}

.card-description {
  font-family: 'Amatic SC', cursive;
  font-weight: 700;
  font-size: 24px;
  padding: 1rem 1rem;
}
</style>
