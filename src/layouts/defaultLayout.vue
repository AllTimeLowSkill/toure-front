<template>
  <div class="layout-container">
    <div class="start-img d-flex justify-content-center align-items-center">
      <span class="start-greeting">
        Отправся в свое лучшее путешествие в месте с нами!
      </span>
    </div>
    <header class="col-12">
      <router-link class="logo" to="/">Logo</router-link>
      <router-link class="logo" to="/cart">
        <img src="../assets/cart.png" alt="" />
        {{ cartCount }}</router-link
      >
    </header>
    <main class="col-12">
      <router-view />
    </main>
    <footer class="col-12">
      <span>rusik10032000@mail.ru</span>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      cartCount: 'cartCount',
    }),
  },
}
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(0, 0, 0, 0);

  main {
    min-height: 100vh;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  .start-img {
    background-image: url('../assets/startImg.gif');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    color: white;
    height: 100vh;
    width: 100%;

    .start-greeting {
      display: inline-block;
      font-family: 'Open sans', sans-serif;
      font-weight: 800;
      color: white;
      font-size: 10rem;
      padding: 0 2rem;
      text-shadow: 1px 5px 15px rgb(72, 132, 230);
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    margin-bottom: 2rem;

    box-shadow: 0 0 15px 0 rgba(69, 111, 236, 0.822);

    background-color: rgba(36, 86, 238, 0.856);

    .logo {
      color: white;
      font-size: 18px;
      font-weight: 600;
    }

    .logo:hover {
      text-decoration: none;
    }
  }

  footer {
    display: flex;
    justify-content: center;
    color: white;
    align-items: center;
    padding: 1rem 2rem;

    box-shadow: 0 0 15px 0 rgba(69, 111, 236, 0.822);

    background-color: rgba(36, 86, 238, 0.856);
  }
}
</style>
