# AGENTS.md

## Project

Personal website for Rafael Soares — currently a static site deployed to GitHub Pages.

## Commands

| Task | Command |
|------|---------|
| Dev | `pnpm dev` |
| Build | `pnpm build` (runs `nuxt generate --preset github-pages`) |
| Lint | `pnpm lint` |
| Typecheck | `pnpm typecheck` |

## Stack Choices That Diverge From Defaults

- **Nuxt 4** currently using static generation (`nuxt generate`) — no server routes or API layer at this time.
- **Tailwind CSS v4** — uses `@theme static {}` blocks, not `tailwind.config.ts`.
- **Icons**: Prefer Tabler (`i-tabler-*`). All Nuxt UI icon slots are overridden in [app/app.config.ts](app/app.config.ts). Never add or use a different icon set without asking first.
- **Color scheme**: dark-first (`dark light`). Primary=blue, secondary=slate, neutral=zinc. Custom green palette (Nuxt green) defined in [app/assets/css/main.css](app/assets/css/main.css).
- **Font**: DM Sans (configured via `@theme static` in CSS, not via config file).

## Conventions

- **Component tag casing**: kebab-case in templates (`<app-header>`, `<u-page-hero>`), not PascalCase. Exception: use PascalCase for single-word components to avoid collision with native HTML tags (e.g. `<Icon>`, `<Form>`) and for acronyms (e.g. `<MDC>` instead of `<m-d-c>`).
- **Nuxt UI components**: use the `u-` prefix in templates (e.g. `<u-button>`, `<u-app>`, `<u-page>`).
- **`useTitle` composable**: always use `useTitle(title, description?)` for page head/SEO — it appends " - Rafael Soares" automatically.
- **MDC**: `@nuxtjs/mdc` is installed for rendering markdown inline via `<MDC :value="..." />`.

## Do Not

- Add server routes or API endpoints without asking — the site is currently static-only.
- Duplicate SEO/head logic — use `useTitle()`.
- Add `tailwind.config.ts` — theme is configured via CSS `@theme static` blocks and [app/app.config.ts](app/app.config.ts).
