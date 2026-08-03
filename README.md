# Datasphere

Premium software studio website built with React, TypeScript, Tailwind CSS, and Vite.

## Local development

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:8080`.

## Build

```sh
npm run build
npm run preview
```

Production output is written to `dist/`.

## Deploy to Cloudflare Pages

### Cloudflare Dashboard settings

Use **Cloudflare Pages** (not Workers deploy). In your project **Settings → Build**:

| Setting | Value |
|---|---|
| Framework preset | None |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Deploy command** | *(leave empty)* |
| **Root directory** | `/` |
| Node.js version | `20` (Environment variable: `NODE_VERSION=20`) |

> **Important:** Do **not** use `bun run build` or `npx wrangler deploy` for this static Vite site.  
> Cloudflare was failing because `bun.lock` was out of sync with `package.json`. This project uses **npm** (`package-lock.json`).

SPA routing is handled by `public/_redirects`.

### Option 1: Connect Git (recommended)

1. Push this repository to GitHub or GitLab.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Apply the build settings in the table above.
4. Deploy — Cloudflare rebuilds on every push.

### Option 2: Wrangler CLI

```sh
npm install
npm run build
npx wrangler pages deploy dist --project-name=datasphere
```

Use `wrangler pages deploy`, not `wrangler deploy`.

### Custom domain

In Cloudflare Pages → your project → **Custom domains** → add your domain and follow the DNS instructions.

## Tech stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion + GSAP
- React Router

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests |
