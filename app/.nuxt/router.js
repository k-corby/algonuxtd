import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _33295f96 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _4133b8a0 = () => interopDefault(import('../pages/approach.vue' /* webpackChunkName: "pages/approach" */))
const _8ee416ea = () => interopDefault(import('../pages/index copy.vue' /* webpackChunkName: "pages/index copy" */))
const _9dbe2246 = () => interopDefault(import('../pages/index copy 2.vue' /* webpackChunkName: "pages/index copy 2" */))
const _834c44b0 = () => interopDefault(import('../pages/index2.vue' /* webpackChunkName: "pages/index2" */))
const _833015ae = () => interopDefault(import('../pages/index3.vue' /* webpackChunkName: "pages/index3" */))
const _8672f21a = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _08fda2ce = () => interopDefault(import('../pages/work.vue' /* webpackChunkName: "pages/work" */))
const _d3c0abca = () => interopDefault(import('../pages/portfolio/_id.vue' /* webpackChunkName: "pages/portfolio/_id" */))
const _06232afa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _33295f96,
    name: "about"
  }, {
    path: "/approach",
    component: _4133b8a0,
    name: "approach"
  }, {
    path: "/index%20copy",
    component: _8ee416ea,
    name: "index copy"
  }, {
    path: "/index%20copy%202",
    component: _9dbe2246,
    name: "index copy 2"
  }, {
    path: "/index2",
    component: _834c44b0,
    name: "index2"
  }, {
    path: "/index3",
    component: _833015ae,
    name: "index3"
  }, {
    path: "/portfolio",
    component: _8672f21a,
    name: "portfolio"
  }, {
    path: "/work",
    component: _08fda2ce,
    name: "work"
  }, {
    path: "/portfolio/:id",
    component: _d3c0abca,
    name: "portfolio-id"
  }, {
    path: "/",
    component: _06232afa,
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
