import pkg from "./package";

export default {
    mode: 'spa',
    /*
    ** Headers of the page
    */
    // head: {
    //   title: process.env.npm_package_name || '',
    //   meta: [
    //     { charset: 'utf-8' },
    //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    //     { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    //   ],
    //   link: [
    //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    //   ]
    // },
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        ],
    },


    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: ['@/assets/styles/main.css', '@/assets/styles/bootstrap.min.css'],
    js: ['@/assets/js/jquery-3.3.1.slim.min.js', '@/assets/js/popper.min.js', '@/assets/js/bootstrap.min.js',],

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
    },
    ],
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
        babel: {
            compact: false
        },
        extend(config, ctx) {
        }
    }
}
