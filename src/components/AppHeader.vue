<template>
  <header>
    <div class="back-img"></div>
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
    position: relative
    margin: 0
    text-align: center
    .back-img
      width: 100%
      height: 12em
      opacity: 0.5
      background-image: url('~@/assets/img/header.jpeg')
      background-position: center center
      background-repeat: no-repeat
      background-size: cover
    h1
      position: absolute
      top: 0px
      left: 0px
      width: 100%
      line-height: 3em
      font-size: 3em
</style>
