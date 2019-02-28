<template>
  <div id="app">
    <AppMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue'
export default {
  name: 'app',
  components: {
    AppMenu
  }
}
</script>

<style lang="sass">
  @font-face
    font-family: "Lato"
    src: url("~@/assets/fonts/Lato-Regular.ttf") format("truetype")

    #app
      font-family: 'Lato'
      -webkit-font-smoothing: antialiased
      -moz-osx-font-smoothing: grayscale
      text-align: center
      margin: auto
      background-color: $darkgrey
      color: $white

</style>
