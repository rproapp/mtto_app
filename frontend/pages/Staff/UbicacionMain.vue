<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <section class="section is-main-section">
      <el-card class="box-card" style="margin-top: 5px; width: 90%; margin-left: 5%;">
        <b-tabs position="is-centered" class="block">
            <b-tab-item label="Ubicacion General">
              <div>
                  <ubicaciones-main-form />
              </div>
            </b-tab-item>
            <b-tab-item label="Organizacion">
              <div>
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
import UbicacionesMainForm from '@/components/Forms/Ubicaciones/UbicacionesMainForm.vue'
export default {
  name: 'Ubicaciones',
  components: {
    TitleBar,
    UbicacionesMainForm
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
