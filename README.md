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

### Option 1: Cloudflare Dashboard (recommended)

1. Push this repository to GitHub or GitLab.
2. Open [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select this repository.
4. Use these build settings:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | `20` (set in Environment variables → `NODE_VERSION`) |

5. Deploy. Cloudflare will rebuild on every push to your production branch.

SPA routing is handled by `public/_redirects`, which rewrites all routes to `index.html`.

### Option 2: Wrangler CLI

```sh
npm install -g wrangler
npm run build
npx wrangler pages deploy dist --project-name=datasphere
```

`wrangler.toml` is included for Pages project configuration.

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
