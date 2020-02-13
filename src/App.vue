<template lang="pug">
#app
  Layout
</template>

<script>
import Layout from '@/components/Layout'

export default {
  components: { Layout },
}
</script>

<style lang="stylus">
html, body, #app
  margin 0
  padding 0
  height 100%

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
</style>
