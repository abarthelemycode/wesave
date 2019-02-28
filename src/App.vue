<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'


export default {
  name: 'app',
  components: {
    HelloWorld
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
</style>
