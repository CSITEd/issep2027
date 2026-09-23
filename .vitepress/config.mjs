import { defineConfig } from 'vitepress'

// The site was built with AI assistance (this Claude session), with every
// piece of code, graphics and text reviewed and curated by a human editor
// before publishing. This renders the small transparency note shown next
// to the footer's copyright line, using the EU's own "Basic" AI-disclosure
// icon (see https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content) -
// freely usable without attribution. Two <img> tags are included (rather
// than one swapped via CSS `content` or `background-image`, which can't
// target an <img>'s src) so the icon's black/white variant can be toggled
// for light/dark mode in custom.css.
const aiDisclosure = (text) =>
  '<span class="ai-disclosure">' +
  '<img src="/eu-ai-basic-black.png" alt="" class="ai-disclosure-icon icon-light" />' +
  '<img src="/eu-ai-basic-white.png" alt="" class="ai-disclosure-icon icon-dark" />' +
  text +
  '</span>'

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
          message:
            'Co-organised by:<br>' +
            '<span class="footer-logos">' +
            '<img src="/csited-logo.png" alt="Computer Science and IT in Education ASBL" class="footer-logo footer-logo-csited" />' +
            '<img src="/unamur-logo.svg" alt="University of Namur" class="footer-logo" />' +
            '</span>',
          copyright:
            '© ISSEP 2027' +
            aiDisclosure('Built with AI assistance (code, graphics, and text curated by human editor).'),
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
          message:
            'Co-organisé par :<br>' +
            '<span class="footer-logos">' +
            '<img src="/csited-logo.png" alt="Computer Science and IT in Education ASBL" class="footer-logo footer-logo-csited" />' +
            '<img src="/unamur-logo.svg" alt="Université de Namur" class="footer-logo" />' +
            '</span>',
          copyright:
            '© ISSEP 2027' +
            aiDisclosure("Créé avec l'aide de l'IA (code, graphismes et textes sous supervision humaine)."),
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
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/<organisation>/<depot>' },
    ],
  },
})
