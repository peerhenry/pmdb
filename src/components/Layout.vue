<template lang="pug">
.layout
  Navbar
  .page
    router-view
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  components: { Navbar },
}
</script>

<style scoped lang="stylus">
.page
  clear both
</style>
