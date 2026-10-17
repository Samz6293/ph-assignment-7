<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project: BazarDor (বজার দর)

Bangladeshi grocery price tracker. Single Next.js 16 app (no monorepo). UI copy and data fields are Bangla (`nameBn`, `categoryNameBn`).

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (runs typecheck + lint)
- `npm run lint` — bare `eslint`; scope with `npm run lint -- app/path/file.tsx`
- No test framework, no typecheck script. For a fast typecheck: `npx tsc --noEmit`

## Next.js 16 specifics

- `proxy.ts` at the repo root is the middleware (renamed from `middleware.ts`). Auth redirects for `/my-profile` and `/product/:path` live there. Never create `middleware.ts`.
- Path alias: `@/*` → repo root (e.g. `@/app/lib/auth`).

## Architecture

- Data is fetched at request time from Cloudflare Worker APIs (`api.api-store.workers.dev` primary, `api.abcz.workers.dev` fallback) in `app/constants/fetch.ts`, with local JSON fallbacks in `app/data/*.json`. 120s revalidate. There is no product database.
- Auth: Better Auth + MongoDB adapter. Server: `app/lib/auth.ts`; client: `app/lib/auth-client.ts`; catch-all route: `app/api/auth/[...all]`. Route group `(auth)/` holds sign-in, sign-up, my-profile.
- UI: HeroUI v3 + Tailwind CSS v4 via `@tailwindcss/postcss`. No `tailwind.config` — theme tokens are the `@theme` block in `app/globals.css`; edit colors there.
- Types for products/categories: `app/types.ts`.

## Environment

`.env` is gitignored. Required keys (see `app/lib/auth.ts`, `app/lib/auth-client.ts`): `DATABASE_URL` (MongoDB), `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET`, `GITHUB_CLIENT_ID`/`GITHUB_CLIENT_SECRET`. App renders with local JSON fallback if the worker APIs are down, but auth needs these set.
