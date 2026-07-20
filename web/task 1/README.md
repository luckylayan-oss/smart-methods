# Layan Alghamdi — Portfolio

A modern, responsive personal portfolio website built with React, Vite, and
Tailwind CSS. Showcases projects, skills, and experience with smooth page
transitions, a dark/light theme toggle, and an accessible, keyboard-friendly
UI.

**Live sections:** Home · About · Projects · Skills · Contact

## Tech Stack

- **[React 18](https://react.dev/)** — UI library
- **[Vite](https://vitejs.dev/)** — build tool & dev server
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first styling with a
  custom dark-navy / teal theme
- **[React Router](https://reactrouter.com/)** — client-side routing
- **[Framer Motion](https://www.framer.com/motion/)** — page transitions &
  micro-interactions
- **[lucide-react](https://lucide.dev/)** — icon set

No backend or database is required — this is a fully static site. The
contact form uses a `mailto:` link to open the visitor's default email
client with a pre-filled message.

## Project Structure

```
task 1/
├── public/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageTransition.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── SkillBadge.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── nav.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── socials.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

### Installation

From inside this project folder (`task 1`), run:

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

This starts Vite's dev server (default: `http://localhost:5173`) with hot
module reloading.

### Build for production

```bash
npm run build
```

Outputs an optimized static build to the `dist/` folder.

### Preview the production build locally

```bash
npm run preview
```

### Lint the codebase

```bash
npm run lint
```

## Customizing

- **Content** — edit `src/data/projects.js`, `src/data/skills.js`, and
  `src/data/socials.js` to swap in your own projects, skills, and social
  links. Personal copy (name, bio, experience) lives directly in
  `src/pages/Home.jsx` and `src/pages/About.jsx`.
- **Colors** — the dark-navy/teal palette is defined in `tailwind.config.js`
  under `theme.extend.colors` (`navy`, `teal`, `slate`).
- **Fonts** — Inter (body) and Fira Code (monospace accents) are loaded from
  Google Fonts in `index.html` and wired up in `tailwind.config.js`.
- **Resume** — replace `public/resume.pdf` with your actual résumé (same
  filename, or update the link in `src/pages/About.jsx`).

## Notes & Assumptions

A few implementation details were decided for you since the brief left them
open:

- **Tech "logos"** in the Skills section use `lucide-react` category icons
  (code, layout, server, database) rather than third-party brand logo
  images, avoiding external logo licensing/CDN dependencies while keeping
  the visual language consistent with the rest of the icon set.
- **Placeholder links** for GitHub/live-demo project links and social
  profiles point to plausible but fictional URLs (e.g.
  `github.com/layanalghamdi-dev/...`) — replace these with real links.
- **Résumé download** points to a placeholder `resume.pdf` in `public/` so
  the download button is fully functional out of the box; swap the file for
  a real résumé.
- **Contact form** is intentionally frontend-only (no backend/API), per the
  spec — it composes a `mailto:` link on submit rather than sending data to
  a server.
- **Routing model**: each nav item (Home, About, Projects, Skills, Contact)
  is a distinct route (not in-page anchors), which better fits "smooth page
  transitions" via Framer Motion; smooth *scrolling* is still enabled
  site-wide via CSS (`scroll-behavior: smooth`) for any in-page anchors.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`)
- Skip-to-content link for keyboard users
- Visible focus states on all interactive elements
- `aria-label` / `aria-expanded` / `aria-pressed` on icon-only controls
- Sufficient color contrast in both light and dark themes
- Respects reduced-motion-friendly, non-essential animations (decorative
  only; no motion blocks interaction)

## Browser Support

Latest versions of Chrome, Firefox, Safari, and Edge.
