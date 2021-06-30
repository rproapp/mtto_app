<template>
  <div>
    <form-create v-model="fApi" :rule="rule" :option="option" style="margin-top: 20px;"/>
  </div>
</template>

<script>
import formCreate from '@form-create/element-ui'
import { sendData } from '@/api/ManufacturaAPI'
export default {
  name: 'FromCreate',
  components: {
    formCreate: formCreate.$form()
  },
  data () {
    return {
      fApi: {},
      value: { A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '' },
      option: {
        submitBtn: {
          show: true,
          size: 'small',
          innerText: 'Agregar'
        },
        onSubmit: (formData) => {
          alert(JSON.stringify(formData))
          sendData(formData)
        }
      },
      rule: [
        /* eslint-disable */
        { type: 'input',      field: 'A',  title: 'Fabricante',                  col:{ labelWidth:9, span:9}},
        { type: 'input',      field: 'B',  title: 'Numero de Modelo',            col:{ labelWidth:4, span:4, offset: 1}},
        { type: 'input',      field: 'C',  title: 'Numero de Parte',             col:{ labelWidth:4, span:4, offset: 1}},   
        { type: 'input',      field: 'D',  title: 'Numero de Serie',             col:{ labelWidth:4, span:4, offset: 1}},
        { type: 'select',     field: 'E',  title: 'Pais de Origen',              col:{ labelWidth:4, span:4}},   
        { type: 'datePicker', field: 'F',  title: 'Fecha de Fabricacion',        col:{ labelWidth:3.5, span:3.5, offset: 1}},
        { type: 'input',      field: 'G',  title: 'Clase de Equipo',             col:{ labelWidth:3.5, span:3.5, offset: 1}},
        { type: 'input',      field: 'H',  title: 'Numero de Inventario',        col:{ labelWidth:5, span:5, offset: 1}},   
        { type: 'input',      field: 'I',  title: 'Dimensiones',                 col:{ labelWidth:4, span:4}},
        { type: 'input',      field: 'J',  title: 'Peso',                        col:{ labelWidth:4, span:4, offset: 1}},
        { type: 'datePicker', field: 'K',  title: 'Fecha de Arranque',           col:{ labelWidth:4, span:4, offset: 1}},
      
        /* eslint-enable */
      ]
    }
  }
}
</script>
