# Paltech™ Industrial Solutions - Landing Page

A world-class, conversion-optimized B2B landing page for industrial cooling solutions. Built with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui components.

## 🎨 Design Philosophy

- **Modern & Professional**: Clean, minimal design with strong visual hierarchy
- **Conversion-Focused**: Strategic CTAs and lead generation forms throughout
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Performance**: Optimized for fast loading and smooth animations
- **Accessible**: WCAG AA compliant with full keyboard navigation support

## ✨ Features

### Landing Page Sections

1. **Sticky Header** - Responsive navigation with mobile menu
2. **Hero Section** - Full-height hero with gradient background and dual CTAs
3. **What We Do** - Services overview with custom bullet styling
4. **Solutions Showcase** - Split layout with content and visualization
5. **Who We Serve** - Dark overlay section highlighting industries served
6. **Why Choose Us** - 4-column icon grid with key differentiators
7. **Strategic Services** - Numbered dark cards with hover effects
8. **Stats Counter** - Animated statistics showing company achievements
9. **Client Logos** - Trust section with grayscale to color hover effect
10. **CTA Section** - Full-width call-to-action with primary gradient
11. **Contact Form** - Professional form with validation and contact info
12. **Footer** - Comprehensive site footer with links and social
13. **Floating CTA** - Scroll-triggered button for quick access

### Technical Features

- ✅ **Server Components**: Optimized for performance
- ✅ **Type-Safe**: Full TypeScript implementation
- ✅ **Centralized Content**: All content in a single data file
- ✅ **Scroll Animations**: Intersection Observer-based reveals
- ✅ **Counter Animations**: Smooth number counting for stats
- ✅ **Responsive Design**: Mobile, tablet, and desktop optimized
- ✅ **SEO Optimized**: Comprehensive metadata and semantic HTML
- ✅ **Accessibility**: ARIA labels, keyboard navigation, reduced motion support
- ✅ **Dark Mode Ready**: Theme tokens support dark mode
- ✅ **Performance**: Fast loading with optimized images and code splitting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (package manager)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📝 Content Management

All landing page content is centralized in a single file for easy updates:

**Location**: `lib/data/landing-data.ts`

### Updating Content

1. Open `lib/data/landing-data.ts`
2. Find the section you want to update (e.g., `heroData`, `whatWeDoData`)
3. Modify the text, links, or data
4. Save - changes automatically reflect across the site

**Example:**
```typescript
export const heroData: HeroData = {
  headline: "Your Custom Headline Here",
  subheadline: "Your custom subheadline",
  primaryCta: {
    text: "Get Started",
    href: "#contact",
  },
  // ...
};
```

### TypeScript Interfaces

All data structures have TypeScript interfaces for type safety. If you add new fields, update the corresponding interface in the same file.

## 🎨 Design System

### Colors

The project uses Tailwind v4 CSS variables. **Never hardcode colors.**

**Primary Color**: `#009ad5` (Brand blue)

**Usage:**
```tsx
// ✅ Correct
<div className="bg-primary text-primary-foreground">
<div className="text-primary hover:text-primary/80">

// ❌ Incorrect
<div className="bg-[#009ad5]">
<div style={{ backgroundColor: '#009ad5' }}>
```

### Typography

**Font**: Poppins (loaded from Google Fonts)

**Hierarchy:**
- H1: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold`
- H2: `text-3xl sm:text-4xl md:text-5xl font-bold`
- Body: `text-base md:text-lg` (16-18px)

### Spacing

**Sections**: `py-20 md:py-28 lg:py-32`
**Container**: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`

## 🧩 Component Structure

```
app/
  ├── layout.tsx              # Root layout with SEO metadata
  └── page.tsx                # Landing page composition

components/
  ├── ui/                     # shadcn/ui components
  └── landing/                # Landing page sections
      ├── header.tsx
      ├── hero.tsx
      ├── what-we-do.tsx
      ├── solutions-showcase.tsx
      ├── who-we-serve.tsx
      ├── why-choose.tsx
      ├── services-grid.tsx
      ├── stats.tsx
      ├── client-logos.tsx
      ├── cta-section.tsx
      ├── contact-form.tsx
      ├── footer.tsx
      └── floating-cta.tsx

hooks/
  ├── use-intersection-observer.ts  # Scroll animations
  ├── use-counter-animation.ts      # Number counting
  └── use-scroll-position.ts        # Scroll tracking

lib/
  └── data/
      └── landing-data.ts           # All content
```

