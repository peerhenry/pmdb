<template lang="pug" functional>
button(v-bind="data.attrs" v-on="listeners")
  slot
</template>

<style scoped lang="stylus"></style>
