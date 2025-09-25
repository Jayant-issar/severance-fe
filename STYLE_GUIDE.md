# Severance Design System & Style Guide

## Brand Identity

### Brand Name
**Severance** - A backend development practice platform focused on learning through hands-on questions and assignments.

### Brand Positioning
"Practice backend questions & learn by doing" - Emphasizing practical, hands-on learning through interactive assignments and real-world scenarios.

---

## Color System

### Primary Colors
- **Primary**: `hsl(var(--primary))` - Main brand color (purple/blue gradient tones)
- **Primary Light**: `hsl(var(--primary-light))` - Lighter variant for gradients and accents
- **Primary Dark**: `hsl(var(--primary-dark))` - Darker variant for depth

### Neutral Colors
- **Background**: `hsl(var(--background))` - Main background color (dark theme)
- **Foreground**: `hsl(var(--foreground))` - Primary text color (light on dark)
- **Muted Foreground**: `hsl(var(--muted-foreground))` - Secondary text color
- **Border**: `hsl(var(--border))` - Subtle borders and dividers

### Semantic Colors
- **Secondary**: `hsl(var(--secondary))` - Secondary actions and highlights
- **Accent**: `hsl(var(--accent))` - Interactive elements and focus states
- **Card**: `hsl(var(--card))` - Card backgrounds with subtle transparency

### Usage Guidelines
- **Maximum 5 colors total** across the entire application
- Use solid colors; avoid gradients except for subtle background effects
- Maintain proper contrast ratios for accessibility
- Override text colors when changing background colors

---

## Typography

### Font Families
- **Primary Font**: Geist Sans (`font-sans`) - For headings and body text
- **Monospace Font**: Geist Mono (`font-mono`) - For code snippets and technical content

