<template lang="pug">
amplify-connect(:query="query")
  template(slot-scope="{ loading, data, errors }")
    div(v-if="loading") Loading...
    div(v-else-if="errors.length > 0") Something went wrong
    div(v-else-if="data")
      slot(:data="data")
</template>

<script>
export default {
  props: {
    query: Object,
  },
}
</script>
