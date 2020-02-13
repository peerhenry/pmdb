<template lang="pug">
div
  h1 {{ actor.name }}
  div
    h3 Roles
</template>

<script>
export default {
  props: {
    actor: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="stylus"></style>
