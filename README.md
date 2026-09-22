# Site ISSEP 2027

Site statique de la conférence ISSEP 2027 (Belgique), construit avec [VitePress](https://vitepress.dev/), en anglais (langue par défaut) et en français. Publié sur **https://issep2027.csited.be**.

## Structure

```
.
├── .vitepress/
│   ├── config.mjs           # configuration du site (nav, langues, thème)
│   └── theme/                # thème personnalisé (bannière avec photo en fond)
├── index.md                  # page d'accueil (EN)
├── venue.md
├── committees.md
├── fr/                        # version française (mêmes pages)
├── public/
│   ├── namur-landscape.jpg   # photo de fond de la page d'accueil
│   └── CNAME                  # domaine personnalisé pour GitHub Pages
└── .github/workflows/deploy.yml  # build + déploiement automatique sur push
```

## Développement local

Prérequis : [Node.js](https://nodejs.org/) 18 ou plus récent, et [Yarn](https://yarnpkg.com/) (via [Corepack](https://yarnpkg.com/corepack), inclus avec Node ≥ 16.10 : lancez `corepack enable` une fois si besoin).

```bash
yarn install
yarn docs:dev
```

Le site est alors accessible sur `http://localhost:5173`.

Le premier `yarn install` génère un fichier `yarn.lock` : pensez à le committer, le workflow de déploiement en a besoin (`yarn install --immutable`).

## Build

```bash
yarn docs:build
yarn docs:preview   # pour prévisualiser le build en local
```

## Déploiement automatique sur GitHub Pages (domaine personnalisé)

Le dépôt est [CSITEd/issep2027](https://github.com/CSITEd/issep2027). Le workflow `.github/workflows/deploy.yml` build et publie automatiquement le site à chaque `push` sur `main`. Le fichier `public/CNAME` (contenant `issep2027.csited.be`) est inclus dans le build, et `base: '/'` dans `.vitepress/config.mjs` est déjà configuré pour un domaine personnalisé (pas de sous-chemin de type `/issep2027-site/`).

Il reste deux réglages à faire une seule fois, **en dehors du code** :

1. **Activer GitHub Pages sur le dépôt**
   Dans le dépôt GitHub → **Settings → Pages** → section *Build and deployment* → **Source : GitHub Actions**.

2. **Déclarer le domaine personnalisé et configurer le DNS**
   - Toujours dans **Settings → Pages**, section *Custom domain*, entrez `issep2027.csited.be` et sauvegardez.
   - Chez votre fournisseur DNS pour `csited.be`, ajoutez un enregistrement **CNAME** :
     | Type  | Nom (hôte)  | Valeur              |
     |-------|-------------|----------------------|
     | CNAME | `issep2027` | `csited.github.io.`  |
   - Attendez la propagation DNS (de quelques minutes à quelques heures), puis revenez sur **Settings → Pages** : GitHub doit afficher que le domaine est vérifié, et propose alors la case **Enforce HTTPS** — cochez-la une fois disponible.

Une fois ces deux points réglés, chaque `push` sur `main` (ou un déclenchement manuel via l'onglet **Actions**) construit et publie automatiquement le site sur https://issep2027.csited.be.

> Note : la publication GitHub Pages via Actions nécessite un dépôt public, sauf si votre organisation dispose d'un abonnement GitHub Pro/Team/Enterprise permettant les Pages sur dépôt privé.

## Prochaines étapes suggérées

- Remplacer les informations « à définir » (dates, lieu, tarifs, contact) une fois connues.
- Ajouter les intervenants et le programme au fur et à mesure des confirmations.
- Ajouter un logo dans `public/` et le référencer dans `.vitepress/config.mjs` (`themeConfig.logo`).
