<template lang="pug">
div
  h1 PMDb
  h3 Peer's Movie Database
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['signedIn']),
}
</script>
