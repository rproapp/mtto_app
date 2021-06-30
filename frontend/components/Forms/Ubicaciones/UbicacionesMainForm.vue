<template>
  <div>
    <form-create v-model="fApi" :rule="rule" :option="option" style="margin-top: 20px;"/>
  </div>
</template>

<script>
import formCreate from '@form-create/element-ui'
import { sendData } from '@/api/LocacionAPI'
export default {
  name: 'FromCreate',
  components: {
    formCreate: formCreate.$form()
  },
  data () {
    return {
      fApi: {},
      value: { A: '', B: '', C: '' },
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
        { type: 'input',  field: 'A',  title: 'Nombre de Equipo', value: '',    col:{ labelWidth:9, span:9}},

        { type: 'select', field: 'B',  title: 'Linea', value: '',              
        options: [
          {"value": "L1", "label": "L1"}, 
          {"value": "L2", "label": "L2"},
          {"value": "L3", "label": "L3"}, 
        ], col:{ labelWidth:4, span:4, offset: 1}},

        { type: 'select', field: 'C',  title: 'Area de Trabajo', value: '',             
        options: [
          {"value": "PREF", "label": "PREF"}, 
          {"value": "RTM", "label": "RTM"}, 
          {"value": "MAQ", "label": "MAQ"}, 
        ], col:{ labelWidth:4, span:4, offset: 1}},   

        { type: 'input', field: 'D',  title: 'Centro de Trabajo', value: '',    col:{ labelWidth:4, span:4, offset: 1}},
        /* eslint-enable */
      ]
    }
  }
}
</script>
