import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ISSEP 2027',
  description: 'ISSEP 2027 Conference — Belgium',

  // IMPORTANT: if the site is published at https://<user>.github.io/<repo>/,
  // replace the value below with '/<repo-name>/'.
  // For a user/organization site (https://<user>.github.io/)
  // or a custom domain, use '/'.
  base: '/issep2027-site/',

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
          { text: 'Program', link: '/programme' },
          { text: 'Speakers', link: '/intervenants' },
          { text: 'Venue', link: '/lieu' },
          { text: 'Registration', link: '/inscription' },
          { text: 'Contact', link: '/contact' },
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
          { text: 'Programme', link: '/fr/programme' },
          { text: 'Intervenants', link: '/fr/intervenants' },
          { text: 'Lieu', link: '/fr/lieu' },
          { text: 'Inscription', link: '/fr/inscription' },
          { text: 'Contact', link: '/fr/contact' },
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
