<template lang="pug">
h1 Welcome honorable guest
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['signedIn']),
}
</script>
