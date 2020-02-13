<template lang="pug">
div
  h1 {{ character.name }}
  p {{ character.description }}
  div
    h3 Movies
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="stylus"></style>
