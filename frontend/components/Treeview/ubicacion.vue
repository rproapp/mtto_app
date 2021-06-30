<template>
  <vue-jstree
    :data="data"
    show-checkbox
    multiple
    allow-batch
    whole-row
    @item-click="itemClick"
  />
</template>
<script>
/* eslint-disable */

export default {
 name: 'VJstree',
  data() {
    return {
      data: [
          {
            "text": "Same but with checkboxes",
          },
      ],
      methods: {
        itemClick (node) {
          console.log(node.model.text + ' clicked !')
        }
      },
     
      mounted() {
        this.handleGroupMaxHeight()
      }
    }
  }
}
/* eslint-disable */
</script>
