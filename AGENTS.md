# AGENTS.md

## Project

Personal website for Rafael Soares, built with Nuxt 4 and Nuxt UI. The app includes a landing page and a Netlify Forms-powered contact flow; `@netlify/nuxt` is integrated.

## Project Structure

- `app/pages/` — file-based pages, including the landing and contact pages.
- `app/components/` — feature components grouped under `app/` (shared UI), `landing/`, and `contact/`.
- `app/layouts/` — page layouts.
- `app/composables/` — app composables, including `useTitle()`.
- `app/assets/css/` — global styles and Tailwind theme.
- `app/app.config.ts` — Nuxt UI theme, colors, and icon overrides.
- `public/` — static assets.
- `.github/workflows/` — CI checks and Copilot setup.

## Commands

Use the repository's pinned Node and pnpm versions (`.node-version` and `package.json`).

| Task | Command |
|------|---------|
| Install | `pnpm install` |
| Dev | `pnpm dev` |
| Build | `pnpm build` (`nuxt build`) |
| Preview | `pnpm preview` |
| Lint | `pnpm lint` |
| Typecheck | `pnpm typecheck` |
| Nuxt/Vite diagnostics | `pnpm check:doctor` |
| Cleanup generated files | `pnpm cleanup` |

CI runs lint, `check:doctor`, and typecheck.
Run `pnpm check:doctor` after code changes before finishing.

## Skills and Tools

- Use the project `nuxt-rafasoares-com` skill before changing Nuxt code; it routes to the relevant Nuxt guidance.
- Nuxt and Regle MCP servers are configured in `.mcp.json`. Use their available documentation/tools when connected.
- `nuxt-skill-hub` is installed and configured for universal skill targets.

## Stack and Conventions

- **Nuxt 4** with the Nuxt 4 `app/` directory layout. Routes are defined in `app/pages/`; prerendering is configured in `nuxt.config.ts`.
- **Netlify** integration is provided by `@netlify/nuxt`; the contact form uses Netlify Forms.
- **Tailwind CSS v4** — use `@theme static {}` blocks in CSS, not `tailwind.config.ts`.
- **Icons**: use Tabler (`i-tabler-*`). Nuxt UI icon slots are overridden in `app/app.config.ts`. Ask before adding another icon set.
- **Color scheme**: dark-first (`dark light`). Primary=blue, secondary=slate, neutral=zinc.
- **Font**: DM Sans, configured in `app/assets/css/main.css`.
- **Vue same-name shorthand bindings**: use `:title` rather than `:title="title"` when the bound variable matches the prop name. Do not expand shorthand.
- **Component tag casing**: use kebab-case in templates (`<app-header>`, `<u-page-hero>`), except components that collide with native HTML tags and acronyms (e.g. `<Main>`, `<MDC>`).
- **Nuxt UI components**: use the `u-` prefix in templates.
- **SEO**: use `useTitle(title, description?)` for page head/SEO; it appends " - Rafael Soares".
- **Markdown**: use the `<markdown />` component from `@comark/vue`.
- **Commit and PR text**: use lowercase commit summaries. Keep PR descriptions concise and specific; avoid generic justifications.

## Do Not

- Add custom server routes or API endpoints without asking; the contact flow currently uses Netlify Forms.
- Duplicate SEO/head logic; use `useTitle()`.
- Add `tailwind.config.ts`; the theme is configured in CSS and `app/app.config.ts`.
