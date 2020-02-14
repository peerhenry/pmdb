<template lang="pug">
.pmdb-input
  label(:for="name") {{ label }}
  input(:name="name")
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
  },
}
</script>

<style scoped lang="stylus">
.pmdb-input
  margin-bottom 10px

  label
    display block
    text-align left
    font-size 12px
    font-weight bold
</style>
