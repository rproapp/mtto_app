<template>
  <v-card>
    <v-card-title>
      Ultimos Registros
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="horometros" :search="search" class="elevation-1" loading loading-text="Loading... Please wait">
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id', align: 'middle', filterable: true },
        { text: 'Date', value: 'Linea', align: 'middle', filterable: true },
        { text: 'Date', value: 'Unwinding', align: 'middle', filterable: true },
        { text: 'Name', value: 'Robot1', align: 'middle', filterable: true },
        { text: 'Price', value: 'fecha', align: 'middle', filterable: true }
      ],
      horometros: [],
      error: null
    }
  },
  async mounted () {
    try {
      this.horometros = await this.$strapi.$horometros.find()
    } catch (error) {
      this.error = error
    }
  }
}
</script>
