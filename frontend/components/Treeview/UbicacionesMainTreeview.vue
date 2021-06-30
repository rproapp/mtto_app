<template>
  <client-only>
    <v-jstree
      :data="data"
      :item-events="itemEvents"
      show-checkbox
      multiple
      allow-batch
      whole-row
      draggable
      tree-disabled
      ref="tree"></v-jstree>
    </client-only>
</template>

<script>
import { getData } from '@/api/LocacionAPI'
/* eslint-disable */
import VJstree from 'vue-jstree'
export default {
  name: 'TreeItem',
  components: {
    VJstree
  },
  data() {
    return {
      itemEvents: {
        mouseover: function () {
          console.log('mouseover')
        },
        contextmenu: function () {
          console.log(arguments[2])
          arguments[2].preventDefault()
          console.log('contextmenu')
        },
      },
      data: [
        {
          text: 'CMP',
          icon: 'icon-hide',
          opened: true,
          data: []
        }
      ],
      methods: {
        itemClick (node) {
          console.log(node.model.text + ' clicked !')
        },
        created () {
          this.fetchData ()
        },
        async fetchData () {
          this.listLoading = true
          await getData (this.listQuery).then(res => {
          this.posts = res.data
          this.listLoading = false
          })
        }
      }
    }
  }
}
/* eslint-disable */
</script>