# Paltech Landing Page - Developer Guide

## Overview

This guide documents the architecture, design system, and best practices for the Paltech industrial cooling solutions landing page. The page is built with Next.js 16, React 19, Tailwind CSS v4, and shadcn/ui components.

## Architecture

### Component Structure

```
app/
  ├── layout.tsx          # Root layout with metadata and SEO
  └── page.tsx            # Main landing page composition

components/
  ├── ui/                 # shadcn/ui components (Button, Card, Input, etc.)
  └── landing/            # Landing page-specific components
      ├── header.tsx              # Sticky navigation with mobile menu
      ├── hero.tsx                # Full-height hero section
      ├── what-we-do.tsx          # Services overview with bullet list
      ├── solutions-showcase.tsx  # Split layout with content + visual
      ├── who-we-serve.tsx        # Dark overlay section with industries
      ├── why-choose.tsx          # 4-column icon grid
      ├── services-grid.tsx       # Numbered dark cards
      ├── stats.tsx               # Animated counter statistics
      ├── client-logos.tsx        # Trust section with logos
      ├── cta-section.tsx         # Full-width call-to-action
      ├── contact-form.tsx        # Form with contact info
      ├── footer.tsx              # Site footer
      └── floating-cta.tsx        # Scroll-triggered CTA button

hooks/
  ├── use-intersection-observer.ts  # Scroll-triggered animations
  ├── use-counter-animation.ts      # Number counting animations
  └── use-scroll-position.ts        # Scroll position tracking

lib/
  └── data/
      └── landing-data.ts  # Centralized content with TypeScript interfaces
```

### Data Layer

All landing page content is centralized in `lib/data/landing-data.ts`. This approach provides:

- **Single source of truth**: All text content in one file
- **Type safety**: TypeScript interfaces for all data structures
- **Easy updates**: Content changes don't require touching component code
- **Scalability**: Ready for CMS integration or internationalization

#### Updating Content

To update landing page content:

1. Open `lib/data/landing-data.ts`
2. Locate the relevant data object (e.g., `heroData`, `whatWeDoData`)
3. Modify text, links, or structure
4. Save - changes automatically reflect across the site

Example:
```typescript
export const heroData: HeroData = {
  headline: "Your New Headline Here",
  subheadline: "Updated subheadline",
  // ...
};
```

## Design System

### Color Tokens

The site uses Tailwind v4 CSS variables for consistent theming. **Never hardcode colors.**

```css
/* Primary colors */
--primary: #009ad5          /* Brand blue */
--primary-foreground: ...   /* Text on primary */

/* Backgrounds */
--background: white (light) / dark (dark mode)
--foreground: text color

/* Semantic colors */
--muted: subtle backgrounds
--muted-foreground: secondary text
--border: border colors
```

**Usage in components:**
```tsx
// ✅ Correct
<div className="bg-primary text-primary-foreground">
<div className="bg-gray-50 text-muted-foreground">

// ❌ Incorrect
<div className="bg-[#009ad5]">
<div style={{ backgroundColor: '#009ad5' }}>
```

### Typography

**Font Family**: Poppins (defined in globals.css)

**Hierarchy:**
- Eyebrow: `text-sm uppercase tracking-wider text-primary font-semibold`
- H1 (Hero): `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold`
- H2 (Sections): `text-3xl sm:text-4xl md:text-5xl font-bold`
- H3 (Cards): `text-xl sm:text-2xl font-bold`
- Body: `text-base md:text-lg` (16-18px)
- Small: `text-sm` (14px)

**Line Height:**
- Headlines: `leading-tight` (1.25)
- Body: `leading-relaxed` (1.625)

### Spacing

**Section Padding:**
```tsx
py-20 md:py-28 lg:py-32  // Vertical padding
```

**Content Container:**
```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
```

**Grid Gaps:**
- Small: `gap-4`
- Medium: `gap-6 lg:gap-8`
- Large: `gap-8 lg:gap-12`

### Responsive Breakpoints

```
sm:  640px  (mobile landscape)
md:  768px  (tablet)
lg:  1024px (desktop)
xl:  1280px (large desktop)
```

**Approach**: Mobile-first. Start with mobile styles, then add `md:` and `lg:` modifiers.

### Component Patterns

#### Section Structure
```tsx
<section className="py-20 md:py-28 lg:py-32 bg-background">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Eyebrow */}
    <div className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
      SECTION LABEL
    </div>

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
      Section Headline
    </h2>

    {/* Content */}
  </div>
</section>
```

#### Cards with Hover Effects
```tsx
<Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <CardContent className="p-6">
    {/* Card content */}
  </CardContent>
</Card>
```

#### Custom Bullets
```tsx
<div className="flex items-start gap-3">
  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
  <p>List item text</p>
</div>
```

## Animations

### Scroll-Triggered Animations

