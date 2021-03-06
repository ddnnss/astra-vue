
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
         color: '#522EE3',
         height: '5px',
         throttle: 0
        },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles.sass',
    './node_modules/element-ui/packages/theme-chalk/src/select.scss',
    './node_modules/element-ui/packages/theme-chalk/src/message-box.scss',
    './node_modules/element-ui/packages/theme-chalk/src/checkbox.scss',
    './node_modules/element-ui/packages/theme-chalk/src/tooltip.scss',
    './node_modules/element-ui/packages/theme-chalk/src/radio.scss',
    './node_modules/element-ui/packages/theme-chalk/src/dialog.scss',
    './node_modules/element-ui/packages/theme-chalk/src/popover.scss',
    './node_modules/element-ui/packages/theme-chalk/src/collapse.scss',

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-agile',
    '@/plugins/element-ui',

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@aceforth/nuxt-optimized-images'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
     '@nuxtjs/axios',
  ],
  axios: {
    //baseURL: "http://localhost:8000/api"
    baseURL: "http://site.astralid1.ru:8000/api"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['vue-agile'],
    extend (config, ctx) {
    }
  },

}
