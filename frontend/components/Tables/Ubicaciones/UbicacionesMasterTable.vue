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
        searchFn: mySearchFn,
        placeholder: 'Search this table',
        externalQuery: searchQuery
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
  name: 'my-component',
  data () {
    return {
      columns: [
        {
          label: 'Planta',
          field: 'planta'
        },
        {
          label: 'Linea',
          field: 'linea'
        },
        {
          label: 'Centro de Trabajo',
          field: 'centro_trabajo'
        }
      ],
      rows: [
        /* eslint-disable */
        { id:1, planta:"CMP", linea: 'L1', centro_trabajo: 'PREF' },
        { id:2, planta:"CMP", linea: 'L2', centro_trabajo: 'PREF' },
        { id:3, planta:"CMP", linea: 'L3', centro_trabajo: 'PREF' },
        { id:4, planta:"CMP", linea: 'L1', centro_trabajo: 'RTM'  },
        { id:5, planta:"CMP", linea: 'L2', centro_trabajo: 'RTM'  },
        { id:6, planta:"CMP", linea: 'L3', centro_trabajo: 'RTM'  },
        { id:7, planta:"CMP", linea: 'L1', centro_trabajo: 'MAQ'  },
        { id:8, planta:"CMP", linea: 'L2', centro_trabajo: 'MAQ'  },
        { id:9, planta:"CMP", linea: 'L3', centro_trabajo: 'MAQ'  },
        /* eslint-enable */
      ]
    }
  }
}
</script>
