<template lang="pug">
div
  h1 {{ movie.title }}
  p {{ movie.description }}
  div
    h3 Cast
  div
    h3 Crew
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="stylus"></style>
