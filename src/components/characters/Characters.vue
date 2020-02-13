<template lang="pug">
.characters
  ListPage(title="Characters" :listQuery="listCharacters" v-slot:default="{ data }")
    CharactersList(:characters="data.listCharacters.items")
</template>

<script>
import { listCharacters } from '@/graphql/queries'
import CharactersList from '@/components/characters/CharactersList.vue'
import ListPage from '@/components/ListPage.vue'

export default {
  components: { CharactersList, ListPage },
  computed: {
    listCharacters() {
      return this.$Amplify.graphqlOperation(listCharacters)
    },
  },
}
</script>
