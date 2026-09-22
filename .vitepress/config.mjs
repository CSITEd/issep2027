import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ISSEP 2027',
  description: 'Conférence ISSEP 2027 — Belgique',

  // IMPORTANT : si le site est publié sur https://<utilisateur>.github.io/<depot>/,
  // remplacez la valeur ci-dessous par '/<nom-du-depot>/'.
  // Pour un site utilisateur/organisation (https://<utilisateur>.github.io/)
  // ou un domaine personnalisé, utilisez '/'.
  base: '/issep2027-site/',

  cleanUrls: true,

  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
      title: 'ISSEP 2027',
      description: 'Conférence ISSEP 2027 — Belgique',
      themeConfig: {
        nav: [
          { text: 'Accueil', link: '/' },
          { text: 'Programme', link: '/programme' },
          { text: 'Intervenants', link: '/intervenants' },
          { text: 'Lieu', link: '/lieu' },
          { text: 'Inscription', link: '/inscription' },
          { text: 'Contact', link: '/contact' },
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
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'ISSEP 2027',
      description: 'ISSEP 2027 Conference — Belgium',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Program', link: '/en/programme' },
          { text: 'Speakers', link: '/en/intervenants' },
          { text: 'Venue', link: '/en/lieu' },
          { text: 'Registration', link: '/en/inscription' },
          { text: 'Contact', link: '/en/contact' },
        ],
        footer: {
          message: 'Website for the ISSEP 2027 conference.',
          copyright: '© 2026–2027 ISSEP',
        },
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
