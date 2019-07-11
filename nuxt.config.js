import pkg from './package'
var path = require('path');
export default {
  mode: 'universal',
  /* можно менять параметры сервера*/
  server: {
    port: 3000, // default: 3000
    host: 'basked-pro' // default: localhost
  },
  // для генерации динамических маршрутов
  generate: {
    routes: [
      '/users',
      '/users/1',
      '/users/2',
      '/posts',
      '/posts/1',
      '/posts/2',
      '/posts/3',
      '/dev/datagrid'
    ]
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'},
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        type: 'text/javascript'
      }, {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
        type: 'text/javascript'
      }, {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
        type: 'text/javascript'
      },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: ['@/assets/styles/main.css'],

  //добавляем анимацию
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["@/plugins/scrollto.js", {
    src: "@/plugins/vueselect.js",
    srr: false
  }],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    //Чтобы устранить ошибку
    // ERROR  [BABEL] Note: The code generator has deoptimised the styling of C:\WebServer\domains\BasNuxt\store\PersonGT\index.js as it exceeds the max of 500KB.
    babel: {
      compact: false
    },
    extend(config, ctx) {

    }
  },
  devServer: {
    proxy: 'http://basked.pro/',
  }
}
