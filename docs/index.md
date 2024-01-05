---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "SPŠ Maturita"
  text: "Poznámky k maturitě na SPŠ Jedovnice"
  tagline: Je to pogchamp
  image:
    src: /spslogo.svg
    alt: Logo
  actions:
    - theme: brand
      text: Do toho !
      link: /ops
    - theme: alt
      text: Nefunkční tlačítko (Jako výuka na SPŠ)
      link: /api-examples

features:
  - title: Veřejné
    icon:
      src: /commie.svg
    details: Pro všechny ke čtení online zdarma
  - title: Open Source
    icon:
      src: /opensource.svg
    details: Zdrojový kód je pro všechny veřejný na Githubu
  - title: Markdown
    icon:
      src: /markdown.svg
    details: Všechny poznámky jsou ve formátu Markdown. Mužete si je zkopírovat do vašeho oblíbeného poznákového softwaru (např. Obsidian)
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(90deg, rgba(39,118,255,1) 0%, rgba(22,134,246,1) 36%, rgba(151,206,255,1) 100%);
}

</style>