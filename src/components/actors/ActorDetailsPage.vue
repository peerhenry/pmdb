<template lang="pug">
GraphqlConnection(:query="getActor" v-slot:default="{ data }")
  ActorDetails(:actor="data.getActor")
</template>

<script>
import ActorDetails from '@/components/actors/ActorDetails.vue'
import GraphqlConnection from '@/components/GraphqlConnection.vue'
import { getActor } from '@/graphql/queries.js'

export default {
  components: { ActorDetails, GraphqlConnection },
  props: { id: String },
  computed: {
    getActor() {
      return this.$Amplify.graphqlOperation(getActor, { id: this.id })
    },
  },
}
</script>
