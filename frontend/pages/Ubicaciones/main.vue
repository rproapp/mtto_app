<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <section class="section is-main-section">
      <div class="columns">
        <div class="column" style="margin-top: 5px; width: 400px;" >
          <div class="division-title">Ubicacion de Activos</div>
            <ubicaciones-main-treeview />
          </div>
        <div class="column is-four-fifths">
          <el-card class="box-card" style="margin-top: 5px;">
            <b-tabs position="is-centered" class="block">
              <b-tab-item label="Informacion General">
                <div>
                  <ubicaciones-main-form />
                    <div class="division-title">Informacion de Manufactura</div>
                      <ubicaciones-manufactura-form />
                    </div>
              </b-tab-item>
              <b-tab-item label="Activos">
                <div>
                    <br>
                      <ubicaciones-nre-table />
                    <br>
                </div>
              </b-tab-item>
              <b-tab-item label="Reportes">
                <div></div>
              </b-tab-item>
            </b-tabs>
          </el-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/Widgets/TitleBar'
import UbicacionesMainForm from '@/components/Forms/Ubicaciones/UbicacionesMainForm.vue'
import UbicacionesMainTreeview from '@/components/Treeview/UbicacionesMainTreeview.vue'
import UbicacionesManufacturaForm from '@/components/Forms/Ubicaciones/UbicacionesManufacturaForm.vue'
import UbicacionesNreTable from '../../components/Tables/Ubicaciones/UbicacionesNreTable.vue'
export default {
  name: 'Ubicaciones',
  components: {
    TitleBar,
    UbicacionesMainForm,
    UbicacionesMainTreeview,
    UbicacionesManufacturaForm,
    UbicacionesNreTable
  },
  head () {
    return {
      title: 'Forms — Admin Null Nuxt.js Bulma'
    }
  },
  computed: {
    titleStack () {
      return ['Admin', 'Ubicaciones']
    }
  }
}
</script>

<style scoped>
.division-title { background-color: #dbdbdb; padding: 5px 5px 5px 15px; font-size: 16px; font-weight: 700; border-radius: 2px;}
</style>
