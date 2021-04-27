<template>
  <nav class="d-flex justify-content-around mb-2 mt-2">
    <div class="d-flex">
      <a class="mr-2" target="_bank" href="https://www.instagram.com/">
        <img src="../assets/inst.png" alt="" />
      </a>
      <a class="mr-2" target="_bank" href="https://www.instagram.com/">
        <img src="../assets/vk.png" alt="" />
      </a>
      <a target="_bank" href="https://www.instagram.com/">
        <img src="../assets/tiktok.png" alt="" />
      </a>
    </div>
    <ul class="list-inline">
      <li v-for="(link, idx) in links" :key="idx" class="list-inline-item">
        <router-link
          class="btn btn-outline-primary"
          :to="{ path: `${link.to}` }"
          >{{ link.title }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      links: 'links',
    }),
  },
}
</script>

<style></style>
