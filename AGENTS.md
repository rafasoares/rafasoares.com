# AGENTS.md — @rafasoares/rafasoares.com

## Project Overview

Personal and professional website for Rafael Soares, built with **Nuxt 4**, **Vue 3.5**, **Nuxt UI v4**, and **Tailwind CSS v4**. The site is a static/prerendered app using file-based routing, auto-imports, and the Nuxt UI component library for all UI elements.

## Tech Stack

| Technology      | Version | Purpose                          |
| --------------- | ------- | -------------------------------- |
| Nuxt            | ^4.4    | Full-stack Vue framework         |
| Vue             | 3.5+    | Reactive UI framework            |
| Nuxt UI         | ^4.6    | Component library (125+ comps)   |
| Tailwind CSS    | ^4.2    | Utility-first CSS                |
| TypeScript      | ^5.9    | Type safety                      |
| pnpm            | 10.33+  | Package manager                  |
| ESLint          | ^10.1   | Linting (via @nuxt/eslint)       |
| Nuxt Icon       | 2.2     | Iconify integration (Tabler set) |

## Directory Structure (Nuxt 4)

```
├── app/                    # Application source (Nuxt 4 layout)
│   ├── app.vue             # Root component — wraps <UApp>
│   ├── app.config.ts       # Runtime app config (colors, icons, SEO)
│   ├── assets/css/main.css # Global styles (Tailwind + Nuxt UI imports)
│   ├── components/         # Auto-imported Vue components
│   │   └── app/            # App-level components (header, footer)
│   ├── layouts/            # Page layouts (default.vue)
│   └── pages/              # File-based routes
├── public/                 # Static assets (favicon, images)
├── nuxt.config.ts          # Nuxt configuration
├── tsconfig.json           # TypeScript config (references .nuxt/)
├── eslint.config.mjs       # ESLint flat config (via @nuxt/eslint)
└── package.json            # Dependencies and scripts
```

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
pnpm typecheck    # Run vue-tsc type checking
```

## Coding Conventions

### Vue & TypeScript

- **Always** use `<script setup lang="ts">` — Composition API only, never Options API.
- **Prefer Vue 3.5+ shorthand syntax:**
  - Use `useTemplateRef()` instead of `ref` for template refs.
  - Use shorthand `v-bind` where available: `:items` → shorthand prop with same-name variable.
  - Use `defineModel()` for two-way binding.
  - Use `defineProps` with destructuring and defaults via `withDefaults` or reactive destructure.
- **Prefer `shallowRef`** over `ref` when deep reactivity is not needed.
- Keep SFC section order: `<script>` → `<template>` → `<style>`.
- Use `computed()` to derive state; keep source state minimal.
- Use auto-imports — do not manually import Vue APIs (`ref`, `computed`, `watch`, etc.) or Nuxt composables (`useFetch`, `useRoute`, `useState`, etc.).

### Nuxt 4 Patterns

- **File-based routing**: pages live in `app/pages/`. Dynamic routes use bracket syntax: `[id].vue`, `[...slug].vue`.
- **Auto-imported components**: components in `app/components/` are auto-imported. Nested directories use path-based naming (e.g., `app/header.vue` → `<AppHeader>`).
- **Composables**: place custom composables in `app/composables/` for auto-import.
- **Utils**: place utility functions in `app/utils/` for auto-import.
- **Layouts**: defined in `app/layouts/`. `default.vue` is applied automatically.
- **Route rules**: define hybrid rendering via `routeRules` in `nuxt.config.ts`. The home page (`/`) is prerendered.
- **SEO**: use `useSeoMeta()` and `useHead()` composables. The `titleTemplate` is configured in `app.config.ts`.
- **Runtime config**: use `useRuntimeConfig()` for environment variables. Expose via `runtimeConfig` in `nuxt.config.ts`.
- **Server routes**: place in `server/api/` or `server/routes/` if needed.

### Nuxt UI v4

- **All UI uses Nuxt UI components** — never create custom equivalents for what Nuxt UI already provides.
- Components are kebab-case with `u-` prefix in templates (e.g., `<u-button>`, `<u-page>`, `<u-navigation-menu>`).
- Root layout wraps content in `<u-app>`. Pages use `<u-page>`, `<u-page-hero>`, `<u-main>`, `<u-container>`, `<u-header>`, `<u-footer>`, etc.
- **Color theme** is configured in `app.config.ts` under `ui.colors` (primary: blue, secondary: slate, neutral: zinc).
- **Icons** use the Tabler set (`i-tabler-*`). All Nuxt UI default icons are overridden to use Tabler in `app.config.ts` under `ui.icons`.
- Use the `app.config.ts` `ui` key to customize component defaults, colors, and icons globally.
- For forms, use `<u-form>`, `<u-form-field>`, `<u-input>`, `<u-select>`, `<u-textarea>`, etc.
- For overlays, use `<u-modal>`, `<u-slideover>`, `<u-drawer>`, `<u-tooltip>`, `<u-popover>`, etc.
- For navigation, use `<u-navigation-menu>`, `<u-breadcrumb>`, `<u-tabs>`, etc.
- For feedback, use `useToast()` composable and `<u-alert>` component.
- Refer to https://ui.nuxt.com for full component API docs.

### Tailwind CSS v4

- Global styles in `app/assets/css/main.css` — imports `tailwindcss` and `@nuxt/ui`.
- Custom theme values defined under `@theme static {}` block (custom font, custom colors).
- Font: `DM Sans`.
- Use Tailwind utility classes directly in templates. Prefer utility classes over custom CSS.

### ESLint

- Uses `@nuxt/eslint` with flat config. Stylistic rules are set to `warn` severity.
- Run `pnpm lint` before committing.

## Key Patterns in This Project

- **Same-name shorthand for props**: when a variable name matches a prop name, use the shorthand (e.g., `<u-navigation-menu :items>` instead of `:items="items"`).
- **Color mode**: `useColorMode()` is used in `app.vue` to set dynamic `theme-color` meta tag.
- **Component naming**: app-level components in `app/components/app/` are auto-imported with `App` prefix (e.g., `<app-header>`, `<app-footer>`).
- **Prerendering**: the home route (`/`) is prerendered via `routeRules`.

## Documentation References

- Nuxt: https://nuxt.com/docs
- Nuxt UI v4: https://ui.nuxt.com
- Tailwind CSS v4: https://tailwindcss.com/docs
- Vue 3.5: https://vuejs.org/guide/introduction
- Nuxt LLMs: https://nuxt.com/llms.txt
- Nuxt UI LLMs: https://ui.nuxt.com/llms.txt
