<template>
<div>
  <title-bar :title-stack="titleStack" />
  <div class="columns is-desktop">
    <div class="column is-three-fifths">
      <section style="height 500px; width: 90%; margin-left: 5%; margin-top: 5%; margin-bottom: 5%">
        <el-card class="box-card">
          <div v-if="error">
            {{ error }}
          </div>
          <form id="form" v-on:submit="handleSubmit" v-else>

            <b-field>Linea de Produccion</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Linea" type="text" name="b" />

            <div class="container">
              <div class="notification has-text-white has-background-dark" style="margin-bottom: 10px;">
                Area <strong>PREF</strong> - Preformado #1.
              </div>
            </div>

            <b-field>Power ON</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Unwinding" type="text" name="b" />

            <b-field>Unwinding unit in Automatic</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Robot1" type="text" name="c" />

            <b-field>Preform Machine in Automatic</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Linea" type="text" name="b" />

            <b-field>Preform Automation in Automatic</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Unwinding" type="text" name="b" />

            <b-field>Robot 1</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Robot1" type="text" name="c" />

            <b-field>Robot 2</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Linea" type="text" name="b" />

            <div class="container">
              <div class="notification has-text-white has-background-dark" style="margin-bottom: 10px;">
                Area <strong>PREF</strong> - Preformado #1.
              </div>
            </div>

            <b-field>Power On</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Unwinding" type="text" name="b" />

            <b-field>Shearing Unit in Automatic</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Robot1" type="text" name="c" />

            <div class="container">
              <div class="notification has-text-white has-background-dark" style="margin-bottom: 10px;">
                Area <strong>RTM</strong> - Proceso de Transferencia de Resina por Moldeo.
              </div>
            </div>

            <b-field>Robot 3</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Linea" type="text" name="b" />

            <b-field>Engel Press Shots</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Unwinding" type="text" name="b" />

            <b-field>Engel Press Hours</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Robot1" type="text" name="c" />

            <div class="container">
              <div class="notification has-text-white has-background-dark" style="margin-bottom: 10px;">
                Area <strong>MAQ</strong> - Maquinado.
              </div>
            </div>

            <b-field>RTM & Machining</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Linea" type="text" name="b" />

            <b-field>RTM Automation in Automatic</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Unwinding" type="text" name="b" />

            <b-field>Machining handling Automatic</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Robot1" type="text" name="c" />

            <b-field>Machining in Automatic</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Linea" type="text" name="b" />

            <b-field>Robot 4</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Unwinding" type="text" name="b" />

            <b-field>Robot 5</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Robot1" type="text" name="c" />

            <b-field>Testing Station in Automatic</b-field>
            <b-input style="margin-bottom: 10px;" id="name" v-model="modifiedData.Robot1" type="text" name="c" />

            <b-button style="margin-top: 10px;" @click="submit">Guardar</b-button>
          </form>
        </el-card>
      </section>
    </div>
    <div class="column">
     <section style="margin-top: 8%; margin-bottom: 5%; margin-right: 5%">
        <horometro-lista />
     </section>
    </div>
  </div>
</div>
</template>

<script>
import TitleBar from '@/components/Widgets/TitleBar'
import HorometroLista from './horometroLista.vue'

export default {
  name: 'App',
  components: {
    TitleBar,
    HorometroLista
  },
  data () {
    return {
      modifiedData: {
        a: '',
        b: '',
        c: ''
      },
      error: null
    }
  },
  methods: {
    handleSubmit: async function (e) {
      e.preventDefault()

      try {
        await this.$strapi.$horometros.create(this.modifiedData)
      } catch (error) {
        this.error = error
      }
    }
  },
  head () {
    return {
      title: 'Tickets'
    }
  },
  computed: {
    titleStack () {
      return ['Admin', 'Horometro']
    }
  }
}
</script>
