<template>
  <div>
    <cities-list :cities="cities" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import CitiesList from '../components/CitiesList'

export default {
  computed: {
    ...mapGetters({
      cities: 'cities',
    }),
  },
  mounted() {
    this.fetchCities()
  },
  methods: {
    ...mapActions({
      fetchCities: 'fetchCities',
    }),
  },
  components: {
    CitiesList,
  },
}
</script>

<style></style>
