
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:site_name', property: 'og:site_name', content: '6Q.design' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://6qd.github.io/bootstrap-xd-guide/' },
      { hid: 'og:title', property: 'og:title', content: 'Bootstrap-XD' },
      { hid: 'og:description', property: 'og:description', content: 'Perfect Bootstrap Design Template — Assets Library — for Adobe XD.' },
      { hid: 'og:image', property: 'og:image', content: '/bootstrap-xd-guide/ogp.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/bootstrap-xd-guide/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-KBG9CHV' }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  router: {
    base: '/bootstrap-xd-guide/'
  }
}
