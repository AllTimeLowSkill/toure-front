<template>
  <div class="card m-3">
    <img :src="toure.toure" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ toure.title }}</h5>
      <p>{{ toure.description }}</p>
      <router-link class="btn btn-primary" :to="{ path: `toure/${toure._id}` }"
        >Подробнее</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['toure'],
}
</script>

<style></style>
