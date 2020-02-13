<template lang="pug">
GraphqlConnection(:query="getCharacter" v-slot:default="{ data }")
  CharacterDetails(:character="data.getCharacter")
</template>

<script>
import CharacterDetails from '@/components/characters/CharacterDetails.vue'
import GraphqlConnection from '@/components/GraphqlConnection.vue'
import { getCharacter } from '@/graphql/queries.js'

export default {
  components: { CharacterDetails, GraphqlConnection },
  props: { id: String },
  computed: {
    getCharacter() {
      return this.$Amplify.graphqlOperation(getCharacter, { id: this.id })
    },
  },
}
</script>
