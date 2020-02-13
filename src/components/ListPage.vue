<template lang="pug">
.list-page
  h1 {{ title }}
  GraphqlConnection(:query="listQuery" v-slot:default="{ data }")
    slot(:data="data")
</template>

<script>
import GraphqlConnection from '@/components/GraphqlConnection'

export default {
  components: { GraphqlConnection },
  props: {
    title: String,
    listQuery: Object,
  },
}
</script>

<style scoped lang="stylus"></style>
