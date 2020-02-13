<template lang="pug">
PmdbTable(:items="characters" :attributes="['name', 'description']")
</template>

<script>
import PmdbTable from '@/components/PmdbTable.vue'

export default {
  components: { PmdbTable },
  props: {
    characters: Array,
  },
  methods: {
    openMovie(movie) {
      console.log('open movie', movie.id)
    },
  },
}
</script>
