/* eslint multiline-comment-style: ["error", "starred-block"] */
<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <section class="section is-main-section">
      <el-card class="box-card" style="margin-top: 5px; width: 90%; margin-left: 5%;">
        <ticket-general />
      </el-card>
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/Widgets/TitleBar'
import TicketGeneral from '@/components/Forms/Ticket/TicketGeneral.vue'
export default {
  name: 'Activos',
  components: {
    TitleBar,
    TicketGeneral
  },
  head () {
    return {
      title: 'Tickets'
    }
  },
  computed: {
    titleStack () {
      return ['Admin', 'Soporte Tecnico - Ticket']
    }
  }
}
</script>
