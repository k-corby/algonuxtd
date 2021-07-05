export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "algo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: "~/components/ui/Loading.vue",
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    //'bulma',
    "@/assets/css/normalise.scss",
    "@/assets/css/global.scss",
    "@/assets/css/main.scss",
    "@/assets/css/locomotive.scss",
    "@/assets/css/fonts.scss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/both.js" },
    { src: "~/plugins/client.js", mode: "client" },
    { src: "~/plugins/vue-cursor-fx.js", mode: "client" }
    //{ src: "@/plugins/aos", mode: "client" }
  ],

  /*purgeCSS: {
      whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },*/

  server: {
    host: "0" // default: localhost
  },

  /*devServe: {
    host: "",
    //disableHostCheck: true,
    //public: require('child_process').execSync('gp url 8080').toString().trim(),
    // make HMR work - end
    port: 8000
    //hot: true,
    //watchContentBase: true,
    //watchOptions: {
    //    poll: true
    //},
  },*/

  // Auto import components (https://go.nuxtjs.dev/config-components)

  components: [
    "~/components/",
    "~/components/ui/",
    "~/components/portfolio/",
    "~/components/section/",
    "~/components/section/footer",
    "~/components/section/menu"
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
    // '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  //'nuxt-buefy',
  //'@nuxtjs/vuetify',
  modules: ["bootstrap-vue/nuxt"],
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].[hash].js" : "[chunkhash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].[hash].js" : "[chunkhash].js")
    },
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]]
    }

    //vendor: ['vuetify'],
    //vendor: ['vue-burger-menu']
  }
};
