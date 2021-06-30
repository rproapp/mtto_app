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
        { type: 'input', field: 'Nombre', title: 'Nombre' },
        { type: 'input', field: 'Apellido_Paterno', title: 'Apellido Paterno' },
        { type: 'input', field: 'Apellido_Materno', title: 'Apellido Materno' },
        /* eslint-enable */
      ]
    }
  }
}
</script>
