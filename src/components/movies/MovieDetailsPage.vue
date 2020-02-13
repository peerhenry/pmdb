<template lang="pug">
GraphqlConnection(:query="getMovie" v-slot:default="{ data }")
  MovieDetails(:movie="data.getMovie")
</template>

<script>
import MovieDetails from '@/components/movies/MovieDetails.vue'
import GraphqlConnection from '@/components/GraphqlConnection.vue'
import { getMovie } from '@/graphql/queries.js'

export default {
  components: { MovieDetails, GraphqlConnection },
  props: { id: String },
  computed: {
    getMovie() {
      return this.$Amplify.graphqlOperation(getMovie, { id: this.id })
    },
  },
}
</script>
