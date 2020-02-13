<template lang="pug">
.movies
  ListPage(title="Movies" :listQuery="listMovies" v-slot:default="{ data }")
    MoviesList(:movies="data.listMovies.items")
</template>

<script>
import { listMovies } from '@/graphql/queries'
import MoviesList from '@/components/movies/MoviesList.vue'
import ListPage from '@/components/ListPage.vue'

export default {
  components: { MoviesList, ListPage },
  computed: {
    listMovies() {
      return this.$Amplify.graphqlOperation(listMovies)
    },
  },
}
</script>
