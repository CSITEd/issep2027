import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ISSEP 2027',
  description: 'ISSEP 2027 Conference — Belgium',

  // Served from the custom domain issep2027.csited.be (see public/CNAME),
  // so the site lives at the domain root.
  base: '/',

  cleanUrls: true,

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'ISSEP 2027',
      description: 'ISSEP 2027 Conference — Belgium',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Venue', link: '/venue' },
          { text: 'Committees', link: '/committees' },
        ],
        footer: {
          message: 'Website for the ISSEP 2027 conference.',
          copyright: '© 2026–2027 ISSEP',
        },
      },
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/',
      title: 'ISSEP 2027',
      description: 'Conférence ISSEP 2027 — Belgique',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Lieu', link: '/fr/venue' },
          { text: 'Comités', link: '/fr/committees' },
        ],
        footer: {
          message: 'Site de la conférence ISSEP 2027.',
          copyright: '© 2026–2027 ISSEP',
        },
        outline: {
          label: 'Sur cette page',
        },
        docFooter: {
          prev: 'Page précédente',
          next: 'Page suivante',
        },
        darkModeSwitchLabel: 'Apparence',
        returnToTopLabel: 'Retour en haut',
      },
    },
  },

  themeConfig: {
    search: {
      provider: 'local',
    },
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/<organisation>/<depot>' },
    ],
  },
})
