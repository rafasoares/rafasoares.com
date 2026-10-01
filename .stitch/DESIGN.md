---
name: Rafael Soares Portfolio
colors:
  primary: '#3B82F6'
  secondary: '#64748B'
  neutral: '#71717A'
  background-dark: '#09090B'
  background-light: '#FFFFFF'
  foreground-dark: '#FAFAFA'
  foreground-light: '#18181B'
  success: '#22C55E'
  error: '#EF4444'
---

# Design System: Rafael Soares Portfolio

## 1. Visual Theme & Atmosphere

This is a dark-first personal portfolio with a quiet technical confidence. The visual language is minimal, spacious, and product-oriented: a neutral zinc foundation gives the work room to breathe, blue supplies the primary point of emphasis, and small Tabler icon accents make the interface feel like a polished developer tool rather than a promotional landing page. Light mode is supported through Nuxt UI semantic surfaces, but dark mode is the intended first impression.

The composition favors a few large, legible moments over dense decoration. The hero pairs a direct introduction with a layered stack of application screenshots, creating depth through rotation and shadow rather than ornamental illustration. Contact and success states are similarly focused, using generous spacing, clear hierarchy, and restrained controls to keep the user moving toward a conversation.

## 2. Color Palette & Roles

### Primary Foundation

- **Obsidian Zinc** `#09090B`: Dark-mode page background and deepest surface, resolved through Nuxt UI's neutral zinc scale.
- **Clean White** `#FFFFFF`: Light-mode page background and high-contrast surface.
- **Soft Zinc Surface** `#18181B`: Dark-mode elevated surfaces, controls, and subtle containers.
- **Slate Support** `#64748B`: Secondary UI role for muted controls and supporting actions. Configured as Nuxt UI's `secondary` color.

### Accent & Interactive

- **Clear Interface Blue** `#3B82F6`: Primary interactive emphasis, links, focus accents, and the hero's radial glow. Configured as `primary: blue`.
- **Neutral Ghost** `#71717A`: Low-emphasis icon buttons, secondary actions, and quiet navigation controls. Configured as `neutral: zinc`.

### Typography & Text Hierarchy

- **Bright Zinc** `#FAFAFA`: Primary text on dark surfaces, headings, and high-priority labels.
- **Deep Zinc** `#18181B`: Primary text on light surfaces.
- **Muted Zinc** `#A1A1AA`: Supporting descriptions, helper text, and low-priority metadata.

### Functional States

- **Availability Green** `#22C55E`: The hero's available-for-work badge, chip, and success messaging.
- **Alert Red** `#EF4444`: Form submission failure and error feedback.
- **Informational Blue** `#3B82F6`: Informational emphasis when a state needs the primary accent rather than a warning color.

The exact shade variants are supplied by Nuxt UI and Tailwind's semantic color scales. New surfaces should use semantic Nuxt UI tokens rather than introducing isolated hex values.

## 3. Typography Rules

### Hierarchy & Weights

- **Family:** DM Sans, configured as the global sans-serif family. It is a contemporary humanist sans with open forms, approachable rhythm, and strong readability at both display and body sizes.
- **Hero title:** Use a large Nuxt UI page-hero heading with a strong display weight. Keep it short, direct, and sentence-cased, as in `Hi, I'm Rafael`.
- **Section titles:** Use compact, confident headings for sections such as `Technical Arsenal`; avoid decorative all-caps treatment.
- **Body copy:** Use DM Sans at a comfortable reading size with relaxed line height. Descriptions are short paragraphs and should remain easy to scan.
- **Labels and controls:** Use medium-to-semibold weights for form labels, buttons, and badges. Keep labels sentence-cased and action-oriented.
- **Iconography:** Use Tabler icons consistently. Icons are functional marks, not decorative replacements for essential text.

No custom letter-spacing or alternate display family is declared in source. Preserve normal tracking and let size, weight, and whitespace create hierarchy.

### Spacing Principles

The interface follows Nuxt UI and Tailwind's compact utility rhythm, with 8px multiples visible in the key compositions: 32px gaps in the contact grid and social links, 32px top spacing before the contact content, and 16px form-field rhythm from the configured `space-y-4` form base. Major sections should feel breathable, while individual controls remain compact and practical.

## 4. Component Stylings

### Buttons

Buttons are Nuxt UI primitives with a restrained, utility-first personality. The primary submit and contact actions use the default emphasized treatment. Secondary actions use neutral subtle or ghost variants, with Tabler icons where the icon communicates destination or action. Social links are icon-only ghost buttons, while `Get in touch` combines an icon and label. The contact scheduling action is full width and uses an extra-large neutral subtle treatment. Keep controls compact but ensure icon-only buttons retain a clear touch target.

### Cards & Image Containers

