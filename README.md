# T Zewdu — Full Stack Developer Portfolio

[![TypeScript](https://img.shields.io/badge/TypeScript-~6.0.2-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A modern, responsive portfolio website for **T Zewdu**, a full stack developer who builds **"seamless experiences from pixel to protocol"** — from pixel-level UI detail to database architecture and server-side logic.

**Live site:** [https://tzewdu.goodtess.com](https://tzewdu.goodtess.com)

---

## ✨ Features

- **Hero with typewriter effect** — animated tagline, ghost watermark, live stat bar (years experience, projects shipped) and scroll indicator
- **Collapsible sidebar navigation** — icon-only rail on desktop, slide-in drawer with backdrop on mobile
- **About section** — bio, experience & education timeline, and tech stack grid
- **Interactive tech stack** — 12 technologies with SVG icons, proficiency bars and hover tooltips, plus a "currently exploring" list
- **Filterable project gallery** — live/demo projects with category filtering, scroll-reveal animations, GitHub / live demo / video links, and an in-page video modal (YouTube or local MP4)
- **Skills & tools breakdown** — Frontend, Backend, and DevOps categories with proficiency stats
- **Interactive résumé** — expandable project highlights, technical skills, professional strengths and languages
- **Contact form** — client-side validation, simulated submission with success state, social links and info cards
- **Back-to-top button** — floating gold button with glow, ripple and pulse animations
- **Full responsiveness** — mobile-first layouts down to small screens
- **Accessibility** — semantic HTML, ARIA labels, `:focus-visible` styles, and `prefers-reduced-motion` support

---

## 🛠 Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS 4](https://tailwindcss.com/) |
| Build tooling | [Vite 8](https://vitejs.dev/), PostCSS, Autoprefixer |
| Icons | [lucide-react](https://lucide.dev/), [react-icons](https://react-icons.github.io/react-icons/) |
| Code quality | ESLint, Prettier |

### Technologies featured in the portfolio

- **Frontend:** React, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap
- **Backend & data:** Node.js, Express.js, MySQL, MongoDB, PostgreSQL, Redis, REST APIs
- **DevOps & tools:** Git & GitHub, GitHub Actions, Netlify, Render, VS Code, Postman

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **20.19+** or **22.12+** (required by Vite 8) — this repo was developed on Node 22
- npm (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/good12834/tzewdu-portfolio.git
cd tzewdu-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The dev server starts at [http://localhost:5173](http://localhost:5173) and opens your browser automatically.

### Production build

```bash
npm run build        # type-check (tsc) + production build → dist/
npm run preview      # preview the production build locally
```

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR at `localhost:5173` |
| `npm run build` | Run TypeScript type-checking, then produce an optimized build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint `src/**/*.{ts,tsx}` with ESLint |
| `npm run lint:fix` | Lint and auto-fix issues |
| `npm run format` | Format source files with Prettier |
| `npm run type-check` | Run `tsc --noEmit` without emitting files |
---

## 📁 Project Structure

```
tzewdu-portfolio/
├── public/
│   └── resume.txt                 # Downloadable résumé
├── src/
│   ├── assets/                    # Local project screenshots & images
│   ├── components/
│   │   ├── Sidebar.tsx            # Nav sidebar (drawer on mobile, collapsible on desktop)
│   │   ├── Hero.tsx               # Landing hero with typewriter + stats
│   │   ├── About.tsx              # Bio, timeline, tech stack grid
│   │   ├── TechStack.tsx          # Technology cards + proficiency + exploring
│   │   ├── Projects.tsx           # Filterable project gallery + video modal
│   │   ├── Skills.tsx             # Skill categories + stats
│   │   ├── Resume.tsx             # Interactive résumé section
│   │   ├── Contact.tsx            # Contact form + socials
│   │   ├── Footer.tsx             # Site footer
│   │   └── BackToTop.tsx          # Floating scroll-to-top button
│   ├── App.tsx                    # App shell — section composition & sidebar state
│   ├── main.tsx                   # React entry point
│   ├── index.css                  # Tailwind entry + global styles
│   └── vite-env.d.ts
├── index.html                     # HTML entry + SEO / OG / Twitter meta tags
├── vite.config.ts                 # Vite config + path aliases + chunking
├── tailwind.config.js             # Tailwind theme (gold palette, fonts, animations)
├── tsconfig.json                  # Strict TypeScript config + path mapping
├── eslint.config.js               # ESLint flat config
├── postcss.config.js
└── package.json
```

### Path aliases

The following aliases are configured in both `vite.config.ts` and `tsconfig.json`:

| Alias | Resolves to |
| --- | --- |
| `@/` | `src/` |
| `@components/` | `src/components/` |
| `@utils/` | `src/utils/` |
| `@types/` | `src/types/` |

---

## 🎨 Design System

The site uses a custom light theme built around an elegant **gold-on-ivory** palette:

- **Gold accent:** `#C9933A` with a full 50–900 scale (`tailwind.config.js`)
- **Base background:** `#fdfdff`, body text `#7A5C1E`
- **Typography:** Inter for UI text, **DM Serif Display** for display headings, **Space Grotesk** for the sidebar brand
- **Signature details:** hairline gold rules, subtle grid-line SVGs, italic serif headings, gold selection & scrollbar styling

---

## 📦 Deployment

The project builds to a static site with Vite and can be deployed to any static host such as **Netlify**, **Vercel**, or **GitHub Pages**:

```bash
npm run build
# upload / deploy the dist/ folder to your host
```

Live deployment: [https://tzewdu.goodtess.com](https://tzewdu.goodtess.com)

---

## 🧑‍💻 About the Author

**T Zewdu** is a Full Stack Developer based in Ethiopia, open to remote opportunities. An Evangadi Institute Full Stack Web Development Bootcamp graduate (Mar 2025 – Sep 2025), he has shipped 30+ projects covering streaming platforms, e-commerce, and productivity tools.

### Connect

- **Portfolio:** [tzewdu.goodtess.com](https://tzewdu.goodtess.com)
- **GitHub:** [@good12834](https://github.com/good12834)
- **LinkedIn:** [good-man-15b4252a8](https://www.linkedin.com/in/good-man-15b4252a8/)
- **Twitter/X:** [@tzewdu](https://twitter.com/tzewdu)
- **Email:** [goodpersonh208686@gmail.com](mailto:goodpersonh208686@gmail.com)

---

## 📄 License

Released under the [MIT License](https://opensource.org/licenses/MIT).

---

*Built with React, TypeScript & Tailwind CSS. © 2026 T. Zewdu.*