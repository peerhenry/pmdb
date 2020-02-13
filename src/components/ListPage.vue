<template lang="pug">
.list-page
  h1 {{ title }}
  amplify-connect(:query="listQuery")
    template(slot-scope="{loading, data, errors}")
      div(v-if="loading") Loading...
      div(v-else-if="errors.length > 0") Something went wrong
      div(v-else-if="data")
        slot(:data="data")
</template>

<script>
export default {
  props: {
    title: String,
    listQuery: Object,
  },
}
</script>

<style scoped lang="stylus"></style>
