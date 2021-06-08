import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5af6ca93 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _529b2492 = () => interopDefault(import('../pages/approach.vue' /* webpackChunkName: "pages/approach" */))
const _328644ed = () => interopDefault(import('../pages/index copy.vue' /* webpackChunkName: "pages/index copy" */))
const _2e89b85e = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _288df07b = () => interopDefault(import('../pages/work.vue' /* webpackChunkName: "pages/work" */))
const _5db1e679 = () => interopDefault(import('../pages/portfolio/_id.vue' /* webpackChunkName: "pages/portfolio/_id" */))
const _7aaea558 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _5af6ca93,
    name: "about"
  }, {
    path: "/approach",
    component: _529b2492,
    name: "approach"
  }, {
    path: "/index%20copy",
    component: _328644ed,
    name: "index copy"
  }, {
    path: "/portfolio",
    component: _2e89b85e,
    name: "portfolio"
  }, {
    path: "/work",
    component: _288df07b,
    name: "work"
  }, {
    path: "/portfolio/:id",
    component: _5db1e679,
    name: "portfolio-id"
  }, {
    path: "/",
    component: _7aaea558,
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
