import Vue from 'vue'

const components = {
  Button: () => import('../../components/ui/Button.vue' /* webpackChunkName: "components/button" */).then(c => c.default || c),
  DownArrow: () => import('../../components/ui/DownArrow.vue' /* webpackChunkName: "components/down-arrow" */).then(c => c.default || c),
  Logo: () => import('../../components/ui/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  Sidebar: () => import('../../components/ui/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => c.default || c),
  Slide: () => import('../../components/ui/Slide.vue' /* webpackChunkName: "components/slide" */).then(c => c.default || c),
  Portfolio: () => import('../../components/portfolio/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => c.default || c),
  PortfolioItem: () => import('../../components/portfolio/PortfolioItem.vue' /* webpackChunkName: "components/portfolio-item" */).then(c => c.default || c),
  PortfolioList: () => import('../../components/portfolio/PortfolioList.vue' /* webpackChunkName: "components/portfolio-list" */).then(c => c.default || c),
  AppFooter: () => import('../../components/AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => c.default || c),
  AppMenuItems: () => import('../../components/AppMenuItems.vue' /* webpackChunkName: "components/app-menu-items" */).then(c => c.default || c),
  AppNavigation: () => import('../../components/AppNavigation.vue' /* webpackChunkName: "components/app-navigation" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