Feature items are composed from `u-page-card` around `u-page-feature`, keeping technology summaries in consistent Nuxt UI containers. The card styling is delegated to the framework rather than overridden locally, so use semantic surfaces, light borders, and restrained elevation. Portfolio screenshots are layered absolute images with `rounded-xl`, `scale-75`, and drop shadows. Their depth comes from overlap, rotation, and shadow, not from heavy framing.

### Navigation

The global header is a Nuxt UI header with the menu toggle disabled, reflecting a very small site with no full navigation drawer. The left title is a Tabler home icon. The right side holds a color-mode toggle and a ghost neutral GitHub button with tooltip text and an external link. The footer is a lightweight Nuxt UI footer pinned after the main content and carries a single copyright line.

### Inputs & Forms

The contact form uses Nuxt UI form primitives with full-width inputs, a full-width autocomplete subject menu, and an autoresizing textarea with a minimum height of 288px. Fields are vertically separated by a 16px rhythm, required fields are clearly marked, and validation occurs on input and change. The submit button follows the form controls and automatically exposes loading feedback. The honeypot field is hidden from the visual layout.

### Portfolio and Status Components

The hero availability badge uses a soft success treatment, a standalone success chip, and rounded-full geometry to read as a live status signal. The screenshot collage presents Rails, Vue, and UI examples as a deliberately offset stack, with progressively rotated images and shared rounded corners. The success page reuses the page-hero pattern and replaces the hero image with a large success icon, keeping the interaction model familiar.

## 5. Layout Principles

### Grid & Structure

The global shell is a vertical flex composition: header, a flexible main region, and footer. Landing content is organized as a page body with a horizontal page hero followed by a feature section. The contact page uses a three-column grid with an 8-unit gap; the form occupies two columns and the scheduling/social aside occupies one. Content is wrapped in Nuxt UI containers and page primitives, so use the framework's centered max-width rather than inventing a competing container width.

### Whitespace Strategy

Whitespace is generous at section boundaries and deliberate inside controls. The contact page uses a 32px separation before its main grid and 32px gaps between aside actions and social links. Forms use 16px vertical spacing. Preserve these values as the baseline rhythm, then increase section breathing room before adding ornamental elements.

### Alignment & Visual Balance

The landing hero is horizontally oriented: text and calls to action establish the reading anchor while the screenshot collage supplies a heavier visual counterweight. Text remains left-aligned for directness. Feature content is organized for quick scanning. Contact content is left-weighted toward the form, with the right aside reserved for one primary scheduling action and a compact social row.

### Responsive Behavior & Touch

The layout is mobile-first through Tailwind and Nuxt UI primitives. The three-column contact grid should collapse to a single readable column on narrow screens, with the form before the aside. The horizontal hero should stack its text and screenshot collage when space is limited. Keep all icon buttons at framework-provided touch sizes, preserve full-width fields, and avoid allowing screenshot transforms to push content outside the viewport.

## 6. Design System Notes for Stitch Generation

### Language to Use

Describe screens as dark-first, spacious, technical, calm, and quietly premium. Use blue as a precise interactive accent against zinc and slate neutrals. Favor editorial restraint, direct copy, readable DM Sans typography, functional Tabler iconography, soft semantic surfaces, and depth created by real product screenshots.

### Color References

Use Obsidian Zinc `#09090B` and Soft Zinc `#18181B` for dark foundations, Clean White `#FFFFFF` and Deep Zinc `#18181B` for light mode, Clear Interface Blue `#3B82F6` for primary actions and hero emphasis, Slate Support `#64748B` for secondary roles, Neutral Ghost `#71717A` for quiet controls, Bright Zinc `#FAFAFA` for dark-mode text, Muted Zinc `#A1A1AA` for supporting text, Availability Green `#22C55E` for positive status, and Alert Red `#EF4444` for errors.

### Component Prompts

- Create a dark-first developer portfolio hero for Rafael Soares using DM Sans, a concise left-aligned introduction, a green availability badge, ghost social buttons, and a layered collage of real application screenshots with rounded corners, rotation, and soft shadows. Use zinc surfaces and one precise blue glow near the lower-right edge.
- Create a contact page with a restrained Nuxt UI-like form occupying two-thirds of a centered content area and a one-third utility aside containing a full-width neutral scheduling button plus large ghost social icons. Keep the page spacious, practical, and strongly readable.
- Create a technology arsenal section with six consistent, lightly elevated feature cards for Vue/Nuxt, Rails, AI-assisted development, cloud computing, CSS frameworks, and databases. Use Tabler-style icons, short descriptions, and a quiet dark zinc surface with blue or neutral accents.

### Incremental Iteration

Keep the shell, typography, and semantic colors stable while iterating. Refine hierarchy through spacing and image scale before adding decoration. Preserve the asymmetrical screenshot collage as the signature visual gesture, keep availability and success states green, and avoid gradients that overpower the product imagery. Any new component should reuse Nuxt UI primitives, Tabler icons, DM Sans, and the existing blue/slate/zinc semantic roles.
