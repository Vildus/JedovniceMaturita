import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SPŠ Maturita",
  description: "Poznáky k maturitě na SPŠ Jedovnice",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/spslogo.svg',
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
      { icon: 'github', link: 'https://github.com/Vildus/JedovniceMaturita' },
      { icon: 'discord', link: 'https://discord.gg/MdAwAc8yGR' }
    ],

    search: {
      provider: 'local'
    }
  },
  cleanUrls: true
})
