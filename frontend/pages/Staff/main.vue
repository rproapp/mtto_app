<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <section class="section is-main-section">
      <el-card style="width: 30%">
          <user-avatar class="image has-max-width is-aligned-center" />
          <hr />
          <b-field label="Name">
            <b-input :value="userName" custom-class="is-static" readonly />
          </b-field>
          <hr />
          <b-field label="E-mail">
            <b-input :value="userEmail" custom-class="is-static" readonly />
          </b-field>
        </el-card>
      <el-card style="margin-top: 5px; width: 60%">
        <b-tabs position="is-centered" class="block">
            <b-tab-item label="Ubicacion General">
              <div>
                  <ubicaciones-master-form />
              </div>
            </b-tab-item>
            <b-tab-item label="Organizacion">
              <div>
                <ubicaciones-master-table />
              </div>
            </b-tab-item>
            <b-tab-item label="Direccion">
              <div></div>
            </b-tab-item>
        </b-tabs>
      </el-card>
    </section>
  </div>
</template>

<script>
import TitleBar from '@/components/Widgets/TitleBar'
import UbicacionesMasterForm from '@/components/Forms/Ubicaciones/UbicacionesMasterForm.vue'
import UbicacionesMasterTable from '@/components/Tables/Ubicaciones/UbicacionesMasterTable.vue'
export default {
  name: 'Ubicaciones',
  components: {
    TitleBar,
    UbicacionesMasterForm,
    UbicacionesMasterTable
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