## 🔧 Customization

### Adding New Sections

1. Create a new component in `components/landing/`
2. Add content data to `lib/data/landing-data.ts`
3. Import and place the component in `app/page.tsx`

**Example:**
```tsx
// components/landing/testimonials.tsx
export function Testimonials() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-background">
      {/* Your content */}
    </section>
  );
}

// app/page.tsx
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <>
      {/* ... other sections */}
      <Testimonials />
      {/* ... */}
    </>
  );
}
```

### Changing Colors

Update CSS variables in `app/globals.css`:

```css
:root {
  --primary: #YOUR_COLOR_HERE;
  /* Other colors */
}
```

### Adding Images

1. Place images in the `public/` folder
2. Use Next.js `<Image>` component for optimization:

```tsx
import Image from "next/image";

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority  // For above-fold images
/>
```

## 📱 Responsive Design

### Breakpoints

```
sm:  640px   (Mobile landscape)
md:  768px   (Tablet)
lg:  1024px  (Desktop)
xl:  1280px  (Large desktop)
```

### Mobile-First Approach

Start with mobile styles, then add breakpoint modifiers:

```tsx
<div className="text-2xl md:text-4xl lg:text-5xl">
  {/* Scales from 24px → 36px → 48px */}
</div>
```

## 🎭 Animations

### Scroll Reveals

Components automatically fade in as they enter the viewport:

```tsx
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

<section ref={ref}>
  <div className={`transition-all duration-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}>
    {/* Content */}
  </div>
</section>
```

### Counter Animations

For animated numbers (stats):

```tsx
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const count = useCounterAnimation(500, 2000, isVisible);
// Counts from 0 to 500 over 2 seconds when visible
```

## 🔍 SEO

### Metadata

SEO metadata is configured in `app/layout.tsx`:
- Title and description
- Keywords
- Open Graph tags
- Twitter Card
- Robots directives

### Adding Structured Data

For enhanced search results, add JSON-LD in `app/layout.tsx`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Paltech™ Industrial Solutions",
      // ... more properties
    })
  }}
/>
```

## ♿ Accessibility

- ✅ Semantic HTML elements
- ✅ ARIA labels on icons and buttons
- ✅ Keyboard navigation support
- ✅ Focus visible on all interactive elements
- ✅ Color contrast meets WCAG AA
- ✅ Respects `prefers-reduced-motion`
- ✅ Alt text for images
- ✅ Form labels and validation

## 🚀 Performance

### Optimization Checklist

- ✅ Next.js Image optimization
- ✅ Code splitting (automatic)
- ✅ Server components (default)
- ✅ Lazy loading images
- ✅ Minimal dependencies
- ✅ CSS-only Tailwind (no runtime JS)
- ✅ Tree-shakeable icons (lucide-react)

### Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

## 📚 Documentation

Comprehensive developer guide available at:
**`docs/landing-page-guide.md`**

Includes:
- Complete architecture overview
- Design system reference
- Best practices
- Troubleshooting guide
- Future enhancement ideas

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.1.0
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: lucide-react
- **Language**: TypeScript 5
- **Package Manager**: pnpm

## 📦 Project Structure

```
paltech/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles & theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/
│   ├── ui/                # shadcn/ui components
│   └── landing/           # Landing page sections
├── hooks/                 # Custom React hooks
├── lib/
│   ├── data/             # Content data
│   └── utils.ts          # Utility functions
├── docs/                 # Documentation
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🤝 Contributing

1. Update content in `lib/data/landing-data.ts`
2. Follow the existing component patterns
3. Maintain type safety (TypeScript)
4. Test responsiveness on multiple devices
5. Check accessibility with axe DevTools

## 📄 License

All rights reserved - Paltech™ Industrial Solutions

## 🙋 Support

For questions or issues:
1. Check `docs/landing-page-guide.md`
2. Review component code comments
3. Refer to [Next.js documentation](https://nextjs.org/docs)
4. Refer to [Tailwind CSS documentation](https://tailwindcss.com/docs)
5. Refer to [shadcn/ui documentation](https://ui.shadcn.com)

---

**Built with ❤️ using modern web technologies**
