import { wrapFunctional } from './utils'

export { default as Button } from '../../components/section/navigation/left/Button.vue'
export { default as Button2 } from '../../components/section/navigation/left/Button2.vue'
export { default as Copyright } from '../../components/section/navigation/left/Copyright.vue'
export { default as Menu } from '../../components/section/navigation/left/Menu.vue'
export { default as MenuItems } from '../../components/section/navigation/left/MenuItems.vue'
export { default as NavigationLeft } from '../../components/section/navigation/left/NavigationLeft.vue'
export { default as Sidebar } from '../../components/section/navigation/left/Sidebar.vue'
export { default as NavigationTop } from '../../components/section/navigation/top/NavigationTop.vue'
export { default as Accordion } from '../../components/ui/Accordion.vue'
export { default as ArrowDown } from '../../components/ui/ArrowDown.vue'
export { default as Arrows } from '../../components/ui/Arrows.vue'
export { default as BannerCircle } from '../../components/ui/BannerCircle.vue'
export { default as BlockText } from '../../components/ui/BlockText.vue'
export { default as FloatingCircles } from '../../components/ui/FloatingCircles.vue'
export { default as Lines } from '../../components/ui/Lines.vue'
export { default as Loading } from '../../components/ui/Loading.vue'
export { default as QuarterCircle } from '../../components/ui/QuarterCircle.vue'
export { default as ScrollDown } from '../../components/ui/ScrollDown.vue'
export { default as ScrollIndicator } from '../../components/ui/ScrollIndicator.vue'
export { default as Slashes } from '../../components/ui/Slashes.vue'
export { default as Social } from '../../components/ui/Social.vue'
export { default as SocialMedia } from '../../components/ui/SocialMedia.vue'
export { default as Text } from '../../components/ui/Text.vue'
export { default as Logo } from '../../components/ui/logo/Logo.vue'
export { default as Logo2 } from '../../components/ui/logo/Logo2.vue'
export { default as Logo3 } from '../../components/ui/logo/Logo3.vue'
export { default as LogoTopLeft } from '../../components/ui/logo/LogoTopLeft.vue'
export { default as Portfolio } from '../../components/portfolio/Portfolio.vue'
export { default as PortfolioItem } from '../../components/portfolio/PortfolioItem.vue'
export { default as PortfolioList } from '../../components/portfolio/PortfolioList.vue'
export { default as Banner } from '../../components/section/banner/Banner.vue'
export { default as Banner2 } from '../../components/section/banner/Banner2.vue'
export { default as Banner3 } from '../../components/section/banner/Banner3.vue'
export { default as Banner4 } from '../../components/section/banner/Banner4.vue'
export { default as ApproachList } from '../../components/approach/ApproachList.vue'
export { default as ApproachList2 } from '../../components/approach/ApproachList2.vue'

