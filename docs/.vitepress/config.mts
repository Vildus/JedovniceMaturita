import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SPŠ Maturita",
  description: "Poznámky k maturitě na SPŠ Jedovnice",
  head: [
    ['link', { rel: 'icon', href: '/spslogo.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/spslogo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ELN', link: '/soucastky' },
      { text: 'EPO', link: '/struktura' },
      { text: 'NEGR', link: '/ops' }
    ],

    sidebar: [
      {
        text: 'Elektronika',
        items: [
          { text: 'Součástky', link: '/soucastky'}
        ]
      },
      {
        text: 'EPO',
        items: [
          { text: 'Struktura počítače a prosecory', link: '/struktura'},
          { text: 'Vnější paměti', link: '/vnejsiPameti'}
        ]
      },
      {
        text: 'Operační systémy',
        items: [
          { text: 'Operační systémy obecně', link: '/ops' },
          { text: 'Správa procesů', link: '/procesy' },
        ]
      },
    ],
    outline: {
      level: [2, 3],
      label: 'Na této stránce'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Vildus/JedovniceMaturita' },
      { icon: 'discord', link: 'https://discord.gg/MdAwAc8yGR' }
    ],

    search: {
      provider: 'local'
    },
    footer: {
      message: 'Vydáno pod MIT Licencí',
      copyright: 'Copyright © 2024 Vilém Pořízka'
    }
  },
  cleanUrls: true
})
