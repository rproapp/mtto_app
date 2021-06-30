/* eslint multiline-comment-style: ["error", "starred-block"] */
<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <section class="section is-main-section">
      <el-card class="box-card" style="margin-top: 5px; width: 90%; margin-left: 5%;">
        <b-tabs position="is-centered" class="block">
            <b-tab-item label="General">
              <div>
                <activos-general />
              </div>
            </b-tab-item>
            <b-tab-item label="Registros">
              <div>
                <activos-main-table />
              </div>
            </b-tab-item>
            <b-tab-item label="Ubicacion">
              <div>
                <activos-locacion />
              </div>
            </b-tab-item>
        </b-tabs>
      </el-card>
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/Widgets/TitleBar'
import ActivosGeneral from '@/components/Forms/Activos/ActivosGeneral'
import ActivosLocacion from '@/components/Forms/Activos/ActivosLocacion.vue'
import ActivosMainTable from '@/components/Tables/Activos/ActivosMainTable.vue'
export default {
  name: 'Activos',
  components: {
    TitleBar,
    ActivosGeneral,
    ActivosLocacion,
    ActivosMainTable
  },
  head () {
    return {
      title: 'Forms — Admin Null Nuxt.js Bulma'
    }
  },
  computed: {
    titleStack () {
      return ['Admin', 'Activos']
    }
  }
}
</script>
