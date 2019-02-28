<template>
  <div class="container">
    <table v-if="dataDisplayed.length">
      <thead>
        <tr class="title">
          <th class="icon"></th>
          <th class="name" v-if="containsKey('name')" v-on:click="sortTable('name')">Titre</th>
          <th class="size" v-if="containsKey('size')" v-on:click="sortTable('size')">Taille</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-cell" v-for="item in dataDisplayed" :key="item.name">
          <td class="icon">
            <img v-if="item.size === 0" src="~@/assets/img/icon-empty.svg" />
            <div v-else >&nbsp;</div>
          </td>
          <td class="name" v-if="containsKey('name')">{{ item.name }}</td>
          <td class="size" v-if="containsKey('size')">{{ item.size }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: 'Table',
  props: {
    dataTable: {
      type:Array,
      default: []
    },
  },
  data() {
    return {
      dataDisplayed: {
        type:Array,
        default: []
      },
    }
  },

  mounted() {
    this.dataDisplayed = this.dataTable;
  },
  updated(){
    this.dataDisplayed = this.dataTable;
  },

  methods: {
    containsKey(key) {
      return Object.keys(this.dataTable[0]).includes(key);
    },
    sortTable(key) {
      this.dataDisplayed = this.dataTable.sort((a, b) => {
        let aKey = a[key], bKey = b[key]
        if (aKey < bKey)
            return -1
        if (aKey > bKey)
            return 1
        return 0
      })
    }
  }
}
</script>

<style lang="sass">
  .container
    padding-bottom: 3em

  table
    width: 100%
    border-collapse: collapse

  td, th, tr
    margin: 0
    height: 3em

  .title
    cursor: pointer
    background-color: $darkYellow

  .name
    text-align: left
    padding-left: 1em

  .size
    text-align: right
    padding-right: 3em

  .icon
    line-height: 0em
    width: 3em
    padding-left: 2em

  .table-cell:nth-child(2n -1)
    background-color: $lightgrey

</style>
