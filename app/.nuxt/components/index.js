import { wrapFunctional } from './utils'

export { default as AppNavigation } from '../../components/section/menu/AppNavigation.vue'
export { default as AppNavigation2 } from '../../components/section/menu/AppNavigation2.vue'
export { default as Logo } from '../../components/section/menu/Logo.vue'
export { default as Logo2 } from '../../components/section/menu/Logo2.vue'
export { default as MenuItems } from '../../components/section/menu/MenuItems.vue'
export { default as Accordion } from '../../components/ui/Accordion.vue'
export { default as Lines } from '../../components/ui/Lines.vue'
export { default as ScrollDown } from '../../components/ui/ScrollDown.vue'
export { default as Sidebar } from '../../components/ui/Sidebar.vue'
export { default as Social } from '../../components/ui/Social.vue'
export { default as Portfolio } from '../../components/portfolio/Portfolio.vue'
export { default as PortfolioItem } from '../../components/portfolio/PortfolioItem.vue'
export { default as PortfolioList } from '../../components/portfolio/PortfolioList.vue'
export { default as Banner } from '../../components/section/banner/Banner.vue'
export { default as Banner2 } from '../../components/section/banner/Banner2.vue'
export { default as BannerCaption } from '../../components/section/banner/Caption.vue'

export const LazyAppNavigation = import('../../components/section/menu/AppNavigation.vue' /* webpackChunkName: "components/app-navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyAppNavigation2 = import('../../components/section/menu/AppNavigation2.vue' /* webpackChunkName: "components/app-navigation2" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/section/menu/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo2 = import('../../components/section/menu/Logo2.vue' /* webpackChunkName: "components/logo2" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuItems = import('../../components/section/menu/MenuItems.vue' /* webpackChunkName: "components/menu-items" */).then(c => wrapFunctional(c.default || c))
export const LazyAccordion = import('../../components/ui/Accordion.vue' /* webpackChunkName: "components/accordion" */).then(c => wrapFunctional(c.default || c))
export const LazyLines = import('../../components/ui/Lines.vue' /* webpackChunkName: "components/lines" */).then(c => wrapFunctional(c.default || c))
export const LazyScrollDown = import('../../components/ui/ScrollDown.vue' /* webpackChunkName: "components/scroll-down" */).then(c => wrapFunctional(c.default || c))
export const LazySidebar = import('../../components/ui/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazySocial = import('../../components/ui/Social.vue' /* webpackChunkName: "components/social" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolio = import('../../components/portfolio/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolioItem = import('../../components/portfolio/PortfolioItem.vue' /* webpackChunkName: "components/portfolio-item" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolioList = import('../../components/portfolio/PortfolioList.vue' /* webpackChunkName: "components/portfolio-list" */).then(c => wrapFunctional(c.default || c))
export const LazyBanner = import('../../components/section/banner/Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c))
export const LazyBanner2 = import('../../components/section/banner/Banner2.vue' /* webpackChunkName: "components/banner2" */).then(c => wrapFunctional(c.default || c))
export const LazyBannerCaption = import('../../components/section/banner/Caption.vue' /* webpackChunkName: "components/banner-caption" */).then(c => wrapFunctional(c.default || c))
