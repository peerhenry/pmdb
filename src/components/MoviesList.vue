<template lang="pug">
table.movies-table
  tbody
    tr.movies-table-header
      th Title
      th Description
      th Rating
    tr.movie-row(v-for="movie in movies" :key="movie.id" @click="openMovie(movie)")
      td {{ movie.title }}
      td {{ movie.description }}
      td {{ movie.rating }}
</template>

<script>
export default {
  props: {
    movies: Array,
  },
  methods: {
    openMovie(movie) {
      console.log('open movie', movie.id)
    },
  },
}
</script>

<style scoped lang="stylus">
.movies-table
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

tr.movie-row
  cursor pointer

  &:nth-child(even)
    background-color #f2f2f2

  &:hover
    background-color #ddd
</style>
