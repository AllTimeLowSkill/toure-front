<template>
  <div class="cities-list">
    <city v-for="(city, idx) in cities" :key="idx" :city="city" />
  </div>
</template>

<script>
import City from './City.vue'
export default {
  components: { City },
  props: ['cities'],
}
</script>

<style scoped>
.cities-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
