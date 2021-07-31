import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Button: () => import('../../components/section/navigation/left/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c)),
  Copyright: () => import('../../components/section/navigation/left/Copyright.vue' /* webpackChunkName: "components/copyright" */).then(c => wrapFunctional(c.default || c)),
  Menu: () => import('../../components/section/navigation/left/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c)),
  MenuItems: () => import('../../components/section/navigation/left/MenuItems.vue' /* webpackChunkName: "components/menu-items" */).then(c => wrapFunctional(c.default || c)),
  NavigationLeft: () => import('../../components/section/navigation/left/NavigationLeft.vue' /* webpackChunkName: "components/navigation-left" */).then(c => wrapFunctional(c.default || c)),
  Sidebar: () => import('../../components/section/navigation/left/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c)),
  NavigationTop: () => import('../../components/section/navigation/top/NavigationTop.vue' /* webpackChunkName: "components/navigation-top" */).then(c => wrapFunctional(c.default || c)),
  Accordion: () => import('../../components/ui/Accordion.vue' /* webpackChunkName: "components/accordion" */).then(c => wrapFunctional(c.default || c)),
  ArrowDown: () => import('../../components/ui/ArrowDown.vue' /* webpackChunkName: "components/arrow-down" */).then(c => wrapFunctional(c.default || c)),
  Arrows: () => import('../../components/ui/Arrows.vue' /* webpackChunkName: "components/arrows" */).then(c => wrapFunctional(c.default || c)),
  FloatingCircles: () => import('../../components/ui/FloatingCircles.vue' /* webpackChunkName: "components/floating-circles" */).then(c => wrapFunctional(c.default || c)),
  Lines: () => import('../../components/ui/Lines.vue' /* webpackChunkName: "components/lines" */).then(c => wrapFunctional(c.default || c)),
  Loading: () => import('../../components/ui/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c)),
  QuarterCircle: () => import('../../components/ui/QuarterCircle.vue' /* webpackChunkName: "components/quarter-circle" */).then(c => wrapFunctional(c.default || c)),
  ScrollDown: () => import('../../components/ui/ScrollDown.vue' /* webpackChunkName: "components/scroll-down" */).then(c => wrapFunctional(c.default || c)),
  ScrollIndicator: () => import('../../components/ui/ScrollIndicator.vue' /* webpackChunkName: "components/scroll-indicator" */).then(c => wrapFunctional(c.default || c)),
  Slashes: () => import('../../components/ui/Slashes.vue' /* webpackChunkName: "components/slashes" */).then(c => wrapFunctional(c.default || c)),
  Social: () => import('../../components/ui/Social.vue' /* webpackChunkName: "components/social" */).then(c => wrapFunctional(c.default || c)),
  SocialMedia: () => import('../../components/ui/SocialMedia.vue' /* webpackChunkName: "components/social-media" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/ui/logo/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Logo2: () => import('../../components/ui/logo/Logo2.vue' /* webpackChunkName: "components/logo2" */).then(c => wrapFunctional(c.default || c)),
  LogoTopLeft: () => import('../../components/ui/logo/LogoTopLeft.vue' /* webpackChunkName: "components/logo-top-left" */).then(c => wrapFunctional(c.default || c)),
  Portfolio: () => import('../../components/portfolio/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => wrapFunctional(c.default || c)),
  PortfolioItem: () => import('../../components/portfolio/PortfolioItem.vue' /* webpackChunkName: "components/portfolio-item" */).then(c => wrapFunctional(c.default || c)),
  PortfolioList: () => import('../../components/portfolio/PortfolioList.vue' /* webpackChunkName: "components/portfolio-list" */).then(c => wrapFunctional(c.default || c)),
  Banner: () => import('../../components/section/banner/Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c)),
  Banner2: () => import('../../components/section/banner/Banner2.vue' /* webpackChunkName: "components/banner2" */).then(c => wrapFunctional(c.default || c)),
  Banner3: () => import('../../components/section/banner/Banner3.vue' /* webpackChunkName: "components/banner3" */).then(c => wrapFunctional(c.default || c)),
  Banner4: () => import('../../components/section/banner/Banner4.vue' /* webpackChunkName: "components/banner4" */).then(c => wrapFunctional(c.default || c)),
  ApproachList: () => import('../../components/approach/ApproachList.vue' /* webpackChunkName: "components/approach-list" */).then(c => wrapFunctional(c.default || c)),
  ApproachList2: () => import('../../components/approach/ApproachList2.vue' /* webpackChunkName: "components/approach-list2" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
