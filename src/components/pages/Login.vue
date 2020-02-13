<template lang="pug">
amplify-authenticator(v-if="!signedIn")
div(v-else)
  h1 You are signed in
  amplify-sign-out
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['signedIn']),
}
</script>

<style scoped lang="stylus"></style>
