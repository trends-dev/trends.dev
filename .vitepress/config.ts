import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
import UnoCss from 'unocss/vite'

const nav: ThemeConfig['nav'] = [
  { text: '开源好物', link: '/open-source/', },
  { text: 'Vue 专栏', activeMatch: `^/(vue|vue3)/`,items:[
    { text: '小技巧', link: '/vue/' },
  ] },
  { text: 'ChatGPT 专栏', link: '/gpt/', },
  { text: '关于', activeMatch: `^/(about)/`,items:[
    { text: '团队', link: '/about/team' },
    { text: '投稿', link: '/about/column' },
  ] },
  { text: '赞助', link: '/sponsor/', },
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/open-source/': [
    {
      text: '开源好物',
      items:[
        { text:'首页', link:'/open-source/' },
        { text:'第一期 4月9日-4月15日', link:'/open-source/2023/4.9-4.15' },
        { text:'第二期 4月16日-4月22日', link:'/open-source/2023/4.16-4.22' }
      ]
    }
  ],
  '/vue/':[
    {
      text: 'Vue 小技巧',
      items:[
        { text:'首页', link:'/vue/' },
        { text:'鼠标监听事件', link:'/vue/vue3/0001-mouse-listener-event' },
        { text:'插槽样式', link:'/vue/vue3/0002-slots-style' },
        { text:'使用 shallowRef', link:'/vue/vue3/0003-shallow-ref' },
        { text:'使用 Template', link:'/vue/vue3/0004-template' },
        { text:'制作一个 v-for 组件', link:'/vue/vue3/0005-v-for-components' },
        { text:'如何动态渲染 Class', link:'/vue/vue3/0006-v-bind-class' },
        { text:'组合式的小技巧', link:'/vue/vue3/0007-composables' },
        { text:'reactive 的小技巧', link:'/vue/vue3/0008-reactive' },
        { text:'Ref 的小技巧', link:'/vue/vue3/0009-ref' },
        { text:'Vue组件参数的小提议', link:'/vue/vue3/0010-vue-props' },
        { text:'setup 小技巧', link:'/vue/vue3/0011-vue-setup' },
        { text:'v-bind 小技巧', link:'/vue/vue3/0012-v-bind' },
        { text:'vue Devtools 的小技巧', link:'/vue/vue3/0013-vue-config' },
        { text:'v-show 的小技巧', link:'/vue/vue3/0014-v-show' },
        { text:'自定义指令', link:'/vue/vue3/0015-vue-directives' },
        { text:'vue版本', link:'/vue/vue3/0016-vue-version' },
      ]
    }
  ],
  '/gpt/': [
    {
      text: 'ChatGPT专栏',
      items:[
        { text:'首页', link:'/gpt/' },
        { text:'如何使用', link:'/gpt/how-to-use/how-to-use' },
      ]
    }
  ],
  '/sponsor/': [
    {
      text: '赞助我们',
      items:[
        { text:'首页', link:'/sponsor/' },
      ]
    }
  ],

}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'zh-CN',
  title: '编程潮流',
  description: '一个保持开源，开放理念的交流平台',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://sponsors.vuejs.org'
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'ZPMMDSYA',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'script',
      {
        src: 'https://vueschool.io/banner.js?affiliate=vuejs&type=top',
        async: 'true'
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,
    i18n:{
      locales:'中文平台',
      appearance: '外观'
    },

    // carbonAds: {
    //   code: 'CEBDT27Y',
    //   placement: 'vuejsorg'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/trends-dev' },
      // { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      // { icon: 'discord', link: 'https://discord.com/invite/HBherRA' }
    ],

    footer: {
      license: {
        text: '版权声明',
        link: 'https://github.com/trends-dev/trends.dev/blob/main/LICENSE'
      },
      copyright: `本文档内容版权为 Fenta 和 Elone Hoo 所有，保留所有权利。`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    plugins:[
      UnoCss()
    ],
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  }
})
