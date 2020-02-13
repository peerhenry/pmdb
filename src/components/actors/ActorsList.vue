<template lang="pug">
PmdbTable(:items="actors" :attributes="['name', 'gender']")
</template>

<script>
import PmdbTable from '@/components/PmdbTable.vue'

export default {
  components: { PmdbTable },
  props: {
    actors: Array,
  },
  methods: {
    openMovie(movie) {
      console.log('open movie', movie.id)
    },
  },
}
</script>
