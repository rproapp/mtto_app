<template>
  <div>
    <title-bar :title-stack="titleStack" />
  </div>
</template>

<script>
import TitleBar from '@/components/Widgets/TitleBar'
export default {
  name: 'Home',
  components: {
    TitleBar
  },
  data () {
    return {
    }
  },
  computed: {
    titleStack () {
      return ['Admin', 'Dashboard']
    }
  },
  head () {
    return {
      title: 'Dashboard — Admin One Nuxt.js'
    }
  }
}
</script>