export const LazyButton = import('../../components/section/navigation/left/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const LazyButton2 = import('../../components/section/navigation/left/Button2.vue' /* webpackChunkName: "components/button2" */).then(c => wrapFunctional(c.default || c))
export const LazyCopyright = import('../../components/section/navigation/left/Copyright.vue' /* webpackChunkName: "components/copyright" */).then(c => wrapFunctional(c.default || c))
export const LazyMenu = import('../../components/section/navigation/left/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuItems = import('../../components/section/navigation/left/MenuItems.vue' /* webpackChunkName: "components/menu-items" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigationLeft = import('../../components/section/navigation/left/NavigationLeft.vue' /* webpackChunkName: "components/navigation-left" */).then(c => wrapFunctional(c.default || c))
export const LazySidebar = import('../../components/section/navigation/left/Sidebar.vue' /* webpackChunkName: "components/sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigationTop = import('../../components/section/navigation/top/NavigationTop.vue' /* webpackChunkName: "components/navigation-top" */).then(c => wrapFunctional(c.default || c))
export const LazyAccordion = import('../../components/ui/Accordion.vue' /* webpackChunkName: "components/accordion" */).then(c => wrapFunctional(c.default || c))
export const LazyArrowDown = import('../../components/ui/ArrowDown.vue' /* webpackChunkName: "components/arrow-down" */).then(c => wrapFunctional(c.default || c))
export const LazyArrows = import('../../components/ui/Arrows.vue' /* webpackChunkName: "components/arrows" */).then(c => wrapFunctional(c.default || c))
export const LazyBannerCircle = import('../../components/ui/BannerCircle.vue' /* webpackChunkName: "components/banner-circle" */).then(c => wrapFunctional(c.default || c))
export const LazyBlockText = import('../../components/ui/BlockText.vue' /* webpackChunkName: "components/block-text" */).then(c => wrapFunctional(c.default || c))
export const LazyFloatingCircles = import('../../components/ui/FloatingCircles.vue' /* webpackChunkName: "components/floating-circles" */).then(c => wrapFunctional(c.default || c))
export const LazyLines = import('../../components/ui/Lines.vue' /* webpackChunkName: "components/lines" */).then(c => wrapFunctional(c.default || c))
export const LazyLoading = import('../../components/ui/Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const LazyQuarterCircle = import('../../components/ui/QuarterCircle.vue' /* webpackChunkName: "components/quarter-circle" */).then(c => wrapFunctional(c.default || c))
export const LazyScrollDown = import('../../components/ui/ScrollDown.vue' /* webpackChunkName: "components/scroll-down" */).then(c => wrapFunctional(c.default || c))
export const LazyScrollIndicator = import('../../components/ui/ScrollIndicator.vue' /* webpackChunkName: "components/scroll-indicator" */).then(c => wrapFunctional(c.default || c))
export const LazySlashes = import('../../components/ui/Slashes.vue' /* webpackChunkName: "components/slashes" */).then(c => wrapFunctional(c.default || c))
export const LazySocial = import('../../components/ui/Social.vue' /* webpackChunkName: "components/social" */).then(c => wrapFunctional(c.default || c))
export const LazySocialMedia = import('../../components/ui/SocialMedia.vue' /* webpackChunkName: "components/social-media" */).then(c => wrapFunctional(c.default || c))
export const LazyText = import('../../components/ui/Text.vue' /* webpackChunkName: "components/text" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/ui/logo/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo2 = import('../../components/ui/logo/Logo2.vue' /* webpackChunkName: "components/logo2" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo3 = import('../../components/ui/logo/Logo3.vue' /* webpackChunkName: "components/logo3" */).then(c => wrapFunctional(c.default || c))
export const LazyLogoTopLeft = import('../../components/ui/logo/LogoTopLeft.vue' /* webpackChunkName: "components/logo-top-left" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolio = import('../../components/portfolio/Portfolio.vue' /* webpackChunkName: "components/portfolio" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolioItem = import('../../components/portfolio/PortfolioItem.vue' /* webpackChunkName: "components/portfolio-item" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfolioList = import('../../components/portfolio/PortfolioList.vue' /* webpackChunkName: "components/portfolio-list" */).then(c => wrapFunctional(c.default || c))
export const LazyBanner = import('../../components/section/banner/Banner.vue' /* webpackChunkName: "components/banner" */).then(c => wrapFunctional(c.default || c))
export const LazyBanner2 = import('../../components/section/banner/Banner2.vue' /* webpackChunkName: "components/banner2" */).then(c => wrapFunctional(c.default || c))
export const LazyBanner3 = import('../../components/section/banner/Banner3.vue' /* webpackChunkName: "components/banner3" */).then(c => wrapFunctional(c.default || c))
export const LazyBanner4 = import('../../components/section/banner/Banner4.vue' /* webpackChunkName: "components/banner4" */).then(c => wrapFunctional(c.default || c))
export const LazyApproachList = import('../../components/approach/ApproachList.vue' /* webpackChunkName: "components/approach-list" */).then(c => wrapFunctional(c.default || c))
export const LazyApproachList2 = import('../../components/approach/ApproachList2.vue' /* webpackChunkName: "components/approach-list2" */).then(c => wrapFunctional(c.default || c))
