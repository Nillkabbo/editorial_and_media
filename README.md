# LaTech Editorial Publishing

Mission-driven platform for scholarly publishing, editorial excellence, and public education.

## MVP Scope

This static site includes:
- Scholarly article publishing
- Editorial/opinion content
- Writing support resources
- Impact/reach information
- Support/donation page (placeholder)
- Full policy pages

## Tech Stack

- **Astro** (static site generator)
- **Markdown** content collections
- **TypeScript** (strict mode)
- **GitHub Pages** hosting
- **GitHub Actions** CI/CD

## Local Development

### Prerequisites
- Node.js 18+ (LTS recommended)

### Commands
```bash
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production
npm run preview    # Preview production build
npm start          # Alias for npm run dev
```

## Adding Content

### Adding a Scholarly Article

Create a new file in `src/content/scholarly/your-slug.md`:

```markdown
---
title: "Your Article Title"
description: "Brief description for SEO (max 160 characters)"
date: 2024-01-20
author: "Author Name"
tags: ["tag1", "tag2"]
readingTime: 10
featured: false
---

Your markdown content here...
```

### Adding an Editorial Post

Create in `src/content/editorial/your-slug.md` with same format plus:
```yaml
category: "opinion" | "analysis" | "commentary" | "review"
```

### Adding a Resource

Create in `src/content/resources/your-slug.md` with:
```yaml
type: "guide" | "template" | "checklist" | "reference"
difficulty: "beginner" | "intermediate" | "advanced" (optional)
```

## Deployment

### GitHub Pages Setup

1. Push to GitHub repository
2. Go to Settings > Pages
3. Source: GitHub Actions
4. Custom domain: latecheditorialpublishing.com

### DNS Configuration

Add these records at your domain registrar:
- A record: 185.199.108.153
- A record: 185.199.109.153
- A record: 185.199.110.153
- A record: 185.199.111.153
- CNAME www: yourusername.github.io

### Formspree Setup (Optional)

1. Create account at formspree.io
2. Create new form
3. Copy form ID
4. Replace `YOUR_FORM_ID` in `src/pages/contact.astro`

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   ├── CNAME                  # Custom domain configuration
│   ├── robots.txt             # SEO robots file
│   ├── favicon.svg            # Site favicon
│   ├── og-image.svg           # Open Graph image
│   └── logo.svg               # Site logo
├── src/
│   ├── components/
│   │   ├── Header.astro       # Site header/navigation
│   │   ├── Footer.astro      # Site footer
│   │   ├── PostCard.astro     # Post preview card
│   │   ├── TagPill.astro      # Tag display component
│   │   ├── RelatedPosts.astro # Related articles component
│   │   └── SupportCTA.astro   # Support call-to-action
│   ├── content/
│   │   ├── config.ts          # Content collection schemas
│   │   ├── scholarly/         # Scholarly articles
│   │   ├── editorial/         # Editorial content
│   │   └── resources/         # Writing resources
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Base page layout
│   │   └── ArticleLayout.astro # Article page layout
│   ├── pages/
│   │   ├── index.astro        # Home page
│   │   ├── about.astro        # About page
│   │   ├── writing-support.astro
│   │   ├── impact.astro
│   │   ├── support.astro
│   │   ├── contact.astro
│   │   ├── 404.astro          # 404 error page
│   │   ├── scholarly/
│   │   │   ├── index.astro    # Scholarly index
│   │   │   └── [...slug].astro # Scholarly detail pages
│   │   ├── editorial/
│   │   │   ├── index.astro    # Editorial index
│   │   │   └── [...slug].astro # Editorial detail pages
│   │   ├── resources/
│   │   │   ├── index.astro    # Resources index
│   │   │   └── [...slug].astro # Resource detail pages
│   │   └── policies/
│   │       ├── index.astro
│   │       ├── editorial-standards.astro
│   │       ├── privacy.astro
│   │       └── terms.astro
│   └── styles/
│       └── global.css         # Global styles and design system
├── astro.config.mjs           # Astro configuration
├── package.json
└── tsconfig.json
```

## Design System

### Colors
- Primary: `#1a2332` (deep navy)
- Background: `#fafaf8` (warm white)
- Accent: `#2563eb` (blue)
- Text: `#374151` (gray)

### Typography
- Headings: Serif font stack (Georgia, Times New Roman)
- Body: Sans-serif system font stack
- Base font size: 18px
- Line height: 1.7

### Layout
- Max content width: 680px (articles)
- Max layout width: 1200px (pages)
- Responsive breakpoints: 480px, 768px, 1024px

## Content Collections

Content is organized into three collections:

1. **Scholarly**: Peer-reviewed academic articles
2. **Editorial**: Opinion, analysis, and commentary
3. **Resources**: Writing guides, templates, and references

All collections use Zod schemas for type safety and validation.

## Features

- ✅ Static site generation
- ✅ Content collections with Markdown
- ✅ SEO optimization (meta tags, sitemap)
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Related posts algorithm
- ✅ Tag system
- ✅ Reading time calculation
- ✅ Featured content support

## License

- **Content**: © LaTech Editorial Publishing
- **Code**: MIT

## Notes

- OG image is currently an SVG placeholder - replace with actual branded image
- Favicon is a simple SVG - can be converted to ICO if needed
- Contact form requires Formspree setup (see above)
- Newsletter signup is placeholder (coming soon)
- Donation processing is placeholder (coming soon)
