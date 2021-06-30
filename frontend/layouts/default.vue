<template>
  <div id="app">
    <nav-bar />
    <aside-menu :menu="menu" />
    <nuxt />
    <footer-bar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Widgets/NavBar'
import AsideMenu from '@/components/Widgets/AsideMenu'
import FooterBar from '@/components/Widgets/FooterBar'
export default {
  name: 'Home',
  components: {
    FooterBar,
    AsideMenu,
    NavBar
  },
  computed: {
    menu () {
      return [
        'Indicadores',
        [
          {
            icon: 'chart-gantt',
            label: 'Tablero BI'
          },
          {
            icon: 'buffer',
            label: 'Reportes'
          }
        ],
        'Soporte Tecnico',
        [
          {
            to: '/Ticket/main',
            icon: 'ticket-outline',
            label: 'Ticket'
          }
        ],
        'EAM',
        [
          {
            to: '/Activos/main',
            label: 'Activos',
            icon: 'robot-industrial'
          },
          {
            label: 'Mantenimiento',
            icon: 'wrench',
            menu: [
              {
                label: 'Catalogo de Rutinas',
                icon: 'tray-full'
              },
              {
                label: 'Rutinas Abiertas',
                icon: 'file-outline'
              },
              {
                label: 'Rutinas Cerradas',
                icon: 'file-document-outline'
              }
            ]
          },
          {
            to: '/Horometro/main',
            label: 'Horometro',
            icon: 'car-cruise-control'
          },
          {
            to: '/Ubicaciones/main',
            label: 'Ubicaciones',
            icon: 'map-marker-radius',
            updateMark: true
          },
          {
            label: 'Refacciones',
            icon: 'cogs'
          },
          {
            label: 'Documentos',
            icon: 'folder-open',
            menu: [
              {
                label: 'Analisis de Fallas',
                icon: 'tray-full'
              },
              {
                href: '#void',
                label: 'Historial de Fallas',
                icon: 'file-outline'
              },
              {
                label: 'Manuales de Fabricantes',
                icon: 'file-document-outline'
              },
              {
                label: 'Diagramas de Ingenieria',
                icon: 'file-document-outline'
              }
            ]
          }
        ],
        'Administrativo',
        [
          {
            label: 'Finanzas',
            icon: 'finance'
          },
          {
            label: 'Roles',
            icon: 'account-group'
          },
          {
            label: 'Procedimientos',
            icon: 'source-branch'
          }
        ]
      ]
    }
  },
  created () {
    this.$store.commit('user', {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://avatars.dicebear.com/v2/gridy/John-Doe.svg'
    })
  },
  mounted () {
    document.documentElement.classList.add('has-aside-left')
    document.documentElement.classList.add('has-aside-mobile-transition')
    document.documentElement.classList.add('has-navbar-fixed-top')
    document.documentElement.classList.add('has-aside-expanded')
  }
}
</script>
