<template>
  <div class="home">
    <template v-if="toures.length === 0">
      <div class="d-flex justify-content-center">
        <div class="spinner-grow text-primary" role="status"></div>
      </div>
    </template>
    <template v-else>
      <Navbar />
      <div class="d-flex">
        <input
          v-model="filterVal"
          class="form-control me-2"
          type="search"
          placeholder="Поиск тура"
          aria-label="Search"
        />
      </div>
      <toures-list :toures="searchHandel" />
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

import TouresList from '../components/TouresList'
import Navbar from '../components/Navbar'

export default {
  name: 'Home',
  data() {
    return {
      filterVal: '',
    }
  },
  computed: {
    ...mapGetters({
      toures: 'toures',
    }),

    searchHandel() {
      return this.toures.filter(
        (toure) =>
          toure.title.toLowerCase().includes(this.filterVal.toLowerCase()) ||
          toure.city.toLowerCase().includes(this.filterVal.toLowerCase()) ||
          String(toure.price)
            .toLowerCase()
            .includes(this.filterVal.toLowerCase()) ||
          toure.hotel.toLowerCase().includes(this.filterVal.toLowerCase()) ||
          toure.start.toLowerCase().includes(this.filterVal.toLowerCase()) ||
          toure.end.toLowerCase().includes(this.filterVal.toLowerCase())
      )
    },
  },
  mounted() {
    this.fetchToures()
  },
  methods: {
    ...mapActions({
      fetchToures: 'fetchToures',
    }),

    ...mapMutations({
      filter_toures: 'FILTER_TOURES',
    }),
  },
  components: {
    TouresList,
    Navbar,
  },
}
</script>
