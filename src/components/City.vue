<template>
  <div class="card m-3">
    <img :src="city.cityImg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ city.title }}</h5>
      <p>{{ city.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['city'],
}
</script>

<style></style>
