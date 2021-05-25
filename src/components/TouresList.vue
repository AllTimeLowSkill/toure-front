<template>
  <div class="card-list">
    <toure v-for="(toure, idx) in toures" :key="idx" :toure="toure" />
  </div>
</template>

<script>
import Toure from './Toure'

export default {
  props: ['toures'],
  components: {
    Toure,
  },
}
</script>

<style lang="scss" scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
</style>
