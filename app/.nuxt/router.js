import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _47fd2f56 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _05079790 = () => interopDefault(import('../pages/approach.vue' /* webpackChunkName: "pages/approach" */))
const _7b86c988 = () => interopDefault(import('../pages/index2.vue' /* webpackChunkName: "pages/index2" */))
const _7b94e109 = () => interopDefault(import('../pages/index3.vue' /* webpackChunkName: "pages/index3" */))
const _3c34f713 = () => interopDefault(import('../pages/portfolio/index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _2cb79279 = () => interopDefault(import('../pages/work.vue' /* webpackChunkName: "pages/work" */))
const _eea8bb8a = () => interopDefault(import('../pages/portfolio/_id.vue' /* webpackChunkName: "pages/portfolio/_id" */))
const _088d79cc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _47fd2f56,
    name: "about"
  }, {
    path: "/approach",
    component: _05079790,
    name: "approach"
  }, {
    path: "/index2",
    component: _7b86c988,
    name: "index2"
  }, {
    path: "/index3",
    component: _7b94e109,
    name: "index3"
  }, {
    path: "/portfolio",
    component: _3c34f713,
    name: "portfolio"
  }, {
    path: "/work",
    component: _2cb79279,
    name: "work"
  }, {
    path: "/portfolio/:id",
    component: _eea8bb8a,
    name: "portfolio-id"
  }, {
    path: "/",
    component: _088d79cc,
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
