/*
 ** This is for GitHub pages
 */
 const routerBase =
 process.env.DEPLOY_ENV === 'GH_PAGES'
   ? {
     router: {
       base: '/app_Mtto/',
     },
   }
   : {}

require('dotenv').config()

export default {
 /*
  ** Concat router base setting
  */
 ...routerBase,
 /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
 mode: 'universal',
 /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
 target: 'static',
 /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
 head: {
   title: process.env.npm_package_name || '',
   meta: [
     { charset: 'utf-8' },
     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     {
       hid: 'description',
       name: 'description',
       content: process.env.npm_package_description || '',
     },
   ],
   link: [
     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
     { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
     {
       rel: 'stylesheet',
       type: 'text/css',
       href: 'https://fonts.googleapis.com/css?family=Nunito',
     },
     {
       rel: 'stylesheet',
       type: 'text/css',
       href:
         'https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css',
     },
   ],
 },
 /*
  ** Customize the progress-bar color
  */
 loading: { color: '#fff' },
 /*
  ** Global CSS
  */
 css: [
   { src: 'element-ui/lib/theme-chalk/index.css', lang: 'css' },
   { src: '~/assets/scss/main.scss', lang: 'scss' },
   { src: 'vue-good-table/src/styles/style.scss', lang: 'scss' }
 ],
 /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
 plugins: [
   { src: '~/plugins/after-each.js', mode: 'client' },
   { src: '~/plugins/element-ui', mode: 'client' },
   { src: '~/plugins/vue-good-table', ssr: false },
   { src: '~/plugins/vue-jstree', ssr: false }
 ],
 /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
 components: false,
 /*
  ** Nuxt.js dev-modules
  */
 buildModules: [
   // Doc: https://github.com/nuxt-community/eslint-module
   '@nuxtjs/eslint-module',
 ],
 /*
  ** Nuxt.js modules
  */
 modules: [
   // Doc: https://buefy.github.io/#/documentation
   ['nuxt-buefy', { materialDesignIcons: true }],
   // Doc: https://axios.nuxtjs.org/usage
   '@nuxtjs/axios',
   '@nuxtjs/pwa',
   '@nuxtjs/strapi',
   '@nuxtjs/dotenv',
   '@nuxtjs/auth',
   '@nuxtjs/vuetify',
   '@nuxtjs/bulma'
 ],
 /*
  ** Strapi module configuration
  */
 strapi: {
  entities: ['horometros'],
  url: 'http://localhost:3001'
 },
 /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
 axios: {
  baseURL: process.env.API_AUTH_URL
 },
  /*
  ** auth module configuration
  */
 auth: {
  strategies: {
    local: {
      endpoints: {
        login: {
          url: 'auth/local',
          method: 'post',
          propertyName: 'jwt'
        },
        user: {
          url: 'users/me',
          method: 'get',
          propertyName: false
        },
        logout: false
      }
    }
  }
},
 /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
 build: {
   /*
    ** You can extend webpack config here
    */
   extend(config, ctx) {
     if (!config.externals) {
       config.externals = {}
     }

     // Remove moment.js from chart.js
     // https://www.chartjs.org/docs/latest/getting-started/integration.html#bundlers-webpack-rollup-etc
     config.externals.moment = 'moment'
   },
 },
}

