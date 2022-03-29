const { description } = require('../../package')

module.exports = {
  base:'/my-TIL/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: `Sun Ah's Blog`,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#F88379' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "192x192",
        href: "images/maskable_icon_x192.png",
      },
    ],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-T05FCHQC7K",
        // GA에서 발급받은 코드
      },
    ],
    [
      "script",
      {},
      [
        "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-T05FCHQC7K');",
      ],
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: [
      '/intro.md',
      {
        title: "Git", 
        collapsable: true, // 사이드 바 안뜸
        children: ['/git/git-start']
      },
      {
        title: "Django",
        collapsable: true,
        children: ['/django/django-start']
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'reading-progress',
    ["sitemap", { hostname: "https://Username.github.io/TIL" }],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "새 컨텐츠가 등록되었습니다. 새로고침 버튼을 눌러주세요😀",
          buttonText: "새로고침",
        },
      },
    ],
    [
      'vuepress-plugin-code-copy',
      {
        backgroundColor: '#42b883',
        color: '#42b883',
        backgroundTransition: true,
        successText: 'copied!',
        staticIcon: false,
      },
    ],    
  ]
}
