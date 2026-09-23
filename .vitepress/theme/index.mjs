import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import PageBanner from './PageBanner.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // doc-top sits above the whole doc+aside two-column area (full
      // width), unlike doc-before which is inside the content column and
      // would sit next to (and get overlapped by) the outline sidebar.
      'doc-top': () => h(PageBanner),
    })
  },
}
