
<template>
  <div class="playlist-list">
    <Table :dataTable="playlists"/>
  </div>
</template>

<script>
import Table from '../components/Table'

import { PLAYLISTS } from '../data/data.js'

export default {
  name: 'playlists',
  components: {
    Table
  },
  data() {
    return {
      playlists: []
    }
  },

  mounted(){
    // simulated call with the API
    this.playlists = PLAYLISTS
  }
}
</script>
