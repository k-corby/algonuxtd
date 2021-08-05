import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4103852c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3e2fa34a = () => interopDefault(import('../pages/approach.vue' /* webpackChunkName: "pages/approach" */))
const _61b80076 = () => interopDefault(import('../pages/index copy.vue' /* webpackChunkName: "pages/index copy" */))
const _30b6d1da = () => interopDefault(import('../pages/index2.vue' /* webpackChunkName: "pages/index2" */))
const _309aa2d8 = () => interopDefault(import('../pages/index3.vue' /* webpackChunkName: "pages/index3" */))
const _d7a39430 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _bf1d7278 = () => interopDefault(import('../pages/work.vue' /* webpackChunkName: "pages/work" */))
const _6a209250 = () => interopDefault(import('../pages/portfolio/_id.vue' /* webpackChunkName: "pages/portfolio/_id" */))
const _0193cfa2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4103852c,
    name: "about"
  }, {
    path: "/approach",
    component: _3e2fa34a,
    name: "approach"
  }, {
    path: "/index%20copy",
    component: _61b80076,
    name: "index copy"
  }, {
    path: "/index2",
    component: _30b6d1da,
    name: "index2"
  }, {
    path: "/index3",
    component: _309aa2d8,
    name: "index3"
  }, {
    path: "/portfolio",
    component: _d7a39430,
    name: "portfolio"
  }, {
    path: "/work",
    component: _bf1d7278,
    name: "work"
  }, {
    path: "/portfolio/:id",
    component: _6a209250,
    name: "portfolio-id"
  }, {
    path: "/",
    component: _0193cfa2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
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
