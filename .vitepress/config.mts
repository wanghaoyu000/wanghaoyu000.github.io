import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "王昊宇的学习网站",
  description: "王昊宇的学习网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'vl.', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'note',
        items: [
          { text: '配置环境', link: '/配置环境/配置环境' },
          { text: '建立仓库', link: '/建立仓库/建立仓库' },
          { text: '网站上线', link: '/网站上线/网站上线' },
          { text: 'HTML', link: '/HTML/HTML' }
        ] 
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
