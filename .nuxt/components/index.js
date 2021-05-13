import { wrapFunctional } from './utils'

export { default as LoadingBar } from '../../components/ui/LoadingBar.vue'
export { default as Logo } from '../../components/ui/Logo.vue'
export { default as MenuItems } from '../../components/ui/MenuItems.vue'
export { default as NavButton } from '../../components/ui/NavButton.vue'
export { default as Sidebar } from '../../components/ui/Sidebar.vue'
export { default as Social } from '../../components/ui/Social.vue'
export { default as Portfolio } from '../../components/portfolio/Portfolio.vue'
export { default as PortfolioItem } from '../../components/portfolio/PortfolioItem.vue'
export { default as PortfolioList } from '../../components/portfolio/PortfolioList.vue'
export { default as AppFooter } from '../../components/section/AppFooter.vue'
export { default as AppNavigation } from '../../components/section/AppNavigation.vue'

export const LazyLoadingBar = import('../../components/ui/LoadingBar.vue' /* webpackChunkName: "components/loading-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/ui/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuItems = import('../../components/ui/MenuItems.vue' /* webpackChunkName: "components/menu-items" */).then(c => wrapFunctional(c.default || c))
export const LazyNavButton = import('../../components/ui/NavButton.vue' /* webpackChunkName: "components/nav-button" */).then(c => wrapFunctional(c.default || c))
export const LazySidebar = import('../../components/ui/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazySocial = import('../../components/ui/Social.vue' /* webpackChunkName: "components/social" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolio = import('../../components/portfolio/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolioItem = import('../../components/portfolio/PortfolioItem.vue' /* webpackChunkName: "components/portfolio-item" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolioList = import('../../components/portfolio/PortfolioList.vue' /* webpackChunkName: "components/portfolio-list" */).then(c => wrapFunctional(c.default || c))
export const LazyAppFooter = import('../../components/section/AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyAppNavigation = import('../../components/section/AppNavigation.vue' /* webpackChunkName: "components/app-navigation" */).then(c => wrapFunctional(c.default || c))
