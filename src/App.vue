<template>
  <div id="app">
    <AppHeader />
    <AppMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppMenu from './components/AppMenu.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
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
    background: $darkgrey
    color: $white

</style>
