<template lang="pug">
.movies
  ListPage(title="Actors" :listQuery="listActors" v-slot:default="{ data }")
    ActorsList(:actors="data.listActors.items")
</template>

<script>
import { listActors } from '@/graphql/queries'
import ActorsList from '@/components/actors/ActorsList.vue'
import ListPage from '@/components/ListPage.vue'

export default {
  components: { ActorsList, ListPage },
  computed: {
    listActors() {
      return this.$Amplify.graphqlOperation(listActors)
    },
  },
}
</script>

<style scoped lang="stylus"></style>
