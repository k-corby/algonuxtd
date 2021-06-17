import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AppNavigation: () => import('../../components/section/menu/AppNavigation.vue' /* webpackChunkName: "components/app-navigation" */).then(c => wrapFunctional(c.default || c)),
  AppNavigation2: () => import('../../components/section/menu/AppNavigation2.vue' /* webpackChunkName: "components/app-navigation2" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/section/menu/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Logo2: () => import('../../components/section/menu/Logo2.vue' /* webpackChunkName: "components/logo2" */).then(c => wrapFunctional(c.default || c)),
  MenuItems: () => import('../../components/section/menu/MenuItems.vue' /* webpackChunkName: "components/menu-items" */).then(c => wrapFunctional(c.default || c)),
  Sidebar: () => import('../../components/section/menu/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c)),
  Accordion: () => import('../../components/ui/Accordion.vue' /* webpackChunkName: "components/accordion" */).then(c => wrapFunctional(c.default || c)),
  Arrows: () => import('../../components/ui/Arrows.vue' /* webpackChunkName: "components/arrows" */).then(c => wrapFunctional(c.default || c)),
  Lines: () => import('../../components/ui/Lines.vue' /* webpackChunkName: "components/lines" */).then(c => wrapFunctional(c.default || c)),
  QuarterRing: () => import('../../components/ui/QuarterRing.vue' /* webpackChunkName: "components/quarter-ring" */).then(c => wrapFunctional(c.default || c)),
  ScrollDown: () => import('../../components/ui/ScrollDown.vue' /* webpackChunkName: "components/scroll-down" */).then(c => wrapFunctional(c.default || c)),
  Slashes: () => import('../../components/ui/Slashes.vue' /* webpackChunkName: "components/slashes" */).then(c => wrapFunctional(c.default || c)),
  Social: () => import('../../components/ui/Social.vue' /* webpackChunkName: "components/social" */).then(c => wrapFunctional(c.default || c)),
  Portfolio: () => import('../../components/portfolio/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => wrapFunctional(c.default || c)),
  PortfolioItem: () => import('../../components/portfolio/PortfolioItem.vue' /* webpackChunkName: "components/portfolio-item" */).then(c => wrapFunctional(c.default || c)),
  PortfolioList: () => import('../../components/portfolio/PortfolioList.vue' /* webpackChunkName: "components/portfolio-list" */).then(c => wrapFunctional(c.default || c)),
  Banner: () => import('../../components/section/banner/Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c)),
  Banner2: () => import('../../components/section/banner/Banner2.vue' /* webpackChunkName: "components/banner2" */).then(c => wrapFunctional(c.default || c)),
  BannerCaption: () => import('../../components/section/banner/Caption.vue' /* webpackChunkName: "components/banner-caption" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
