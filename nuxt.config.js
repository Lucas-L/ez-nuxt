const PrismicConfig = require('./assets/js/prismic.config')
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { innerHTML: '{ window.prismic = { endpoint: "' + PrismicConfig.apiEndpoint + '"} }' },
      { src: '//static.cdn.prismic.io/prismic.min.js' }
      ],
    __dangerouslyDisableSanitizers: ['script']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/prismic-vue.js',
    { src: '~/plugins/vuex-persist.js', ssr: false },
  ],
  
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
