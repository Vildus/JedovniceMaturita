import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SPŠ Maturita",
  description: "Poznáky k maturitě na SPŠ Jedovnice",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Operační systémy', link: '/ops' }
    ],

    sidebar: [
      {
        text: 'Operační systémy',
        items: [
          { text: 'Správa procesů', link: '/ops' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  cleanUrls: true
})
