import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Accordion: () => import('../../components/ui/Accordion.vue' /* webpackChunkName: "components/accordion" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/ui/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  MenuItems: () => import('../../components/ui/MenuItems.vue' /* webpackChunkName: "components/menu-items" */).then(c => wrapFunctional(c.default || c)),
  Sidebar: () => import('../../components/ui/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c)),
  Social: () => import('../../components/ui/Social.vue' /* webpackChunkName: "components/social" */).then(c => wrapFunctional(c.default || c)),
  Portfolio: () => import('../../components/portfolio/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => wrapFunctional(c.default || c)),
  PortfolioItem: () => import('../../components/portfolio/PortfolioItem.vue' /* webpackChunkName: "components/portfolio-item" */).then(c => wrapFunctional(c.default || c)),
  PortfolioList: () => import('../../components/portfolio/PortfolioList.vue' /* webpackChunkName: "components/portfolio-list" */).then(c => wrapFunctional(c.default || c)),
  AppNavigation: () => import('../../components/section/AppNavigation.vue' /* webpackChunkName: "components/app-navigation" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
