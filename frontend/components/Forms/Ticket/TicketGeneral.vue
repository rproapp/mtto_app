/* eslint multiline-comment-style: ["error", "starred-block"] */
<template>
  <div>
    <form-create v-model="fApia" :rule="rule" :option="option" style="margin-top: 20px;"/>
  </div>
</template>

<script>
import formCreate from '@form-create/element-ui'
import { sendData } from '@/api/clientesAPI'
export default {
  name: 'FromCreate',
  components: {
    formCreate: formCreate.$form()
  },
  data () {
    return {
      fApia: {},
      value: { field1: '', field2: '', time: '' },
      option: {
        submitBtn: {
          show: true,
          size: 'small',
          long: '20px',
          innerText: 'Guardar'
        },
        onSubmit: (formData) => {
          alert(JSON.stringify(formData))
          sendData(formData)
        }
      },
      rule: [
        /* eslint-disable */
        { type: 'input', field: 'Usuario',            title: 'Usuario',             col:{ span:24 }},
        { type: 'input', field: 'No_Ecco',            title: 'No. Ecco.',           col:{ span:24 }},
        { type: 'input', field: 'Orden',              title: 'Orden',               col:{ span:24 }},
        { type: 'input', field: 'Mes',                title: 'Mes',                 col:{ span:24 }},
        { type: 'input', field: 'Fecha_Inicio',       title: 'Fecha Inicio',        col:{ span:24 }},
        { type: 'input', field: 'Fecha_Final',        title: 'Fecha Final',         col:{ span:24 }},
        { type: 'input', field: 'Mtto_Solicitado',    title: 'Mtto Solicitado',     col:{ span:24 }},
        /* eslint-enable */
      ]
    }
  }
}
</script>
