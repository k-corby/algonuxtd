export default {
  ssr: false,
  head: {
    title: "algo",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  //loading: "~/components/ui/Loading.vue",
  transition: "page",

  css: [
    "@/assets/css/normalise.scss",
    "@/assets/css/global.scss",
    "@/assets/css/main.scss",
    "@/assets/css/locomotive.scss",
    "@/assets/css/fonts.scss"
  ],

  plugins: [
    { src: "~/plugins/both.js" },
    { src: "~/plugins/client.js", mode: "client" },
    { src: "~/plugins/vue-cursor-fx.js", mode: "client" }
  ],

  server: {
    host: "0"
  },

  components: [
    "~/components/",
    "~/components/ui/",
    "~/components/portfolio/",
    "~/components/section/",
    "~/components/section/footer",
    "~/components/section/navigation",
    "~/components/section/navigation/left"
  ],

  buildModules: ["@nuxt/typescript-build", "@nuxtjs/tailwindcss"],

  modules: ["bootstrap-vue/nuxt"],
  bootstrapVue: {
    icons: true
  },

  build: {
    transpile: ["gsap"],
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].[hash].js" : "[chunkhash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].[hash].js" : "[chunkhash].js")
    },
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]]
    }
  }
};
