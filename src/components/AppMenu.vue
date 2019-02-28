<template>
  <nav class="menu">
    <ul>
      <li class="menu-button"><router-link exact-active-class="active" to="/albums">Mes albums</router-link></li>
      <li class="menu-button"><router-link exact-active-class="active" to="/playlists">Mes playlists</router-link></li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'app-menu',
}
</script>

<style lang="sass" scoped>
  ul
    display: block
    padding: 0
    margin: 0.5em

  .menu-button
    display: inline-block
    font-weight: bold
    text-transform: uppercase
    width: 25em
    height: 4em
    margin: 0.5em
    line-height: 4em
    background-color: $black
    a
      color: $white
      text-decoration: none

    .active
      color: $yellow



</style>
