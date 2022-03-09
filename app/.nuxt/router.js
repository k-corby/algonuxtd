import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4133b8a0 = () => interopDefault(import('../pages/approach.vue' /* webpackChunkName: "pages/approach" */))
const _834c44b0 = () => interopDefault(import('../pages/index2.vue' /* webpackChunkName: "pages/index2" */))
const _833015ae = () => interopDefault(import('../pages/index3.vue' /* webpackChunkName: "pages/index3" */))
const _8313e6ac = () => interopDefault(import('../pages/index4.vue' /* webpackChunkName: "pages/index4" */))
const _82f7b7aa = () => interopDefault(import('../pages/index5.vue' /* webpackChunkName: "pages/index5" */))
const _8672f21a = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _5da38ade = () => interopDefault(import('../pages/studio.vue' /* webpackChunkName: "pages/studio" */))
const _08fda2ce = () => interopDefault(import('../pages/work.vue' /* webpackChunkName: "pages/work" */))
const _d3c0abca = () => interopDefault(import('../pages/portfolio/_id.vue' /* webpackChunkName: "pages/portfolio/_id" */))
const _06232afa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4e375579 = () => interopDefault(import('../pages/_backup/index copy.vue' /* webpackChunkName: "pages/_backup/index copy" */))
const _fc14676a = () => interopDefault(import('../pages/_backup/index copy 2.vue' /* webpackChunkName: "pages/_backup/index copy 2" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/approach",
    component: _4133b8a0,
    name: "approach"
  }, {
    path: "/index2",
    component: _834c44b0,
    name: "index2"
  }, {
    path: "/index3",
    component: _833015ae,
    name: "index3"
  }, {
    path: "/index4",
    component: _8313e6ac,
    name: "index4"
  }, {
    path: "/index5",
    component: _82f7b7aa,
    name: "index5"
  }, {
    path: "/portfolio",
    component: _8672f21a,
    name: "portfolio"
  }, {
    path: "/studio",
    component: _5da38ade,
    name: "studio"
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
  }, {
    path: "/:backup/index%20copy",
    component: _4e375579,
    name: "backup-index copy"
  }, {
    path: "/:backup/index%20copy%202",
    component: _fc14676a,
    name: "backup-index copy 2"
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
