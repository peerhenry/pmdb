<template lang="pug">
.movies
  h1 Movies
  amplify-connect(:query="listMovies")
    template(slot-scope="{loading, data, errors}")
      div(v-if="loading") Loading...
      div(v-else-if="errors.length > 0") Something went wrong
      div(v-else-if="data")
        MoviesList(:movies="data.listMovies.items")
</template>

<script>
import { listMovies } from '@/graphql/queries'
import MoviesList from '@/components/MoviesList'

export default {
  components: { MoviesList },
  computed: {
    listMovies() {
      return this.$Amplify.graphqlOperation(listMovies)
    },
  },
  methods: {
    openMovie(movie) {
      console.log('open movie', movie.id)
    },
  },
}
</script>

<style scoped lang="stylus"></style>
