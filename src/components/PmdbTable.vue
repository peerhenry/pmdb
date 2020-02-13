<template lang="pug">
table.pmdb-table
  tbody
    tr.pmdb-table-header
      th(v-for="attribute in attributes") {{ attribute }}
    tr.pmdb-row(v-for="item in items" :key="item.id" @click="$emit('click-item', item)")
      td(v-for="attribute in attributes") {{ item[attribute] }}
</template>

<script>
export default {
  props: {
    items: {
      type: Array, // of objects
      required: true,
    },
    attributes: {
      type: Array, // of strings
      required: true,
    },
  },
}
</script>

<style scoped lang="stylus">
.pmdb-table
  margin auto
  border-spacing 0
  border-collapse collapse

th
  text-align left
  background-color #4CAF50
  color white

th, td
  padding 8px 12px
  border 1px solid #ddd

tr.pmdb-row
  cursor pointer

  &:nth-child(even)
    background-color #f2f2f2

  &:hover
    background-color #ddd
</style>
