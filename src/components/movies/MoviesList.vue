<template lang="pug">
PmdbTable(:items="movies" :attributes="['title', 'description', 'rating']")
</template>

<script>
import PmdbTable from '@/components/PmdbTable.vue'

export default {
  components: { PmdbTable },
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
