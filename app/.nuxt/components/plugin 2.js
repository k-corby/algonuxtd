import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AppNavigationLeft: () => import('../../components/section/menu/AppNavigationLeft.vue' /* webpackChunkName: "components/app-navigation-left" */).then(c => wrapFunctional(c.default || c)),
  AppNavigationTop: () => import('../../components/section/menu/AppNavigationTop.vue' /* webpackChunkName: "components/app-navigation-top" */).then(c => wrapFunctional(c.default || c)),
  MenuItems: () => import('../../components/section/menu/MenuItems.vue' /* webpackChunkName: "components/menu-items" */).then(c => wrapFunctional(c.default || c)),
  LeftButton: () => import('../../components/section/menu/left/Button.vue' /* webpackChunkName: "components/left-button" */).then(c => wrapFunctional(c.default || c)),
  LeftMenu: () => import('../../components/section/menu/left/Menu.vue' /* webpackChunkName: "components/left-menu" */).then(c => wrapFunctional(c.default || c)),
  LeftSidebar: () => import('../../components/section/menu/left/Sidebar.vue' /* webpackChunkName: "components/left-sidebar" */).then(c => wrapFunctional(c.default || c)),
  TopButton: () => import('../../components/section/menu/top/Button.vue' /* webpackChunkName: "components/top-button" */).then(c => wrapFunctional(c.default || c)),
  TopCopyright: () => import('../../components/section/menu/top/Copyright.vue' /* webpackChunkName: "components/top-copyright" */).then(c => wrapFunctional(c.default || c)),
  TopMenu: () => import('../../components/section/menu/top/Menu.vue' /* webpackChunkName: "components/top-menu" */).then(c => wrapFunctional(c.default || c)),
  TopSidebar: () => import('../../components/section/menu/top/Sidebar.vue' /* webpackChunkName: "components/top-sidebar" */).then(c => wrapFunctional(c.default || c)),
  Accordion: () => import('../../components/ui/Accordion.vue' /* webpackChunkName: "components/accordion" */).then(c => wrapFunctional(c.default || c)),
  ArrowDown: () => import('../../components/ui/ArrowDown.vue' /* webpackChunkName: "components/arrow-down" */).then(c => wrapFunctional(c.default || c)),
  Arrows: () => import('../../components/ui/Arrows.vue' /* webpackChunkName: "components/arrows" */).then(c => wrapFunctional(c.default || c)),
  FloatingCircles: () => import('../../components/ui/FloatingCircles.vue' /* webpackChunkName: "components/floating-circles" */).then(c => wrapFunctional(c.default || c)),
  Lines: () => import('../../components/ui/Lines.vue' /* webpackChunkName: "components/lines" */).then(c => wrapFunctional(c.default || c)),
  Loading: () => import('../../components/ui/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c)),
  QuarterCircle: () => import('../../components/ui/QuarterCircle.vue' /* webpackChunkName: "components/quarter-circle" */).then(c => wrapFunctional(c.default || c)),
  ScrollDown: () => import('../../components/ui/ScrollDown.vue' /* webpackChunkName: "components/scroll-down" */).then(c => wrapFunctional(c.default || c)),
  Sidebar: () => import('../../components/ui/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c)),
  Slashes: () => import('../../components/ui/Slashes.vue' /* webpackChunkName: "components/slashes" */).then(c => wrapFunctional(c.default || c)),
  Social: () => import('../../components/ui/Social.vue' /* webpackChunkName: "components/social" */).then(c => wrapFunctional(c.default || c)),
  SocialMedia: () => import('../../components/ui/SocialMedia.vue' /* webpackChunkName: "components/social-media" */).then(c => wrapFunctional(c.default || c)),
  Portfolio: () => import('../../components/portfolio/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => wrapFunctional(c.default || c)),
  PortfolioItem: () => import('../../components/portfolio/PortfolioItem.vue' /* webpackChunkName: "components/portfolio-item" */).then(c => wrapFunctional(c.default || c)),
  PortfolioList: () => import('../../components/portfolio/PortfolioList.vue' /* webpackChunkName: "components/portfolio-list" */).then(c => wrapFunctional(c.default || c)),
  Banner: () => import('../../components/section/banner/Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c)),
  Banner2: () => import('../../components/section/banner/Banner2.vue' /* webpackChunkName: "components/banner2" */).then(c => wrapFunctional(c.default || c)),
  Banner3: () => import('../../components/section/banner/Banner3.vue' /* webpackChunkName: "components/banner3" */).then(c => wrapFunctional(c.default || c)),
  Banner4: () => import('../../components/section/banner/Banner4.vue' /* webpackChunkName: "components/banner4" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/section/logo/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Logo3: () => import('../../components/section/logo/Logo3.vue' /* webpackChunkName: "components/logo3" */).then(c => wrapFunctional(c.default || c)),
  LogoTopLeft: () => import('../../components/section/logo/LogoTopLeft.vue' /* webpackChunkName: "components/logo-top-left" */).then(c => wrapFunctional(c.default || c)),
  IconLink: () => import('../../components/IconLink.vue' /* webpackChunkName: "components/icon-link" */).then(c => wrapFunctional(c.default || c)),
  ApproachList: () => import('../../components/approach/ApproachList.vue' /* webpackChunkName: "components/approach-list" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
