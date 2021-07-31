import { wrapFunctional } from './utils'

export { default as AppNavigationLeft } from '../../components/section/menu/AppNavigationLeft.vue'
export { default as AppNavigationTop } from '../../components/section/menu/AppNavigationTop.vue'
export { default as MenuItems } from '../../components/section/menu/MenuItems.vue'
export { default as LeftButton } from '../../components/section/menu/left/Button.vue'
export { default as LeftMenu } from '../../components/section/menu/left/Menu.vue'
export { default as LeftSidebar } from '../../components/section/menu/left/Sidebar.vue'
export { default as TopButton } from '../../components/section/menu/top/Button.vue'
export { default as TopCopyright } from '../../components/section/menu/top/Copyright.vue'
export { default as TopMenu } from '../../components/section/menu/top/Menu.vue'
export { default as TopSidebar } from '../../components/section/menu/top/Sidebar.vue'
export { default as Accordion } from '../../components/ui/Accordion.vue'
export { default as ArrowDown } from '../../components/ui/ArrowDown.vue'
export { default as Arrows } from '../../components/ui/Arrows.vue'
export { default as FloatingCircles } from '../../components/ui/FloatingCircles.vue'
export { default as Lines } from '../../components/ui/Lines.vue'
export { default as Loading } from '../../components/ui/Loading.vue'
export { default as QuarterCircle } from '../../components/ui/QuarterCircle.vue'
export { default as ScrollDown } from '../../components/ui/ScrollDown.vue'
export { default as Sidebar } from '../../components/ui/Sidebar.vue'
export { default as Slashes } from '../../components/ui/Slashes.vue'
export { default as Social } from '../../components/ui/Social.vue'
export { default as SocialMedia } from '../../components/ui/SocialMedia.vue'
export { default as Portfolio } from '../../components/portfolio/Portfolio.vue'
export { default as PortfolioItem } from '../../components/portfolio/PortfolioItem.vue'
export { default as PortfolioList } from '../../components/portfolio/PortfolioList.vue'
export { default as Banner } from '../../components/section/banner/Banner.vue'
export { default as Banner2 } from '../../components/section/banner/Banner2.vue'
export { default as Banner3 } from '../../components/section/banner/Banner3.vue'
export { default as Banner4 } from '../../components/section/banner/Banner4.vue'
export { default as Logo } from '../../components/section/logo/Logo.vue'
export { default as Logo2 } from '../../components/section/logo/Logo2.vue'
export { default as LogoTopLeft } from '../../components/section/logo/LogoTopLeft.vue'
export { default as ApproachList } from '../../components/approach/ApproachList.vue'

export const LazyAppNavigationLeft = import('../../components/section/menu/AppNavigationLeft.vue' /* webpackChunkName: "components/app-navigation-left" */).then(c => wrapFunctional(c.default || c))
export const LazyAppNavigationTop = import('../../components/section/menu/AppNavigationTop.vue' /* webpackChunkName: "components/app-navigation-top" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuItems = import('../../components/section/menu/MenuItems.vue' /* webpackChunkName: "components/menu-items" */).then(c => wrapFunctional(c.default || c))
export const LazyLeftButton = import('../../components/section/menu/left/Button.vue' /* webpackChunkName: "components/left-button" */).then(c => wrapFunctional(c.default || c))
export const LazyLeftMenu = import('../../components/section/menu/left/Menu.vue' /* webpackChunkName: "components/left-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyLeftSidebar = import('../../components/section/menu/left/Sidebar.vue' /* webpackChunkName: "components/left-sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyTopButton = import('../../components/section/menu/top/Button.vue' /* webpackChunkName: "components/top-button" */).then(c => wrapFunctional(c.default || c))
export const LazyTopCopyright = import('../../components/section/menu/top/Copyright.vue' /* webpackChunkName: "components/top-copyright" */).then(c => wrapFunctional(c.default || c))
export const LazyTopMenu = import('../../components/section/menu/top/Menu.vue' /* webpackChunkName: "components/top-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyTopSidebar = import('../../components/section/menu/top/Sidebar.vue' /* webpackChunkName: "components/top-sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyAccordion = import('../../components/ui/Accordion.vue' /* webpackChunkName: "components/accordion" */).then(c => wrapFunctional(c.default || c))
export const LazyArrowDown = import('../../components/ui/ArrowDown.vue' /* webpackChunkName: "components/arrow-down" */).then(c => wrapFunctional(c.default || c))
export const LazyArrows = import('../../components/ui/Arrows.vue' /* webpackChunkName: "components/arrows" */).then(c => wrapFunctional(c.default || c))
export const LazyFloatingCircles = import('../../components/ui/FloatingCircles.vue' /* webpackChunkName: "components/floating-circles" */).then(c => wrapFunctional(c.default || c))
export const LazyLines = import('../../components/ui/Lines.vue' /* webpackChunkName: "components/lines" */).then(c => wrapFunctional(c.default || c))
export const LazyLoading = import('../../components/ui/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const LazyQuarterCircle = import('../../components/ui/QuarterCircle.vue' /* webpackChunkName: "components/quarter-circle" */).then(c => wrapFunctional(c.default || c))
export const LazyScrollDown = import('../../components/ui/ScrollDown.vue' /* webpackChunkName: "components/scroll-down" */).then(c => wrapFunctional(c.default || c))
export const LazySidebar = import('../../components/ui/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazySlashes = import('../../components/ui/Slashes.vue' /* webpackChunkName: "components/slashes" */).then(c => wrapFunctional(c.default || c))
export const LazySocial = import('../../components/ui/Social.vue' /* webpackChunkName: "components/social" */).then(c => wrapFunctional(c.default || c))
export const LazySocialMedia = import('../../components/ui/SocialMedia.vue' /* webpackChunkName: "components/social-media" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolio = import('../../components/portfolio/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolioItem = import('../../components/portfolio/PortfolioItem.vue' /* webpackChunkName: "components/portfolio-item" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolioList = import('../../components/portfolio/PortfolioList.vue' /* webpackChunkName: "components/portfolio-list" */).then(c => wrapFunctional(c.default || c))
export const LazyBanner = import('../../components/section/banner/Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c))
export const LazyBanner2 = import('../../components/section/banner/Banner2.vue' /* webpackChunkName: "components/banner2" */).then(c => wrapFunctional(c.default || c))
export const LazyBanner3 = import('../../components/section/banner/Banner3.vue' /* webpackChunkName: "components/banner3" */).then(c => wrapFunctional(c.default || c))
export const LazyBanner4 = import('../../components/section/banner/Banner4.vue' /* webpackChunkName: "components/banner4" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/section/logo/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo2 = import('../../components/section/logo/Logo2.vue' /* webpackChunkName: "components/logo2" */).then(c => wrapFunctional(c.default || c))
export const LazyLogoTopLeft = import('../../components/section/logo/LogoTopLeft.vue' /* webpackChunkName: "components/logo-top-left" */).then(c => wrapFunctional(c.default || c))
export const LazyApproachList = import('../../components/approach/ApproachList.vue' /* webpackChunkName: "components/approach-list" */).then(c => wrapFunctional(c.default || c))
