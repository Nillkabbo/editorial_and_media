LaTech Editorial Publishing - Static MVP Build Plan
Project Overview
Domain: latecheditorialpublishing.com
Stack: Astro + Markdown Content Collections
Hosting: GitHub Pages with GitHub Actions
Type: Static-only, no backend, no database

Phase 1: Project Bootstrap
Prompt 1.1 - Initialize Astro Project

Create a new Astro project in the current directory with the following configuration:
- Project name: latech-editorial-publishing
- Template: minimal (we'll build from scratch)
- TypeScript: Yes (strict mode)
- No UI framework needed

Run: npm create astro@latest . -- --template minimal --typescript strict

Then update package.json with these scripts:
{
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
Prompt 1.2 - Configure Astro

Update astro.config.mjs with:
- Site URL: https://www.latecheditorialpublishing.com
- Output: static
- Trailing slash: always (for clean URLs)
- Sitemap integration
- Enable content collections

Install required integrations:
npm install @astrojs/sitemap

astro.config.mjs should look like:
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.latecheditorialpublishing.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
Prompt 1.3 - Create Directory Structure

Create the following directory structure:

src/
├── content/
│   ├── config.ts
│   ├── scholarly/
│   ├── editorial/
│   └── resources/
├── components/
├── layouts/
├── pages/
│   ├── scholarly/
│   ├── editorial/
│   ├── resources/
│   └── policies/
└── styles/

public/
├── fonts/ (optional)
└── images/
Phase 2: Global Styles & Base Layout
Prompt 2.1 - Create Global CSS

Create src/styles/global.css with a clean, editorial design system:

Requirements:
- CSS custom properties for colors, typography, spacing
- Color palette: deep navy (#1a2332), warm white (#fafaf8), accent blue (#2563eb), text gray (#374151)
- Typography: system font stack with serif for headings, sans-serif for body
- Base font size: 18px for readability
- Line height: 1.7 for body text
- Max content width: 680px for articles, 1200px for layouts
- Responsive breakpoints: 480px, 768px, 1024px
- Focus states for accessibility
- Smooth transitions

Include:
- CSS reset/normalize
- Typography scale (h1-h6, p, blockquote, lists)
- Utility classes (.container, .narrow-content, .visually-hidden)
- Button styles (.btn, .btn-primary, .btn-outline)
- Link styles with hover states
- Card component base styles
Prompt 2.2 - Create Base Layout Component

Create src/layouts/BaseLayout.astro:

Props interface:
- title: string
- description: string
- ogImage?: string (default: /og-image.png)
- canonical?: string
- type?: 'website' | 'article'

Include:
- Full HTML document structure
- SEO meta tags (title, description, canonical)
- Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
- Favicon links
- Global CSS import
- Slot for page content
- Skip to main content link for accessibility
- Header component
- Main element with id="main-content"
- Footer component
Prompt 2.3 - Create Header Component

Create src/components/Header.astro:

Navigation items:
- Home (/)
- Scholarly (/scholarly/)
- Editorial (/editorial/)
- Writing Support (/writing-support/)
- Impact (/impact/)
- About (/about/)
- Support (/support/)
- Contact (/contact/)

Features:
- Logo/site title on left
- Navigation links on right
- Mobile hamburger menu (CSS-only, no JS required)
- Current page indicator (aria-current="page")
- "Support Our Work" CTA button (optional, subtle)
- Sticky header option
- Accessible keyboard navigation
Prompt 2.4 - Create Footer Component

Create src/components/Footer.astro:

Sections:
1. Mission tagline: "Advancing knowledge through rigorous scholarship and accessible media."
2. Quick links column: About, Contact, Support
3. Policies column: Editorial Standards, Privacy Policy, Terms of Use
4. Social placeholders: Twitter/X, LinkedIn, Email icons (use SVG)
5. Newsletter signup placeholder (email input + button, non-functional for now)
6. Copyright: "© 2024 LaTech Editorial Publishing. All rights reserved."
7. Nonprofit disclaimer: "Nonprofit status: in formation / to be announced."

Accessibility:
- Use semantic footer element
- Proper heading hierarchy
- Link focus states
Phase 3: Content Collections Setup
Prompt 3.1 - Define Content Collection Schema

Create src/content/config.ts:

Define three collections with Zod schemas:

1. scholarly collection:
   - title: string (required)
   - description: string (required, max 160 chars for SEO)
   - date: date (required)
   - author: string (required)
   - tags: array of strings (required)
   - readingTime: number (optional, in minutes)
   - featured: boolean (optional, default false)
   - draft: boolean (optional, default false)

2. editorial collection:
   - title: string (required)
   - description: string (required)
   - date: date (required)
   - author: string (required)
   - tags: array of strings (required)
   - readingTime: number (optional)
   - category: enum ['opinion', 'analysis', 'commentary', 'review']
   - featured: boolean (optional)
   - draft: boolean (optional)

3. resources collection:
   - title: string (required)
   - description: string (required)
   - date: date (required)
   - author: string (optional)
   - tags: array of strings (required)
   - type: enum ['guide', 'template', 'checklist', 'reference']
   - difficulty: enum ['beginner', 'intermediate', 'advanced'] (optional)
   - draft: boolean (optional)

Export all collections.
Prompt 3.2 - Create Sample Scholarly Posts

Create two scholarly articles in src/content/scholarly/:

1. src/content/scholarly/understanding-peer-review.md
---
title: "Understanding the Peer Review Process: A Guide for Emerging Scholars"
description: "An in-depth exploration of academic peer review, its importance in scholarly publishing, and practical strategies for navigating the process successfully."
date: 2024-01-15
author: "Dr. Sarah Chen"
tags: ["peer review", "academic publishing", "research methods", "scholarly writing"]
readingTime: 12
featured: true
---

Write 800-1000 words covering:
- What peer review is and why it matters
- Types of peer review (single-blind, double-blind, open)
- Common reviewer feedback and how to respond
- Tips for first-time authors

2. src/content/scholarly/digital-humanities-methods.md
---
title: "Digital Humanities Methods: Bridging Traditional Scholarship and Technology"
description: "Exploring how digital tools and methodologies are transforming humanities research while maintaining rigorous academic standards."
date: 2024-01-08
author: "Prof. Michael Torres"
tags: ["digital humanities", "research methodology", "technology", "interdisciplinary"]
readingTime: 15
featured: false
---

Write 800-1000 words covering:
- Definition and scope of digital humanities
- Key tools and methods (text analysis, visualization, GIS)
- Challenges and opportunities
- Future directions
Prompt 3.3 - Create Sample Editorial Posts

Create two editorial articles in src/content/editorial/:

1. src/content/editorial/open-access-future.md
---
title: "The Future of Open Access: Why Knowledge Should Be Free"
description: "An analysis of the open access movement and its implications for democratizing scholarly knowledge worldwide."
date: 2024-01-12
author: "James Wright"
tags: ["open access", "publishing", "education", "policy"]
readingTime: 8
category: "analysis"
featured: true
---

Write 600-800 words as opinion/analysis piece on:
- Current state of academic publishing costs
- Benefits of open access
- Challenges and funding models
- Call to action

2. src/content/editorial/writing-public-scholarship.md
---
title: "Writing for the Public: Why Academics Must Learn to Communicate Beyond the Ivory Tower"
description: "Commentary on the importance of public-facing scholarship and practical advice for making research accessible to general audiences."
date: 2024-01-05
author: "Dr. Amanda Foster"
tags: ["public scholarship", "science communication", "writing", "outreach"]
readingTime: 6
category: "commentary"
featured: false
---

Write 600-800 words on:
- The gap between academic and public discourse
- Why public engagement matters
- Strategies for accessible writing
- Examples of successful public scholars
Prompt 3.4 - Create Sample Resource

Create one resource in src/content/resources/:

src/content/resources/research-to-public-guide.md
---
title: "Writing Guide: From Research to Public Communication"
description: "A practical step-by-step guide for transforming academic research into accessible, engaging content for general audiences."
date: 2024-01-10
author: "LaTech Editorial Team"
tags: ["writing guide", "public communication", "research", "accessibility"]
type: "guide"
difficulty: "beginner"
---

Write 1000-1200 words as a practical guide:
1. Introduction: Why translate research?
2. Know your audience (define who you're writing for)
3. Structure for clarity (inverted pyramid, clear headings)
4. Simplify without dumbing down (jargon translation)
5. Use concrete examples and analogies
6. Create compelling openings
7. End with implications and next steps
8. Checklist for self-review
Phase 4: Reusable Components
Prompt 4.1 - Create PostCard Component

Create src/components/PostCard.astro:

Props:
- title: string
- description: string
- date: Date
- author: string
- tags: string[]
- url: string
- readingTime?: number
- featured?: boolean

Features:
- Card with subtle shadow/border
- Title as h3 link to full post
- Date formatted nicely (e.g., "January 15, 2024")
- Author name
- Description (truncated if needed)
- Tags displayed as pills
- Reading time if provided
- Featured badge if featured: true
- Hover state with subtle animation
- Fully accessible (proper heading hierarchy, link text)
Prompt 4.2 - Create TagPill Component

Create src/components/TagPill.astro:

Props:
- tag: string
- href?: string (optional link to tag page)
- size?: 'small' | 'medium' (default: small)

Features:
- Rounded pill shape
- Subtle background color
- Text color with good contrast
- If href provided, render as link
- Hover state if clickable
Prompt 4.3 - Create ArticleLayout Component

Create src/layouts/ArticleLayout.astro:

Props:
- title: string
- description: string
- date: Date
- author: string
- tags: string[]
- readingTime?: number
- collection: 'scholarly' | 'editorial' | 'resources'

Features:
- Extends BaseLayout
- Article header with:
  - Title (h1)
  - Author and date
  - Reading time
  - Tags as pills
- Narrow content column (max 680px, centered)
- Good typography for long-form reading
- Slot for article content
- Share links section (Twitter, LinkedIn, Email - simple href links)
- Related posts section at bottom (same collection, shared tags)
- "Support our work" CTA at end
- Back to collection link
Prompt 4.4 - Create RelatedPosts Component

Create src/components/RelatedPosts.astro:

Props:
- currentSlug: string
- collection: 'scholarly' | 'editorial' | 'resources'
- tags: string[]
- limit?: number (default: 3)

Logic:
- Fetch all posts from the same collection
- Filter out current post
- Score by shared tags (more shared = higher score)
- Sort by score, then by date
- Return top N posts
- Display as smaller cards (title, date, one-line description)
Prompt 4.5 - Create SupportCTA Component

Create src/components/SupportCTA.astro:

Props:
- variant?: 'inline' | 'box' | 'banner' (default: 'box')

Content:
- Headline: "Support Independent Scholarship"
- Brief text: "Your contribution helps us publish rigorous research and make knowledge accessible to all."
- Button: "Support Our Work" linking to /support/
- Subtle, not aggressive styling
- Different visual treatments per variant
Phase 5: Main Pages
Prompt 5.1 - Create Home Page

Create src/pages/index.astro:

Sections:
1. Hero
   - Headline: "Rigorous Scholarship. Accessible Knowledge."
   - Subheadline: "LaTech Editorial Publishing is a mission-driven platform advancing research, editorial excellence, and public education."
   - Two CTAs: "Explore Scholarly Work" + "Read Editorial"

2. Featured Content (2-column grid)
   - Pull featured: true posts from scholarly and editorial
   - Display as PostCards
   - "View All" links to each collection

3. What We Do (3-column on desktop)
   - Scholarly Publishing: Brief description + link
   - Editorial & Media: Brief description + link
   - Writing Support: Brief description + link

4. Impact Teaser
   - Brief text about public education mission
   - Link to /impact/

5. Newsletter Signup (placeholder)
   - Heading: "Stay Informed"
   - Email input + Subscribe button (non-functional)
   - Note: "Coming soon"

6. Support CTA
   - Use SupportCTA component (banner variant)

SEO:
- Title: "LaTech Editorial Publishing | Rigorous Scholarship, Accessible Knowledge"
- Description: "A mission-driven platform advancing scholarly research, editorial excellence, and public education through rigorous publishing and writing support."
Prompt 5.2 - Create About Page

Create src/pages/about.astro:

Sections:
1. Page Header
   - Title: "About LaTech Editorial Publishing"
   - Subtitle: "Our mission, vision, and commitment to editorial excellence"

2. Mission Statement
   - Heading: "Our Mission"
   - Text: "LaTech Editorial Publishing exists to bridge the gap between rigorous academic research and public understanding. We publish scholarly work that meets the highest standards of intellectual rigor while making knowledge accessible to diverse audiences."

3. Vision
   - Heading: "Our Vision"
   - Text: "We envision a world where quality scholarship is not locked behind paywalls, where emerging researchers receive the mentorship they need, and where informed public discourse is grounded in evidence and expertise."

4. What We Publish
   - Scholarly articles and research
   - Editorial analysis and commentary
   - Educational resources and guides

5. Editorial Independence
   - Heading: "Editorial Independence"
   - Text: "Our editorial decisions are made solely on the basis of quality, rigor, and relevance. We maintain strict independence from commercial, political, and institutional pressures. All content undergoes rigorous review processes."

6. Who We Serve
   - Researchers and academics
   - Graduate students and emerging scholars
   - Writers seeking to reach public audiences
   - General readers interested in well-researched content

7. Nonprofit Commitment
   - Note about mission-driven approach
   - Disclaimer: "Nonprofit status: in formation / to be announced."

SEO:
- Title: "About Us | LaTech Editorial Publishing"
- Description: "Learn about our mission to advance rigorous scholarship and make knowledge accessible through editorial excellence and writing support."
Prompt 5.3 - Create Writing Support Page

Create src/pages/writing-support.astro:

Sections:
1. Page Header
   - Title: "Writing Support"
   - Subtitle: "Resources and guidance for researchers and writers"

2. What We Offer
   - Heading: "How We Support Writers"
   - Text explaining capacity building approach:
     - Editorial feedback on manuscripts
     - Guidance on publication processes
     - Resources for improving scholarly writing
     - Support for translating research to public audiences

3. Submission Guidelines
   - Heading: "Submit Your Work"
   - Explain what we're looking for:
     - Original scholarly research
     - Thoughtful editorial commentary
     - Well-researched analysis
   - How to submit: Email to submissions@latecheditorialpublishing.com (placeholder)
   - What to include: abstract, full manuscript, brief author bio

4. Resources Section
   - Heading: "Writing Resources"
   - Pull from resources collection
   - Display as cards linking to each resource

5. Mentorship Program (placeholder)
   - Heading: "Mentorship Program"
   - Text: "We are developing a mentorship program to connect emerging scholars with experienced researchers and writers. Stay tuned for announcements."
   - Email signup placeholder

6. FAQ
   - Do you charge submission fees? No.
   - How long is the review process? Typically 4-8 weeks.
   - Do you accept previously published work? Generally no, but contact us.

SEO:
- Title: "Writing Support | LaTech Editorial Publishing"
- Description: "Get editorial guidance, writing resources, and submission support for scholarly and public-facing writing projects."
Prompt 5.4 - Create Impact Page

Create src/pages/impact.astro:

Sections:
1. Page Header
   - Title: "Impact & Digital Reach"
   - Subtitle: "Advancing public education through accessible scholarship"

2. Our Approach
   - Heading: "Knowledge for the Public Good"
   - Text explaining ethical approach to reach:
     - Making research accessible beyond academia
     - SEO optimization so people can find quality information
     - Newsletter distribution to engaged readers
     - Social media presence for broader conversations
     - Syndication partnerships (future)

3. Why Reach Matters
   - Text about democratizing knowledge
   - Countering misinformation with rigorous content
   - Supporting evidence-based public discourse

4. How We Measure Impact
   - Readership and engagement (coming soon)
   - Geographic reach
   - Citation and reference by other publications
   - Reader feedback and community growth

5. Metrics Dashboard (placeholder)
   - Heading: "Our Impact by the Numbers"
   - Display boxes with placeholder text: "Metrics coming soon"
   - Categories: Articles Published, Readers Reached, Countries Served, Newsletter Subscribers

6. Partner With Us
   - Brief text about syndication and partnerships
   - Contact link

SEO:
- Title: "Impact & Digital Reach | LaTech Editorial Publishing"
- Description: "Learn how we advance public education through accessible scholarship, ethical digital reach, and knowledge democratization."
Prompt 5.5 - Create Support/Donate Page

Create src/pages/support.astro:

Sections:
1. Page Header
   - Title: "Support Our Work"
   - Subtitle: "Help us advance accessible scholarship and public education"

2. Why Support Matters
   - Heading: "Your Support Makes a Difference"
   - Text:
     - Independent publishing requires resources
     - Your contribution helps us maintain editorial independence
     - Support emerging scholars and writers
     - Keep quality content accessible to all

3. How Contributions Are Used
   - Editorial operations and review processes
   - Writer and researcher support programs
   - Technology and platform maintenance
   - Expanding reach and accessibility

4. Donate Section
   - Heading: "Make a Contribution"
   - Button: "Donate Now" (href="#" placeholder)
   - Note: "Donation processing coming soon. Contact us at donate@latecheditorialpublishing.com to discuss support options."

5. Other Ways to Support
   - Share our content
   - Subscribe to newsletter
   - Submit your work
   - Volunteer (contact us)

6. Transparency Promise
   - Heading: "Our Commitment to Transparency"
   - Text: "We are committed to full transparency in how contributions are used. Annual reports will be published detailing our finances and impact."
   - Nonprofit disclaimer: "Nonprofit status: in formation / to be announced."

SEO:
- Title: "Support Our Work | LaTech Editorial Publishing"
- Description: "Support independent scholarship and public education. Your contribution helps us publish rigorous research and make knowledge accessible."
Prompt 5.6 - Create Contact Page

Create src/pages/contact.astro:

Sections:
1. Page Header
   - Title: "Contact Us"
   - Subtitle: "We'd love to hear from you"

2. Contact Methods
   - General inquiries: contact@latecheditorialpublishing.com
   - Submissions: submissions@latecheditorialpublishing.com
   - Support/Donations: donate@latecheditorialpublishing.com

3. Contact Form (Formspree-ready)
   - Form with action="https://formspree.io/f/YOUR_FORM_ID" method="POST"
   - Fields:
     - Name (required)
     - Email (required)
     - Subject (select: General Inquiry, Submission Question, Partnership, Other)
     - Message (textarea, required)
   - Submit button
   - Note in HTML comment: "Replace YOUR_FORM_ID with actual Formspree form ID"

4. Response Time
   - "We aim to respond to all inquiries within 2-3 business days."

5. Social Links (placeholders)
   - Twitter/X: @latecheditorial (placeholder)
   - LinkedIn: LaTech Editorial Publishing (placeholder)

SEO:
- Title: "Contact Us | LaTech Editorial Publishing"
- Description: "Get in touch with LaTech Editorial Publishing for inquiries, submissions, partnerships, or support questions."
Phase 6: Collection Index & Detail Pages
Prompt 6.1 - Create Scholarly Index Page

Create src/pages/scholarly/index.astro:

Features:
- Page title: "Scholarly Articles"
- Subtitle: "Rigorous research and academic analysis"
- Fetch all scholarly posts using getCollection('scholarly')
- Filter out drafts
- Sort by date (newest first)
- Display as grid of PostCards (2 columns on desktop)
- Show featured posts first (optional section)
- Include brief intro text about scholarly content

SEO:
- Title: "Scholarly Articles | LaTech Editorial Publishing"
- Description: "Explore peer-reviewed scholarly articles covering research methods, academic publishing, digital humanities, and more."
Prompt 6.2 - Create Scholarly Detail Page

Create src/pages/scholarly/[...slug].astro:

Features:
- Use getStaticPaths() to generate routes for all scholarly posts
- Fetch single post by slug
- Use ArticleLayout with post frontmatter
- Render markdown content
- Include related posts from scholarly collection
- Back link to /scholarly/

Dynamic SEO:
- Title: "{post.title} | Scholarly | LaTech Editorial Publishing"
- Description: post.description
- Type: article
Prompt 6.3 - Create Editorial Index Page

Create src/pages/editorial/index.astro:

Features:
- Page title: "Editorial"
- Subtitle: "Opinion, analysis, and commentary"
- Fetch all editorial posts
- Filter out drafts
- Sort by date (newest first)
- Display as PostCards
- Show category filter (future enhancement - just list for now)

SEO:
- Title: "Editorial | LaTech Editorial Publishing"
- Description: "Read thoughtful editorial content including opinion pieces, analysis, and commentary on publishing, scholarship, and public knowledge."
Prompt 6.4 - Create Editorial Detail Page

Create src/pages/editorial/[...slug].astro:

Same pattern as scholarly detail page but for editorial collection.
Prompt 6.5 - Create Resources Index Page

Create src/pages/resources/index.astro:

Features:
- Page title: "Resources"
- Subtitle: "Guides, templates, and references for writers"
- Fetch all resources
- Display with type badges (guide, template, etc.)
- Optional difficulty indicator

SEO:
- Title: "Writing Resources | LaTech Editorial Publishing"
- Description: "Access free writing guides, templates, and resources to improve your scholarly and public-facing writing."
Prompt 6.6 - Create Resources Detail Page

Create src/pages/resources/[...slug].astro:

Same pattern as other detail pages but for resources collection.
Phase 7: Policy Pages
Prompt 7.1 - Create Policies Index

Create src/pages/policies/index.astro:

Simple page with:
- Title: "Policies"
- Links to:
  - Editorial Standards (/policies/editorial-standards/)
  - Privacy Policy (/policies/privacy/)
  - Terms of Use (/policies/terms/)
- Brief note: "These policies govern our operations and your use of our site."

SEO:
- Title: "Policies | LaTech Editorial Publishing"
- Description: "Review our editorial standards, privacy policy, and terms of use."
Prompt 7.2 - Create Editorial Standards Page

Create src/pages/policies/editorial-standards.astro:

Content sections:
1. Overview of editorial standards
2. Review Process
   - All scholarly content undergoes peer review
   - Editorial content is reviewed for accuracy and quality
3. Citation Standards
   - Proper attribution required
   - Links to sources where possible
4. Corrections Policy
   - Errors will be corrected promptly
   - Corrections noted at top of article
   - Significant corrections announced
5. Conflicts of Interest
   - Authors must disclose conflicts
   - Editors recuse from conflicted reviews
6. Fact-Checking
   - Claims verified before publication
   - Sources documented

SEO appropriate for policy page.
Prompt 7.3 - Create Privacy Policy Page

Create src/pages/policies/privacy.astro:

Content sections:
1. Overview: "We respect your privacy and collect minimal data."
2. Data We Collect
   - This is a static website
   - We do not use cookies for tracking
   - Contact form submissions (if used) are processed by Formspree
   - Basic analytics may be added (note: not yet implemented)
3. How Data Is Used
   - Contact form: to respond to your inquiry
   - No data sold or shared
4. Third Parties
   - GitHub Pages (hosting)
   - Formspree (contact form, if used)
5. Your Rights
   - Contact us to request data deletion
6. Updates to Policy
   - Last updated: [current date]
   - Changes will be posted here

SEO appropriate for policy page.
Prompt 7.4 - Create Terms of Use Page

Create src/pages/policies/terms.astro:

Content sections:
1. Acceptance of Terms
2. Use of Site
   - For informational and educational purposes
   - No unauthorized scraping or reproduction
3. Intellectual Property
   - Content copyright LaTech Editorial Publishing
   - Authors retain rights to their work
   - Specific licensing terms may apply to individual works
4. User Submissions
   - You grant us license to publish submitted work
   - You warrant originality and rights
5. Disclaimer
   - Content for educational purposes
   - Not professional advice
6. Limitation of Liability
7. Changes to Terms
8. Contact

SEO appropriate for policy page.
Phase 8: SEO, Sitemap & 404
Prompt 8.1 - Create SEO Component (if not in BaseLayout)

If not already integrated into BaseLayout, create src/components/SEO.astro:

Props:
- title: string
- description: string
- canonical: string
- ogImage: string
- ogType: 'website' | 'article'
- publishedTime?: string (for articles)
- author?: string (for articles)
- tags?: string[] (for articles)

Output all necessary meta tags:
- Basic meta (title, description)
- Canonical URL
- Open Graph (og:title, og:description, og:image, og:url, og:type, og:site_name)
- Twitter Cards (twitter:card, twitter:title, twitter:description, twitter:image)
- Article-specific (article:published_time, article:author, article:tag)
Prompt 8.2 - Create 404 Page

Create src/pages/404.astro:

Features:
- Uses BaseLayout
- Friendly error message: "Page Not Found"
- Subtext: "The page you're looking for doesn't exist or has been moved."
- Link back to home
- Search suggestion (text only, no actual search)
- Links to main sections

SEO:
- Title: "Page Not Found | LaTech Editorial Publishing"
- noindex meta tag
Prompt 8.3 - Create robots.txt

Create public/robots.txt:

User-agent: *
Allow: /

Sitemap: https://www.latecheditorialpublishing.com/sitemap-index.xml
Phase 9: Public Assets
Prompt 9.1 - Create CNAME File

Create public/CNAME with single line:
latecheditorialpublishing.com
Prompt 9.2 - Create Favicon

Create public/favicon.svg:

Simple SVG favicon - stylized "L" or "LEP" monogram in the primary color (#1a2332 or #2563eb).
Keep it simple and recognizable at small sizes.

Also create a note in README about generating favicon.ico from this if needed.
Prompt 9.3 - Create OG Image Placeholder

Create public/og-image.png:

Create a placeholder image (1200x630px recommended for OG):
- Can be a simple solid color with text overlay
- Or note in README that this should be replaced with actual branded image

For now, create a simple SVG as public/og-image.svg that can be referenced:
- Background: brand color
- Text: "LaTech Editorial Publishing" centered
- Tagline below
Prompt 9.4 - Create Logo Placeholder

Create public/logo.svg:

Simple text-based logo or stylized "LaTech Editorial Publishing" wordmark.
Keep it clean and professional.
Could also be abbreviated as "LEP" with full name.
Phase 10: GitHub Actions Deployment
Prompt 10.1 - Create GitHub Actions Workflow

Create .github/workflows/deploy.yml:

name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build Astro site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
Phase 11: README Documentation
Prompt 11.1 - Create Comprehensive README

Create README.md with:

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

- Astro (static site generator)
- Markdown content collections
- GitHub Pages hosting
- GitHub Actions CI/CD

## Local Development

### Prerequisites
- Node.js 18+ (LTS recommended)

### Commands
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:4321
npm run build      # Build for production
npm run preview    # Preview production build

## Adding Content

### Adding a Scholarly Article

Create a new file in src/content/scholarly/your-slug.md:

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

### Adding an Editorial Post

Create in src/content/editorial/your-slug.md with same format plus:
category: "opinion" | "analysis" | "commentary" | "review"

### Adding a Resource

Create in src/content/resources/your-slug.md with:
type: "guide" | "template" | "checklist" | "reference"
difficulty: "beginner" | "intermediate" | "advanced" (optional)

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
4. Replace YOUR_FORM_ID in src/pages/contact.astro

## Project Structure

(Include directory tree)

## License

Content: © LaTech Editorial Publishing
Code: MIT
Phase 12: Testing & Verification
Prompt 12.1 - Run Build and Fix Errors

Execute these commands and fix any errors:

1. npm install
   - Verify all dependencies install correctly
   - No peer dependency warnings (if possible)

2. npm run build
   - Should complete without errors
   - Check dist/ folder is generated
   - Verify all routes exist

3. npm run preview
   - Open localhost:4321 (or whatever port)
   - Click through ALL pages manually
   - Check for:
     - Broken links
     - Missing images
     - Layout issues
     - Mobile responsiveness

4. Verify these routes work:
   /
   /about/
   /scholarly/
   /scholarly/[each-post]/
   /editorial/
   /editorial/[each-post]/
   /resources/
   /resources/[each-resource]/
   /writing-support/
   /impact/
   /support/
   /contact/
   /policies/
   /policies/editorial-standards/
   /policies/privacy/
   /policies/terms/
   /404/ (test by going to /nonexistent/)

5. Check responsive design at:
   - 320px (small mobile)
   - 768px (tablet)
   - 1024px+ (desktop)
Prompt 12.2 - Accessibility Check

Verify accessibility:

1. Keyboard navigation
   - Tab through all interactive elements
   - Focus indicators visible
   - Skip link works

2. Semantic HTML
   - One h1 per page
   - Proper heading hierarchy
   - Landmarks (header, main, footer, nav)
   - Lists for navigation

3. Images
   - All images have alt text
   - Decorative images have empty alt=""

4. Color contrast
   - Text readable on backgrounds
   - Links distinguishable

5. Forms
   - Labels associated with inputs
   - Error states accessible
Critical Files Summary
Files that will be created/modified:

Configuration:

package.json
astro.config.mjs
tsconfig.json
src/content/config.ts
Layouts:

src/layouts/BaseLayout.astro
src/layouts/ArticleLayout.astro
Components:

src/components/Header.astro
src/components/Footer.astro
src/components/PostCard.astro
src/components/TagPill.astro
src/components/RelatedPosts.astro
src/components/SupportCTA.astro
src/components/SEO.astro (if separate)
Pages:

src/pages/index.astro
src/pages/about.astro
src/pages/writing-support.astro
src/pages/impact.astro
src/pages/support.astro
src/pages/contact.astro
src/pages/404.astro
src/pages/scholarly/index.astro
src/pages/scholarly/[...slug].astro
src/pages/editorial/index.astro
src/pages/editorial/[...slug].astro
src/pages/resources/index.astro
src/pages/resources/[...slug].astro
src/pages/policies/index.astro
src/pages/policies/editorial-standards.astro
src/pages/policies/privacy.astro
src/pages/policies/terms.astro
Content:

src/content/scholarly/*.md (2 posts)
src/content/editorial/*.md (2 posts)
src/content/resources/*.md (1 resource)
Styles:

src/styles/global.css
Public:

public/CNAME
public/robots.txt
public/favicon.svg
public/og-image.png (or .svg)
public/logo.svg
Deployment:

.github/workflows/deploy.yml
Documentation:

README.md
Future Improvements (Minimal Effort)
Phase A: Quick Wins (< 1 hour each)
Add Analytics

Add Plausible or Fathom (privacy-respecting)
Single script tag in BaseLayout
RSS Feeds

Add @astrojs/rss integration
Create /rss.xml for combined feed
Per-collection feeds
Reading Progress Bar

Add progress indicator for articles
Pure CSS possible, or minimal JS
Dark Mode Toggle

CSS custom properties already support this
Add toggle in header
Use prefers-color-scheme as default
Copy Code Blocks

Add copy button to code blocks
Minimal JS enhancement
Phase B: Medium Effort (1-4 hours each)
Search Functionality

Use Pagefind (static search)
npm install @pagefind/default-ui
Add to build process
Newsletter Integration

Connect to Buttondown or ConvertKit
Replace placeholder forms
Tag Pages

Create /tags/ route
Dynamic /tags/[tag]/ pages
Show all posts with that tag
Author Pages

Define authors in config
Create /authors/[author]/ pages
Show author bio + posts
Table of Contents

Auto-generate for long articles
Sticky sidebar on desktop
Phase C: Larger Features (4+ hours)
CMS Integration

Add Decap CMS (formerly Netlify CMS)
Enables browser-based editing
Still static output
Comments System

Add Giscus (GitHub Discussions)
Or Disqus alternative
Donation Processing

Integrate Stripe or Buy Me a Coffee
Add actual payment links
Multi-language Support

Astro i18n routing
Content translations
PDF Generation

Generate PDF versions of articles
For offline reading/sharing
Implementation Priority Order
Immediate (before public launch):

Actual OG image (branded)
Real favicon
Formspree form configuration
First Week:

Analytics
RSS feeds
Newsletter integration
First Month:

Search
Tag pages
Dark mode
As Needed:

Author pages (when multiple authors)
CMS (when non-technical editors)
Comments (when community grows)
Verification Checklist
Before deployment, verify:

 npm install succeeds
 npm run dev starts without errors
 npm run build produces /dist
 npm run preview shows site correctly
 All 15+ routes render
 No broken internal links
 Images load correctly
 Mobile layout is clean (test 320px-768px)
 Forms have correct placeholder action
 SEO meta tags present on all pages
 sitemap.xml generated
 robots.txt accessible
 404 page works
 GitHub Actions workflow valid YAML
 CNAME file has correct domain
 README is complete
Plan created for LaTech Editorial Publishing MVP
Execution ready for coding agent implementation