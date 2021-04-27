<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import defaultLayout from './layouts/defaultLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'default') + '-layout'
    },
  },

  components: {
    defaultLayout,
  },
}
</script>
