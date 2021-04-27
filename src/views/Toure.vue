<template>
  <div>
    <div class="img-container">
      <img :src="toure.toure" class="img-fluid" alt="..." />
    </div>
    <table class="table">
      <tbody>
        <tr>
          <th>Название тура</th>
          <td>{{ toure.title }}</td>
        </tr>
        <tr>
          <th scope="row">Отель</th>
          <td>{{ toure.hotel }}</td>
        </tr>
        <tr>
          <th>Город</th>
          <td>{{ toure.city }}</td>
        </tr>
        <tr>
          <th scope="row">Начало тура</th>
          <td>{{ toure.start }}</td>
        </tr>
        <tr>
          <th>Конец тура</th>
          <td>{{ toure.end }}</td>
        </tr>
        <tr>
          <th>Цена</th>
          <td>{{ toure.price }} руб</td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-between">
      <button class="btn btn-success" @click="set_cart(toure)">
        Добавить в карзину
      </button>
      <router-link class="btn btn-outline-info" to="/"
        >Просмотреть все туры</router-link
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      toure: 'toure',
    }),
  },
  mounted() {
    this.fetchToure(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      fetchToure: 'fetchToure',
    }),

    ...mapMutations({
      set_cart: 'SET_CART',
    }),
  },
}
</script>

<style lang="scss" scoped>
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
</style>
