# Alexzandra's Portfolio

A neobrutalist real estate one-pager built with **React**, **Vite**, and **TypeScript**. Deployed on Netlify.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS (base reset only)
- Netlify Forms (contact form)
- Vitest + Testing Library

## Project Structure

```
/src
  ├── /assets        # Images, icons, SVGs
  ├── /components    # Section components (Hero, About, Work, Contact, etc.)
  ├── /data          # Static content (projects, testimonials, stats)
  ├── /test          # Vitest component tests
  ├── tokens.ts      # Design system color tokens
  └── index.css      # Global styles, animations, utility classes
/public
  ├── alexzandra_hernandez_resume.pdf
  └── index.html     # Netlify Forms static fallback
```

## Setup

```bash
git clone https://github.com/just-kato/alexzandras-portfolio.git
cd alexzandras-portfolio
npm install
npm run dev
```

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Type-check + production build
npm run test     # Run component tests
```

## Deployment

Deployed via Netlify. Push to `main` triggers an automatic build. The contact form is handled by Netlify Forms — no backend required.
