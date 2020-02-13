<template lang="pug">
PmdbTable(:items="movies" :attributes="['title', 'description', 'rating']"  @click-item="openMovie")
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
      this.$router.push(`/movie/${movie.id}`)
    },
  },
}
</script>
