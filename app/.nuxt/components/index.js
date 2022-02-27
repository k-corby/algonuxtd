export { default as Button } from '../../components/section/navigation/left/Button.vue'
export { default as Copyright } from '../../components/section/navigation/left/Copyright.vue'
export { default as Menu } from '../../components/section/navigation/left/Menu.vue'
export { default as MenuItems } from '../../components/section/navigation/left/MenuItems.vue'
export { default as NavigationLeft } from '../../components/section/navigation/left/NavigationLeft.vue'
export { default as Sidebar } from '../../components/section/navigation/left/Sidebar.vue'
export { default as NavigationTop } from '../../components/section/navigation/top/NavigationTop.vue'
export { default as Accordion } from '../../components/ui/Accordion.vue'
export { default as ArrowDown } from '../../components/ui/ArrowDown.vue'
export { default as Arrows } from '../../components/ui/Arrows.vue'
export { default as BlockText } from '../../components/ui/BlockText.vue'
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

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
