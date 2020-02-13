<template lang="pug">
PmdbTable(:items="actors" :attributes="['name', 'gender']" @click-item="openActor")
</template>

<script>
import PmdbTable from '@/components/PmdbTable.vue'

export default {
  components: { PmdbTable },
  props: {
    actors: Array,
  },
  methods: {
    openActor(item) {
      this.$router.push(`/actor/${item.id}`)
    },
  },
}
</script>
