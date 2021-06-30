<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <section class="section is-main-section">
      <el-card
        class="box-card"
        style="margin-top: 5px; width: 90%; margin-left: 5%"
      >
        <div>
          <form-create
            v-model="fApi"
            :rule="rule"
            :option="option"
            style="margin-top: 20px"
            @on-submit="onSubmit"
          />
        </div>
      </el-card>
    </section>
  </div>
</template>

<script>
import mapValues from 'lodash/mapValues'
import TitleBar from '@/components/Widgets/TitleBar'
import formCreate from '@form-create/element-ui'
import { sendData } from '@/api/clientesAPI'
export default {
  name: 'FromCreate',
  components: {
    TitleBar,
    formCreate: formCreate.$form()
  },
  data () {
    return {
      fApi: {},
      value: { field1: '', field2: '', time: '' },
      option: {
        submitBtn: {
          show: true,
          size: 'small',
          long: '20px',
          innerText: 'Guardar'
        },
        onSubmit: (formData) => {
          alert(JSON.stringify(formData)); sendData(formData)
        }
      },
      rule: [
        /* eslint-disable */
        { type: 'input', field: 'Nombre', title: 'Nombre' },
        { type: 'input', field: 'Apellido_Paterno', title: 'Apellido Paterno' },
        { type: 'input', field: 'Apellido_Materno', title: 'Apellido Materno' },
        { type: 'input', field: 'Asset_Nombre',       title: 'Nombres',         col:{ span:12 }   },
        { type: 'input', field: 'Asset_Modelo',       title: 'Modelo',          col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Marca',        title: 'Marca',           col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Numero_Serie', title: 'Numero de Serie', col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Categoria',    title: 'Categoria',       col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Suptipo',      title: 'Suptipo',         col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Descripcion',  title: 'Descripcion',     col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Organizacion', title: 'Organizacion',    col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Departamento', title: 'Departamento',    col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Area',         title: 'Area',            col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Critico',      title: 'Critico',         col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Estatus',      title: 'Estatus',         col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Tipo',         title: 'Tipo',            col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Grupo',        title: 'Grupo',           col:{ span:12 }   }, 
        { type: 'input', field: 'Asset_Garantia',     title: 'Garantia',        col:{ span:12 }   },
        /* eslint-enable */
      ]
    }
  },
  computed: {
    titleStack () {
      return ['Admin', 'Forms']
    }
  },
  methods: {
    onSubmit: (formData) => {
      window.alert(JSON.stringify(formData))
    },
    reset () {
      this.form = mapValues(this.form, (item) => {
        if (item && typeof item === 'object') {
          return []
        }
        return null
      })

      this.$buefy.snackbar.open({
        message: 'Reset successfully',
        queue: false
      })
    }
  },
  head () {
    return {
      title: 'Forms — Admin Null Nuxt.js Bulma'
    }
  }
}
</script>
