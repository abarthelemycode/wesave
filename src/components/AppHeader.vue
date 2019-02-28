<template>
  <header>
    <h1>{{ $route.meta.title }}</h1>
  </header>
</template>
<script>
export default {
  name: 'app-header'
}
</script>

<style lang="sass" scoped>
  header
    display: inline-block
    margin: 0
    width: 100%
    height: 15em
    text-align: center
    box-shadow: 0 0 0 200px rgba(38,38,38,0.5) inset
    background-image: url('~@/assets/img/header.jpeg')
    background-position: center center
    background-repeat: no-repeat
    background-size: cover
    h1
      line-height: 3em
      font-size: 3em
</style>
