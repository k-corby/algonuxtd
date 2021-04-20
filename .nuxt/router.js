import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2dd647cc = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _c45b8ed0 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _ad74fe00 = () => interopDefault(import('../pages/portfolio/_id.vue' /* webpackChunkName: "pages/portfolio/_id" */))
const _08ccb6df = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2dd647cc,
    name: "about"
  }, {
    path: "/portfolio",
    component: _c45b8ed0,
    name: "portfolio"
  }, {
    path: "/portfolio/:id",
    component: _ad74fe00,
    name: "portfolio-id"
  }, {
    path: "/",
    component: _08ccb6df,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
