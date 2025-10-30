# Minimal Website

The official website for **Minimal** - an AI-powered platform that transforms static websites into intelligent conversational experiences.

Built with Astro, featuring a spectacular animated intro, bilingual support, and a comprehensive design system.

## 🌐 Live Website

**Production**: [https://minimal.lat](https://minimal.lat)

## ✨ Key Features

### 🎬 Magic Hero Animation
Spectacular animated intro sequence featuring:
- Typewriter effect with character-by-character animation
- Rainbow gradient text animation
- Loading dots with bounce effect
- Smart skip functionality (click, scroll, or deep links)
- Parallax gradient overlays on scroll

### 🌍 Full Internationalization (i18n)
- **Bilingual Support**: English (default) and Spanish
- Smart routing without prefix for English (`/about`), with prefix for Spanish (`/es/about`)
- JSON-based translation system with type-safe utilities
- Browser language detection and automatic redirect
- SEO-optimized with `hreflang` alternate links

### 🎨 Design System
- Tailwind CSS with custom configuration
- CSS Variables-based design tokens
- Comprehensive color system with brand gradients
- 4-level shadow system
- Fluid typography using `clamp()`
- Standardized spacing and border radius

### 🧩 Component Architecture
- **40+ Reusable Astro Components**
- Modular, maintainable component library
- Specialized cards: Feature, Testimonial, Team, Pricing, Info, Metric, Category
- Section components: Hero, Problem, Features, Process, ValueTabs, UseCases, CTA
- Layout components: Header, Footer, BaseLayout, LegalLayout

### 🚀 Performance & SEO
- Static site generation (pre-rendered at build time)
- Complete SEO meta tags (Open Graph, Twitter Cards)
- Structured data (JSON-LD Schema.org)
- Automatic sitemap generation with i18n support
- Google Analytics integration
- Asset optimization and fingerprinting

## 🛠️ Technology Stack

### Core Framework
- **[Astro](https://astro.build)** 5.15.0 - Modern static site generator
- **TypeScript** 5.9.3 - Type-safe development
- **Node.js** 20+ - Runtime environment

### Styling
- **[Tailwind CSS](https://tailwindcss.com)** 3.4.18 - Utility-first CSS framework
- Custom CSS Variables for design tokens
- Modular CSS architecture (`global.css`, `components.css`, `animations.css`)

### Integrations
- `@astrojs/tailwind` 6.0.2 - Seamless Tailwind integration
- `@astrojs/sitemap` 3.6.0 - Automatic sitemap generation
- `@astrojs/check` 0.9.5 - TypeScript and Astro type checking

### Deployment
- **GitHub Pages** with GitHub Actions
- Custom domain: minimal.lat
- Automatic deployment on push to main

## 📁 Project Structure

```
minimalweb/
├── src/
│   ├── components/          # 40+ reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── MagicHero.astro         # Animated intro
│   │   ├── GradientOverlays.astro  # Parallax backgrounds
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── ValueTabs.astro
│   │   ├── UseCases.astro
│   │   ├── Pricing.astro
│   │   ├── CTA.astro
│   │   └── [+30 more components]
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Main layout with SEO
│   │   └── LegalLayout.astro   # Legal pages layout
│   │
│   ├── pages/                  # File-based routing
│   │   ├── index.astro        # Homepage (English)
│   │   ├── about.astro
│   │   ├── features.astro
│   │   ├── integration.astro
│   │   ├── help.astro
│   │   ├── guides.astro
│   │   ├── community.astro
│   │   ├── careers.astro
│   │   ├── contact.astro
│   │   ├── terms.astro
│   │   ├── privacy.astro
│   │   ├── gdpr.astro
│   │   ├── security.astro
│   │   └── es/                # Spanish translations
│   │       ├── index.astro    # Homepage (Spanish)
│   │       └── [+13 pages]
│   │
│   ├── i18n/                  # Internationalization
│   │   ├── utils.ts          # i18n utilities
│   │   ├── home.json         # Homepage translations
│   │   └── common.json       # Navigation & footer
│   │
│   ├── lib/
│   │   └── icons.ts          # Heroicons SVG library (80+ icons)
│   │
│   ├── scripts/
│   │   └── magicHero.ts      # Magic hero animation logic
│   │
│   └── styles/
│       ├── global.css        # Design tokens & base styles
│       ├── components.css    # Component styles
│       └── animations.css    # Keyframe animations
│
├── public/                   # Static assets
│   ├── assets/
│   │   └── images/          # Logos, favicons, OG images
│   ├── team/                # Team member photos
│   ├── CNAME                # Custom domain config
│   └── robots.txt
│
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
│
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json
```

## 🗂️ Site Pages

### English (Default - No Prefix)
- `/` - Homepage with magic hero animation
- `/about` - Company information and team
- `/features` - Product features and capabilities
- `/integration` - Developer integration guides
- `/help` - Support documentation and FAQs
- `/guides` - Best practices and implementation guides
- `/community` - Community resources
- `/careers` - Job opportunities
- `/contact` - Contact information
- `/terms`, `/privacy`, `/gdpr`, `/security` - Legal pages

### Spanish (Prefix `/es`)
- All pages available in Spanish with `/es` prefix
- Example: `/es`, `/es/about`, `/es/features`, etc.

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/minimalapp/minimalweb.git
cd minimalweb

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Development Commands

```bash
# Start dev server with hot reload
npm run dev

# Build for production (includes type checking)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro [command]
```

## 🎨 Design System

### Color Palette
- **Brand Primary**: Purple (#6366F1)
- **Rainbow Gradient**: Red, Orange, Yellow, Green, Blue, Indigo
- **Gray Scale**: 10-level system (50-900)
- **Text Colors**: WCAG AA compliant hierarchy

### Typography
- **Headings**: Bold, dark (Gray-900)
- **Body**: Regular, readable (Gray-700)
- **Fluid Sizing**: Responsive with `clamp()`
- **Font Stack**: System fonts for best performance

### Spacing & Layout
- **Base Unit**: 8px
- **Section Padding**: Responsive (4rem to 6rem)
- **Container**: Centered with max-width
- **Grid**: Tailwind's responsive grid system

### Shadows
- **sm**: Subtle elevation (1px 3px)
- **md**: Standard cards (4px 12px)
- **lg**: Prominent elements (10px 30px)
- **hover**: Interactive highlight (brand-colored)

### Border Radius
- **sm**: 8px - Buttons, small cards
- **md**: 12px - Standard cards
- **lg**: 16px - Large cards
- **xl**: 24px - Hero sections

## 🌟 Special Features

### Magic Hero Animation

The homepage features a sophisticated intro animation:

**Flow**:
1. Loading dots with bounce animation
2. Typewriter effect reveals words
3. Rainbow gradient text animation
4. Cycles through multiple word pairs
5. Fades to main content

**Smart Behaviors**:
- Click anywhere to skip
- Scroll to skip instantly
- Deep links (#anchor) bypass intro
- Parallax gradients on scroll

**Implementation**: `src/scripts/magicHero.ts` (350+ lines)

### Responsive Navigation

- Desktop: Horizontal navigation with hover effects
- Mobile: Hamburger menu with fullscreen overlay
- Language switcher in both layouts
- Smart routing for bilingual links

### Component Library

Organized by type:
- **Cards**: Feature, Testimonial, Team, Pricing, Metric, Info, Category
- **Sections**: Hero, Problem, Features, Process, ValueTabs, UseCases
- **UI Elements**: Button, Badge, Icon, PageTitle, SectionTitle
- **Layout**: Header, Footer, BaseLayout, LegalLayout
- **Special**: MagicHero, GradientOverlays, DemoComparison

## 🔧 Configuration

### Astro Config (`astro.config.mjs`)
```javascript
{
  site: 'https://minimal.lat',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [tailwind(), sitemap()],
  output: 'static'
}
```

### Tailwind Config (`tailwind.config.mjs`)
- Custom colors mapped to CSS variables
- Extended spacing and typography
- Custom animations and keyframes
- Responsive breakpoints

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Modern mobile browsers (iOS Safari 14+, Chrome Mobile)

## ⚡ Performance

- **Static Generation**: All pages pre-rendered at build time
- **CSS Code Splitting**: Separate CSS per page/component
- **Asset Optimization**: Minified CSS/JS, optimized images
- **Asset Fingerprinting**: Cache-busted filenames
- **Sitemap**: Auto-generated for SEO

## 🚢 Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions builds the site (`npm ci && npm run build`)
3. Deploys to GitHub Pages
4. Available at minimal.lat

**Workflow**: `.github/workflows/deploy.yml`

## 🤝 Contributing

This is the official Minimal website repository. For issues or suggestions:

1. Check existing issues
2. Create a new issue with detailed description
3. Follow the project's code style (TypeScript, Astro conventions)

## 📄 License

© 2025 Minimal. All rights reserved.

---

**Built with ❤️ using Astro, Tailwind CSS, and TypeScript**
