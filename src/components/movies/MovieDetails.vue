<template lang="pug">
div
  .movie-details
    h1 {{ movie.title }}
    p {{ movie.description }}
    div
      h3 Cast
      PmdbButton(@click="addActor") Add actor
    div
      h3 Crew
    div
      span raw object: {{ movie }}
  transition(name="fade")
    .actor-modal-wrapper(v-show="showModal")
      .actor-modal
        h3 Add Actor
        PmdbInput(name="actor" label="Select actor")
        PmdbInput(name="character" label="Select character")
        PmdbButton(@click="closeModal") close
</template>

<script>
import PmdbInput from '@/components/PmdbInput.vue'
import PmdbButton from '@/components/PmdbButton.vue'

export default {
  components: { PmdbInput, PmdbButton },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    addActor() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
  },
}
</script>

<style scoped lang="stylus">
.actor-modal-wrapper
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background rgba(0.5, 0.5, 0.5, 0.5)
  z-index 1
  display flex
  justify-content center
  align-items center

.actor-modal
  background white
  display inline-grid
  padding 20px 30px
  margin auto
  border 1px solid grey
  border-radius 5px
  box-shadow 1px 0 3px rgba(0, 0, 0, 0.5)

h3
  margin 0

.fade-enter, .fade-leave-to
  opacity 0

.fade-enter-active, .fade-leave-active
  transition opacity 0.2s ease
</style>
