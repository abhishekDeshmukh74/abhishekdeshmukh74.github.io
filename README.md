# Abhishek Deshmukh — Personal Portfolio

A modern, animated personal portfolio website built that showcases professional experience, projects, and skills.

🌐 **Live site:** [abhishekdeshmukh.com](https://www.abhishekdeshmukh.com)

---

## Features

- **Animated hero section** — character-by-character text reveal, floating profile photo, and staggered entry animations powered by [Motion](https://motion.dev/)
- **Custom cursor** — smooth spring-physics cursor for desktop, hidden on touch devices
- **Scroll progress bar** — vertical side-bar that tracks reading progress
- **About section** — profile summary with an interactive 3-D globe (COBE) and card tilt effects
- **Experience timeline** — vertical card-based timeline of the full 8+ year career history
- **Skills section** — animated icon cloud (react-icon-cloud) and a tech marquee strip
- **Projects gallery** — filterable project cards with live demo and source code links
- **Responsive design** — mobile-first layout using Tailwind utility classes
- **Image optimisation** — build-time image compression via `vite-plugin-image-optimizer` + Sharp
- **One-command deploy** — GitHub Pages deployment via `gh-pages`

---

## Tech Stack

| Category | Libraries / Tools |
|---|---|
| Framework | React 19, TypeScript, Vite 7 |
| Styling | Tailwind CSS v4, tw-animate-css |
| Animation | Motion (Framer Motion v12), GSAP 3 |
| 3-D / Graphics | COBE (WebGL globe), OGL |
| Icons | Lucide React, React Icons, Simple Icons |
| UI Utilities | class-variance-authority, clsx, tailwind-merge |
| Email | EmailJS Browser |
| Notifications | React Toastify |
| Dev Tools | ESLint, Sharp, vite-plugin-image-optimizer |
| Deployment | GitHub Pages (`gh-pages`) |

---

## Project Structure

```
src/
├── assets/
│   ├── fonts/            # Custom fonts
│   ├── projects/         # Project screenshot images
│   └── tools/            # Company / tool logos
├── components/
│   ├── atoms/            # Smallest reusable UI pieces (SectionHeading, TagBadge)
│   ├── magicui/          # Animated primitives (icon-cloud, marquee)
│   ├── molecules/        # Composite cards (ExperienceCard, ProjectCard, SkillCard)
│   ├── organisms/        # Full page sections (Navbar, Hero, About, Experience, Skills, Projects)
│   ├── templates/        # Page layout wrappers (MainLayout)
│   └── ui/               # Standalone UI widgets (Galaxy, ProfileCard, TiltedCard)
├── constants.ts          # ⭐ ALL portfolio data lives here — edit to personalise
├── info/                 # Re-exports from constants for convenience
├── lib/
│   └── utils.ts          # Tailwind merge helper
└── pages/
    └── HomePage.tsx      # Composes all sections into a single page
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/abhishekDeshmukh74/abhishekdeshmukh74.github.io.git
cd abhishekdeshmukh74.github.io
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173` with Hot Module Replacement.

### Build

```bash
npm run build
```

Outputs an optimised production bundle to `dist/`.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Personalising the Portfolio

All content — profile info, experience, projects, and skills — is centralised in **[`src/constants.ts`](src/constants.ts)**. To make this portfolio your own:

1. Update the `profile` object with your name, title, email, social links, and about text.
2. Replace entries in the `experiences` array with your own work history.
3. Add your projects to the `projects` array, drop screenshots into `src/assets/projects/`, and update the imports.
4. Adjust `slugs` (the tech-icon globe) and `skillSet` to reflect your skill set.
5. Swap out your photo at `src/assets/me.png`.

---

## Deployment

The site is deployed to GitHub Pages via the `gh-pages` package.

```bash
npm run deploy
```

This runs `npm run build` first (via the `predeploy` hook) and then pushes the `dist/` folder to the `gh-pages` branch.

The `homepage` field in `package.json` controls the base URL:

```json
"homepage": "https://abhishekdeshmukh.com"
```

---

## License

This project is open-source and available under the [MIT License](LICENSE).
