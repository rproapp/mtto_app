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
      value: {},
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
        { type: 'input', field: 'Planta',               title: 'Planta'             },
        { type: 'input', field: 'Linea',                title: 'Linea'              },
        { type: 'input', field: 'Centro_Trabajo',       title: 'Centro de Trabajo'  },
        { type: 'input', field: 'eric',               title: 'centro'             },
        /* eslint-enable */
      ]
    }
  }
}
</script>
