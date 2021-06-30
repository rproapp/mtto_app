<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :line-numbers="true"
      :select-options="{ enabled: true }"
      :search-options="{
        enabled: true,
        trigger: 'enter',
        skipDiacritics: true,
        placeholder: 'Search this table'
        }"
      :pagination-options="{
        enabled: true,
        mode: 'records'
        }"
      />
  </div>
</template>

<script>
export default {
  name: 'ubicacion-main-table',
  data () {
    return {
      /* eslint-disable */
      columns: [
        { label: 'No. Ecco.',                 field: 'a' },
        { label: 'Serie',                     field: 'b' },
        { label: 'Modelo',                    field: 'c' },
        { label: 'Unidad',                    field: 'd' },
        { label: 'Compañia',                  field: 'e' },
        { label: 'Mtto Solicitado',           field: 'f' },
        { label: 'Fecha Entrada',             field: 'g' },
        { label: 'Mes',                       field: 'i' },
        { label: 'Orden',                     field: 'j' },
        { label: 'Fecha Inicio',              field: 'k' },
        { label: 'Tiempo de Respuesta',       field: 'l' },
        { label: 'Personal PEM',              field: 'm' },
        { label: 'Sistema Afectado',          field: 'n' },
        { label: 'Tipo de Falla',             field: 'o' },
        { label: 'Descripcion de la Falla',   field: 'p' },
        { label: 'Motivo Averia',             field: 'r' },
        { label: 'Detalles de Monitoreo',     field: 's' },
        { label: 'Hrs de Mtto',               field: 't' }

      ],
      rows: [
        { id:1, a:"CMP", b: 'L1', c: 'PREF' },
        /* eslint-enable */
      ]
    }
  }
}
</script>
