<template>
  <div class="albums-list">
    <Table :dataTable="albums"/>
  </div>
</template>

<script>
import Table from '../components/Table'

import { ALBUMS } from '../data/data.js'

export default {
  name: 'album',
  components: {
    Table
  },
  data() {
    return {
      albums: []
    }
  },

  mounted(){
    // simulated call with the API
    this.albums = ALBUMS
  }
}
</script>
