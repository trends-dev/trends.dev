import './styles/index.css'
import { h, App } from 'vue'
import { VPTheme } from '@vue/theme'
import PreferenceSwitch from './components/PreferenceSwitch.vue'
import NavbarTitle from './components/NavbarTitle.vue'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'
import SponsorsAside from './components/SponsorsAside.vue'
// import VueSchoolLink from './components/VueSchoolLink.vue'
// import Banner from './components/Banner.vue'
import WwAds from './components/WwAds.vue'
import 'uno.css'

export default Object.assign({}, VPTheme, {
  Layout: () => {
    // @ts-ignore
    return h(VPTheme.Layout, null, {
      // banner: () => h(Banner),
      'aside-mid': () => h(SponsorsAside),
      'aside-bottom': () => h(WwAds),
      'navbar-title': () => h(NavbarTitle),
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    // app.component('VueSchoolLink', VueSchoolLink)
  }
})
