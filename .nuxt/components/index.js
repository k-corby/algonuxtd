export { default as Button } from '../../components/ui/Button.vue'
export { default as DownArrow } from '../../components/ui/DownArrow.vue'
export { default as Logo } from '../../components/ui/Logo.vue'
export { default as Sidebar } from '../../components/ui/Sidebar.vue'
export { default as Slide } from '../../components/ui/Slide.vue'
export { default as Portfolio } from '../../components/portfolio/Portfolio.vue'
export { default as PortfolioItem } from '../../components/portfolio/PortfolioItem.vue'
export { default as PortfolioList } from '../../components/portfolio/PortfolioList.vue'
export { default as AppFooter } from '../../components/AppFooter.vue'
export { default as AppMenuItems } from '../../components/AppMenuItems.vue'
export { default as AppNavigation } from '../../components/AppNavigation.vue'

export const LazyButton = import('../../components/ui/Button.vue' /* webpackChunkName: "components/button" */).then(c => c.default || c)
export const LazyDownArrow = import('../../components/ui/DownArrow.vue' /* webpackChunkName: "components/down-arrow" */).then(c => c.default || c)
export const LazyLogo = import('../../components/ui/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazySidebar = import('../../components/ui/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => c.default || c)
export const LazySlide = import('../../components/ui/Slide.vue' /* webpackChunkName: "components/slide" */).then(c => c.default || c)
export const LazyPortfolio = import('../../components/portfolio/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => c.default || c)
export const LazyPortfolioItem = import('../../components/portfolio/PortfolioItem.vue' /* webpackChunkName: "components/portfolio-item" */).then(c => c.default || c)
export const LazyPortfolioList = import('../../components/portfolio/PortfolioList.vue' /* webpackChunkName: "components/portfolio-list" */).then(c => c.default || c)
export const LazyAppFooter = import('../../components/AppFooter.vue' /* webpackChunkName: "components/app-footer" */).then(c => c.default || c)
export const LazyAppMenuItems = import('../../components/AppMenuItems.vue' /* webpackChunkName: "components/app-menu-items" */).then(c => c.default || c)
export const LazyAppNavigation = import('../../components/AppNavigation.vue' /* webpackChunkName: "components/app-navigation" */).then(c => c.default || c)