Components use the `useIntersectionObserver` hook for reveal animations:

```tsx
const [ref, isVisible] = useIntersectionObserver({
  freezeOnceVisible: true,
  threshold: 0.1
});

<section ref={ref}>
  <div className={`transition-all duration-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}>
    {/* Content fades in and slides up */}
  </div>
</section>
```

**Staggered animations:**
```tsx
style={{ transitionDelay: `${index * 100}ms` }}
```

### Counter Animations

Stats use `useCounterAnimation` for number counting:

```tsx
const count = useCounterAnimation(endValue, 2000, isVisible);
```

### Accessibility

- **Reduced motion**: Animations respect `prefers-reduced-motion` preference
- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **Focus states**: All interactive elements have visible focus states
- **ARIA labels**: Icons and buttons have appropriate labels
- **Keyboard navigation**: Full keyboard support

## Performance Optimization

### Image Optimization

Use Next.js `<Image>` component:
```tsx
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  loading="lazy"  // For below-fold images
  priority        // For above-fold (hero) images
/>
```

### Code Splitting

- Components are automatically code-split by Next.js
- Use `"use client"` directive only where needed (interactive components)
- Server components (default) for static content

### Bundle Size

Current dependencies are minimal:
- Next.js, React, React DOM (core)
- Tailwind CSS v4 (CSS-only, no JS)
- lucide-react (tree-shakeable icons)
- shadcn/ui (copy-paste components, no package bloat)

## SEO Best Practices

### Metadata (app/layout.tsx)

Comprehensive metadata is configured:
- Title and description
- Keywords
- Open Graph tags (social sharing)
- Twitter Card
- Robots directives

### Structured Data

To add JSON-LD structured data:

```tsx
// app/layout.tsx or page.tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Paltech Industrial Solutions",
      // ... more schema.org properties
    })
  }}
/>
```

### Page Speed

Target metrics:
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Total Blocking Time (TBT): < 200ms
- Cumulative Layout Shift (CLS): < 0.1

## Responsive Design

### Mobile-First Approach

1. Start with mobile layout
2. Add `md:` prefix for tablet
3. Add `lg:` prefix for desktop

### Touch Targets

All buttons and interactive elements meet minimum 44×44px touch target size:
```tsx
<Button size="lg" className="px-8 py-6 h-auto">
```

### Mobile Menu

Header uses shadcn Sheet component for mobile navigation:
- Slides in from right
- Full-height overlay
- Easy to dismiss

## Future Enhancements

### Internationalization (i18n)

The data layer structure is ready for i18n:

1. Install `next-intl` or similar
2. Create localized data files:
   ```
   lib/data/
     ├── landing-data.en.ts
     ├── landing-data.es.ts
     └── landing-data.fr.ts
   ```
3. Load appropriate data based on locale

### CMS Integration

Replace static data objects with API calls:

```tsx
// Before
import { heroData } from "@/lib/data/landing-data";

// After
const heroData = await fetchHeroData();
```

### A/B Testing

Add variant testing to sections:

```tsx
const variant = getVariant("hero-cta"); // "control" | "variant-a"

<Button>
  {variant === "control" ? "Request Quote" : "Get Started"}
</Button>
```

### Analytics

Add tracking to key interactions:

```tsx
onClick={() => {
  trackEvent("cta_clicked", { location: "hero" });
  // ... existing handler
}}
```

## Troubleshooting

### Animations Not Working

1. Check browser's reduced motion setting
2. Verify `useIntersectionObserver` is called in client component (`"use client"`)
3. Check threshold value (lower = triggers earlier)

### Style Not Applying

1. Ensure Tailwind class exists in v4
2. Check for typos in class names
3. Verify CSS variables are defined in globals.css
4. Check specificity conflicts

### Build Errors

1. Run `pnpm install` to ensure dependencies are installed
2. Check TypeScript errors: `pnpm run build`
3. Verify all imports use correct paths

## Maintenance

### Regular Updates

- **Dependencies**: Update monthly (except major versions)
- **Content**: Review quarterly for accuracy
- **Performance**: Monitor Core Web Vitals weekly
- **Accessibility**: Audit with axe DevTools quarterly

### Content Review Checklist

- [ ] All phone numbers, emails, addresses current
- [ ] Statistics accurate (years in business, countries served)
- [ ] Product/service offerings up to date
- [ ] CTAs lead to correct destinations
- [ ] Client logos have permission for display

## Support

For questions about the landing page architecture or implementation:
1. Review this guide
2. Check component code comments
3. Refer to Next.js documentation: https://nextjs.org/docs
4. Refer to Tailwind CSS v4 documentation: https://tailwindcss.com/docs
5. Refer to shadcn/ui documentation: https://ui.shadcn.com

---

**Last Updated**: October 2025
**Version**: 1.0

