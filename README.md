# Site ISSEP 2027

Site statique de la conférence ISSEP 2027 (Belgique), construit avec [VitePress](https://vitepress.dev/), en français (langue par défaut) et en anglais.

## Structure

```
.
├── .vitepress/config.mjs   # configuration du site (nav, langues, thème)
├── index.md                # page d'accueil (FR)
├── programme.md
├── intervenants.md
├── lieu.md
├── inscription.md
├── contact.md
├── en/                      # version anglaise (mêmes pages)
├── public/                  # fichiers statiques (logo, images...)
└── .github/workflows/deploy.yml  # déploiement automatique sur GitHub Pages
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

## Déploiement sur GitHub Pages

1. Créez un dépôt GitHub et poussez ce projet sur la branche `main`.
2. Dans les paramètres du dépôt, section **Pages**, choisissez **GitHub Actions** comme source.
3. Ouvrez `.vitepress/config.mjs` et mettez à jour la valeur de `base` :
   - `'/<nom-du-depot>/'` si le site est servi depuis `https://<utilisateur>.github.io/<nom-du-depot>/` ;
   - `'/'` s'il s'agit d'un site utilisateur/organisation (`https://<utilisateur>.github.io/`) ou d'un domaine personnalisé.
4. À chaque `push` sur `main`, le workflow `.github/workflows/deploy.yml` construit et publie automatiquement le site.

## Prochaines étapes suggérées

- Remplacer les informations « à définir » (dates, lieu, tarifs, contact) une fois connues.
- Ajouter les intervenants et le programme au fur et à mesure des confirmations.
- Ajouter un logo dans `public/` et le référencer dans `.vitepress/config.mjs` (`themeConfig.logo`).
- Ajouter un nom de domaine personnalisé si besoin (fichier `public/CNAME`).
