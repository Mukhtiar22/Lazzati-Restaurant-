---
name: Heritage & Horizon
colors:
  surface: '#fcf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fcf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e5e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#56423c'
  inverse-surface: '#31312d'
  inverse-on-surface: '#f3f0ea'
  outline: '#8a726a'
  outline-variant: '#ddc0b7'
  surface-tint: '#a0401b'
  primary: '#9d3e19'
  on-primary: '#ffffff'
  primary-container: '#bd562f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59c'
  secondary: '#77574d'
  on-secondary: '#ffffff'
  secondary-container: '#fed3c7'
  on-secondary-container: '#795950'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cca830'
  on-tertiary-container: '#4f3e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#802a04'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#e7bdb1'
  on-secondary-fixed: '#2c160e'
  on-secondary-fixed-variant: '#5d4037'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fcf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e5e2dc'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-md:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.2'
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.15em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style

The design system is built for a premium fine-dining experience that bridges the ancient soul of Sindh with the sophisticated minimalism of modern gastronomy. It targets a discerning audience that appreciates both cultural depth and contemporary luxury.

The style is **Modern Minimalist with Heritage Accents**. It avoids the clutter of traditional patterns by distilling the geometric essence of Sindhi Ajrak motifs into clean, hairline vector graphics. The UI should evoke a sense of quiet prestige—spacious, intentional, and architecturally grounded. We draw structural inspiration from the iconic arches of Sukkur, utilizing soft curves and asymmetrical layouts to create a sense of organic movement within a structured digital space.

## Colors

The palette is derived from the natural landscape of the Indus riverbanks and the traditional pigments of local craftsmanship.

- **Terracotta Orange (#C35A33):** The primary brand color, representing the baked clay of ancient structures. Used for primary actions and key highlights.
- **Deep Clay Brown (#5D4037):** Used for primary text and grounding elements, providing a softer alternative to pure black.
- **Warm Sand & Rich Cream (#F9F6F0):** The primary background colors, creating a "gallery-like" whitespace that feels expensive and breathable.
- **Subtle Gold (#D4AF37):** Reserved strictly for micro-interactions, divider accents, or high-tier status indicators.

**Dark Mode:** When active, the background shifts to a deep Umber (#1A1614), with surfaces utilizing a slightly lighter Clay Brown (#2C2522). Typography shifts to the Cream tone for optimal legibility.

## Typography

This design system employs a high-contrast typographic pairing to reflect its "Heritage vs. Modern" narrative.

- **Headlines:** **Libre Caslon Text** is used for all editorial and display moments. Its classical proportions and sharp serifs evoke the authority of high-end publishing and historical elegance.
- **Body & UI:** **Plus Jakarta Sans** provides a friendly yet precise counterpoint. Its modern, slightly rounded geometry ensures high readability for menu descriptions and reservation flows.
- **Rhythm:** Use ample line height (1.6) for body text to maintain the "luxury of space." Use all-caps labels with wide tracking for navigation and category headers to add a formal, structured feel.

## Layout & Spacing

The layout philosophy follows a **Smooth Asymmetrical Grid**. While based on a standard 12-column system, content should frequently "break the grid" to mimic the flow of the Indus river or the arches of Sukkur.

- **Breakpoints:** Mobile (<600px), Tablet (600px-1024px), Desktop (>1024px).
- **Asymmetry:** On desktop, pair a large, arched image on the left with text offset to the right. Use uneven column spans (e.g., a 5-column description next to a 7-column image) to create visual interest.
- **White Space:** Padding is intentional and aggressive. Sections are separated by large vertical gaps (stack-lg) to ensure each dish or story feels curated.

## Elevation & Depth

This design system avoids heavy shadows in favor of **Tonal Layering** and **Architectural Overlaps**.

- **Surface Levels:** Depth is created by placing Cream surfaces over Sand backgrounds. In Dark Mode, use subtle shifts from Umber to Clay Brown.
- **Soft Shadows:** If elevation is required (e.g., a floating reservation bar), use a very diffused, low-opacity shadow tinted with the secondary brown: `rgba(93, 64, 55, 0.08)`.
- **The "Arch" Mask:** Use CSS mask-properties or SVG clips to apply the "Lab-e-Mehran" arch shape to image containers, creating a literal architectural window into the content.
- **Glassmorphism:** Use a subtle "Frosted Sand" effect for navigation bars—a light backdrop blur with 80% opacity cream background to maintain legibility over moving content.

## Shapes

The shape language is defined by the juxtaposition of crisp geometric lines and sweeping curves.

- **The Standard Radius:** Buttons and input fields use a consistent **0.5rem (8px)** radius for a "soft-modern" feel.
- **The Signature Curve:** Large layout elements (images, card containers) should utilize a much larger, asymmetrical radius—specifically rounding only the top-left and top-right corners (2rem to 4rem) to mimic the Sukkur arches.
- **Motifs:** Incorporate the "Ajrak Star" as a micro-divider or a bullet point icon. Keep these motifs small and monochromatic to ensure they remain sophisticated accents rather than dominant patterns.

## Components

### Buttons
- **Primary:** Solid Terracotta background, Cream text. No border. High-padding (16px 32px).
- **Secondary:** Transparent background, Deep Brown border (1px), Deep Brown text.
- **Interactive State:** On hover, primary buttons shift to a slightly deeper terracotta; secondary buttons fill with a very pale sand tint.

### Cards (Menu Items)
- **Style:** Flat, no-border cards. Use the "Arch" shape for the image at the top.
- **Typography:** Headline-sm for the dish name, Body-md for the description, and Gold-tinted Label-caps for the price.

### Inputs
- **Style:** Underlined fields rather than boxes, echoing a minimalist "written" menu.
- **Focus State:** The underline transitions from Sand to Gold.

### Navigation
- **Floating Bar:** A slim, centered bar with a heavy backdrop blur. 
- **Menu Toggle:** A custom "Ajrak" inspired icon (four squares forming a diamond) instead of the traditional hamburger menu.

### Chips/Tags
- **Style:** Small, pill-shaped tags used for dietary markers (e.g., "Organic", "Heritage"). Use a light Sand background with Deep Brown text.