### Font Hierarchy
\`\`\`css
/* Headings */
.text-6xl    /* 60px - Hero titles */
.text-5xl    /* 48px - Section titles */
.text-4xl    /* 36px - Subsection titles */
.text-3xl    /* 30px - Card titles */
.text-2xl    /* 24px - Large testimonials */
.text-xl     /* 20px - Brand name, navigation */
.text-lg     /* 18px - Feature descriptions */

/* Body Text */
.text-base   /* 16px - Primary body text */
.text-sm     /* 14px - Secondary text, captions */
.text-xs     /* 12px - Labels, fine print */
\`\`\`

### Typography Rules
- **Line Height**: Use `leading-relaxed` (1.625) or `leading-6` (1.5) for body text
- **Text Balance**: Apply `text-balance` or `text-pretty` to titles for optimal line breaks
- **Font Weights**: 
  - `font-normal` (400) - Body text
  - `font-medium` (500) - Emphasized text
  - `font-semibold` (600) - Headings and titles

---

## Layout System

### Layout Method Priority
1. **Flexbox** (primary) - `flex items-center justify-between`
2. **CSS Grid** (complex 2D layouts) - `grid grid-cols-3 gap-4`
3. **Avoid** floats and absolute positioning

### Spacing Scale
Use Tailwind's spacing scale consistently:
- `gap-4` (16px) - Standard component spacing
- `gap-6` (24px) - Section spacing
- `p-4` (16px) - Standard padding
- `py-8` (32px) - Vertical section padding
- `px-5` (20px) - Horizontal container padding

### Container Widths
- **Mobile**: Full width with `px-4` or `px-5`
- **Desktop**: `max-w-7xl mx-auto` for main containers
- **Content**: `max-w-[1220px]` for hero sections
- **Text Content**: `max-w-lg` or `max-w-2xl` for readability

---

## Component Patterns

### Cards
\`\`\`tsx
// Bento Card Pattern
<div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
  {/* Background with blur effect */}
  <div className="absolute inset-0 rounded-2xl bg-[rgba(231,236,235,0.08)] backdrop-blur-sm" />
  
  {/* Content */}
  <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
    {/* Card content */}
  </div>
</div>
\`\`\`

### Buttons
\`\`\`tsx
// Primary Button
<Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-white/10">
  Start Practicing Now
</Button>

// Secondary Button
<Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-6 py-2 rounded-full font-medium shadow-sm">
  Learn More
</Button>
\`\`\`

### Testimonial Cards
- **Large Cards**: `h-[502px]` with `text-2xl` quotes
- **Small Cards**: `h-[244px]` with `text-[17px]` quotes
- **Avatar Sizes**: 48px for large cards, 36px for small cards
- **Border Radius**: `rounded-[10px]` for cards, `rounded-full` for avatars

---

## Visual Effects

### Background Effects
- **Grid Pattern**: Subtle dashed grid with `stroke-opacity="0.11"`
- **Blur Effects**: `blur-[130px]` for large background elements
- **Gradients**: Linear gradients from primary to primary-light
- **Backdrop Blur**: `backdrop-blur-sm` for glass-morphism effects

### Shadows
- **Cards**: `shadow-[0px_2px_4px_rgba(0,0,0,0.08)]`
- **Buttons**: `shadow-lg` or custom shadows with ring effects
- **Elevated Elements**: `shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]`

### Borders
- **Subtle Borders**: `border-white/20` or `border-border`
- **Outline Offset**: `outline-offset-[-1px]` for precise borders
- **Border Radius**: `rounded-2xl` (16px) for cards, `rounded-full` for buttons

---

## Content Guidelines

### Voice & Tone
- **Practical**: Focus on hands-on learning and real-world application
- **Encouraging**: Emphasize progress and skill building
- **Clear**: Use simple, direct language about backend concepts
- **Action-Oriented**: Use verbs like "practice," "learn," "build," "master"

### Key Messaging
- **Primary Value**: "Practice backend questions & learn by doing"
- **Benefits**: Hands-on learning, real-world scenarios, progress tracking
- **Target Audience**: Developers wanting to improve backend skills
- **Differentiator**: Interactive assignments with instant feedback

### Content Patterns
- **Headlines**: Focus on outcomes ("Master Backend Development")
- **Descriptions**: Emphasize practical benefits and learning approach
- **CTAs**: Use action words ("Start Practicing," "Begin Learning")
- **Features**: Highlight interactive and practical aspects

---

## Responsive Design

### Breakpoints
- **Mobile**: `< 768px` - Single column, full width
- **Tablet**: `768px - 1024px` - Two columns, adjusted spacing
- **Desktop**: `> 1024px` - Three columns, full layout

### Mobile-First Approach
\`\`\`tsx
// Example responsive classes
className="text-3xl md:text-4xl lg:text-6xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="px-4 md:px-6 lg:px-8"
\`\`\`

### Component Adaptations
- **Hero Section**: Adjust height and text size across breakpoints
- **Bento Grid**: 1 column mobile, 2 tablet, 3 desktop
- **Navigation**: Hamburger menu on mobile, full nav on desktop

---

## Accessibility

### Color Contrast
- Ensure minimum 4.5:1 contrast ratio for normal text
- Use 3:1 contrast ratio for large text (18px+ or 14px+ bold)
- Test with tools like WebAIM Contrast Checker

### Interactive Elements
- **Focus States**: Visible focus indicators on all interactive elements
- **Touch Targets**: Minimum 44px touch targets for mobile
- **Screen Readers**: Use semantic HTML and ARIA labels

### Content Structure
- **Headings**: Proper heading hierarchy (h1 → h2 → h3)
- **Alt Text**: Descriptive alt text for all images
- **Skip Links**: Navigation skip links for keyboard users

---

## Implementation Notes

### CSS Custom Properties
The design system uses CSS custom properties for theming:
\`\`\`css
:root {
  --primary: /* Primary brand color */
  --primary-light: /* Light variant */
  --foreground: /* Text color */
  --background: /* Background color */
  /* ... other variables */
}
\`\`\`

### Tailwind Configuration
Extend Tailwind config for custom values:
\`\`\`js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        primary: 'hsl(var(--primary))',
        // ... other custom colors
      }
    }
  }
}
\`\`\`

### Component Library
Use shadcn/ui components as the foundation:
- Button, Card, Sheet, Dialog components
- Consistent styling with CSS variables
- Accessible by default with proper ARIA attributes

---

## File Organization

### Component Structure
\`\`\`
components/
├── ui/              # Base UI components (shadcn/ui)
├── sections/        # Page sections (hero, bento, etc.)
├── bento/          # Bento grid illustrations
└── layout/         # Layout components (header, footer)
\`\`\`

### Styling Approach
- **Utility-First**: Use Tailwind CSS utilities
- **Component Styles**: Minimal custom CSS, prefer Tailwind
- **Consistent Patterns**: Reuse established component patterns
- **Responsive**: Mobile-first responsive design

This style guide ensures consistent design implementation across your entire Severance web application while maintaining the beautiful dark theme with purple/blue gradients and focus on backend development practice.
