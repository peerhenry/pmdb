<template lang="pug">
PmdbTable(:items="characters" :attributes="['name', 'description']" @click-item="openCharacter")
</template>

<script>
import PmdbTable from '@/components/PmdbTable.vue'

export default {
  components: { PmdbTable },
  props: {
    characters: Array,
  },
  methods: {
    openCharacter(character) {
      this.$router.push(`/character/${character.id}`)
    },
  },
}
</script>
