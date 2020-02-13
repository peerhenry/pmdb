<template lang="pug">
.navbar
  .nav-list
    router-link(to="/") Home
    router-link(to="/movies") Movies
    router-link(to="/actors") Actors
    router-link(to="/characters") Characters
    router-link(to="/login") Login/logout
</template>

<script>
export default {}
</script>

<style scoped lang="stylus">
.nav-list
  list-style-type none
  margin 0
  padding 0
  background-color #333
  overflow hidden

  a
    float left
    box-sizing border-box
    text-decoration none
    font-size 17px
    padding 14px 16px
    color #ddd

    &:hover
      color black
      background-color #ddd

    &.router-link-exact-active
      background-color #4CAF50
      color white
</style>
