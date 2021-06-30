<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      theme="polar-bear"
      :line-numbers="false"
      :select-options="{ enabled: false }"
      :search-options="{
        enabled: true,
        trigger: 'enter',
        skipDiacritics: true,
        placeholder: 'Filtrar registros',
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
  name: 'ubicacion-nre-table',
  data () {
    return {
      columns: [
        {
          label: 'Codigo NRE',
          field: 'codigoNRE',
          width: '120px',
          html: true
        },
        {
          label: 'Pos',
          field: 'posicionNRE',
          width: '50px'
        },
        {
          label: 'Descripcion',
          field: 'descripcionNRE'
        },
        {
          label: 'Norma',
          field: 'normaNRE'
        },
        {
          label: 'Metodo',
          field: 'metodoNRE'
        },
        {
          label: 'Acciones',
          field: 'accionNRE'
        },
        {
          label: 'MTBF',
          field: 'mtbfNRE',
          width: '70px'
        }
      ],
      rows: [
        /* eslint-disable */
        { id:1, codigoNRE:'NRE-PREF-10-1', posicionNRE: '1', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:2, codigoNRE:'NRE-PREF-10-1', posicionNRE: '2', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:3, codigoNRE:'NRE-PREF-10-1', posicionNRE: '3', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:4, codigoNRE:'NRE-PREF-10-1', posicionNRE: '4', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:5, codigoNRE:'NRE-PREF-10-1', posicionNRE: '5', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:6, codigoNRE:'NRE-PREF-10-1', posicionNRE: '6', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:7, codigoNRE:'NRE-PREF-10-1', posicionNRE: '7', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:8, codigoNRE:'NRE-PREF-10-1', posicionNRE: '8', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:9, codigoNRE:'NRE-PREF-10-1', posicionNRE: '9', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:10, codigoNRE:'NRE-PREF-10-1', posicionNRE: '10', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:11, codigoNRE:'NRE-PREF-10-1', posicionNRE: '11', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:12, codigoNRE:'NRE-PREF-10-1', posicionNRE: '12', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:13, codigoNRE:'NRE-PREF-10-1', posicionNRE: '13', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:14, codigoNRE:'NRE-PREF-10-1', posicionNRE: '14', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:15, codigoNRE:'NRE-PREF-10-1', posicionNRE: '15', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:16, codigoNRE:'NRE-PREF-10-1', posicionNRE: '16', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' },
        { id:17, codigoNRE:'NRE-PREF-10-1', posicionNRE: '17', descripcionNRE: 'UNIDAD DESENRROLLADORA / BT-071209 - MOTOR',  normaNRE: 'LIMPIEZA, SIN ROZAMIENTO, SIN DESBALANCEO, BASE APRETADA,',  metodoNRE: 'VISUAL / MANUAL',   accionNRE: 'LIMPIEZA, REVISION GENERAL O REPORTE POR CAMBIO DE REFACCION',   mtbfNRE: '180' }
        /* eslint-enable */
      ]
    }
  }
}
</script>

<style>
.edit:before {
    content: "\270E";
}
</style>
