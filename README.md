# Arun Kumar — Premium 3D Animated Developer Portfolio

A cinematic, production-ready developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion + GSAP + Three.js**.

Visual identity: deep black `#050505` background with neon-lime `#C6FF00` accent, glassmorphism, 3D animated hero, and smooth motion design.

---

## ✨ Features

- **3D animated hero** — Three.js (R3F) distorted neon blob, orbiting rings, particle field, and mouse-driven parallax.
- **Loading screen** with animated counter.
- **Custom cursor** with magnetic ring (desktop).
- **Floating glassmorphism navbar** with active-section tracking + mobile menu.
- **Scroll progress indicator** (top bar).
- **GSAP ScrollTrigger** parallax on the hero.
- **Framer Motion** reveals, magnetic buttons, and **3D tilt** project cards with glare.
- Sections: Hero, About, Skills, Projects, Services, Timeline (Experience & Education), Contact.
- **Functional contact form** via `mailto:` (no backend required; swap for Formspree/EmailJS in production).
- Fully **responsive** (desktop / tablet / mobile), **SEO-friendly** metadata, semantic HTML, and **lazy-loaded** Three.js for fast first paint.

---

## 🗂 Project Structure

```
arun-portfolio/
├── index.html              # SEO metadata, fonts, JSON-LD
├── vite.config.js          # base './' for GH Pages/Vercel/Netlify
├── tailwind.config.js
├── public/
│   ├── favicon.svg
│   └── images/             # generated project preview images
└── src/
    ├── main.jsx
    ├── App.jsx             # composes all sections + preloader/cursor
    ├── index.css           # global styles, glass, grid, glow
    ├── data/
    │   └── content.js      # ⭐ ALL EDITABLE TEXT & LINKS LIVE HERE
    ├── components/
    │   ├── Preloader.jsx
    │   ├── CustomCursor.jsx
    │   ├── ScrollProgress.jsx
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Projects.jsx
    │   ├── Services.jsx
    │   ├── Timeline.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   ├── Magnetic.jsx
    │   ├── Reveal.jsx
    │   └── useTilt.js
    └── three/
        └── HeroScene.jsx   # Three.js scene (lazy-loaded)
```

---

## 🚀 Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

---

## ✏️ Edit content

Open **`src/data/content.js`** to change:
- Name, titles, bio, hero description
- Education details
- Skills (grouped by category)
- Projects (title, description, image, tech, links)
- Services & timeline
- Contact links (email, LinkedIn, GitHub, WhatsApp) and resume URL

> Project images live in `public/images/`. Replace them with real screenshots (keep the same filenames or update `content.js`).

> Where details were not provided, **editable placeholders** are used (e.g. `resumeUrl: '#'`, `whatsapp: 'https://wa.me/...'`, `email: 'arunkumar.dev@example.com'`). No fake metrics, experience, or proficiency percentages were invented.

---

## ☁️ Deploy

- **GitHub Pages**: `npm run build`, then publish the `dist/` folder (set base `./` already done).
- **Vercel / Netlify**: connect the repo; build command `npm run build`, output `dist`. No SPA redirect needed (single page with anchor scrolling).

---

## 🛠 Tech Stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion 11 · GSAP 3 · Three.js (react-three-fiber + drei) · Lucide Icons
