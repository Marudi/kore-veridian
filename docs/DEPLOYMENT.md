# Kore Veridian — Deployment & CI/CD

The site is a React SPA with a Cloudflare Worker backend, deployed to **Cloudflare Workers** with custom domains `koreveridian.ca` and `www.koreveridian.ca`.

## Local development

```bash
npm install
npm run dev
```

Copy `.dev.vars.example` to `.dev.vars` for local Worker secrets (SMTP, portal auth).

## Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Vite dev server + local Worker |
| `npm run build` | Typecheck and production build |
| `npm run lint` | Oxlint |
| `npm run ci` | Lint + build (same checks as GitHub Actions) |
| `npm run deploy` | Build and deploy via Wrangler (manual) |

## Git workflow

1. Create a feature branch from `main`
2. Open a pull request — **CI** runs lint + build; **Deploy Preview** publishes a temporary Workers URL
3. Review the preview link posted on the PR
4. Merge to `main` — **Deploy Production** publishes to koreveridian.ca

## GitHub Actions

| Workflow | Trigger | Result |
|----------|---------|--------|
| `ci.yml` | Pull requests to `main` | Lint and build verification |
| `deploy-preview.yml` | PR open/update/close | Preview Worker per PR; cleaned up when PR closes |
| `deploy-production.yml` | Push to `main`, manual dispatch | Production deploy |

## Required GitHub secrets

Add these under **Settings → Secrets and variables → Actions**:

| Secret | Description |
|--------|-------------|
| `CLOUDFLARE_API_TOKEN` | API token with **Workers Scripts Edit** and **Workers Routes Edit** |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |

Create the token at [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens) using the **Edit Cloudflare Workers** template.

### Automated setup (local)

If you are logged in to Cloudflare (`npx wrangler login`) and GitHub (Cursor / Git credential manager), run:

```bash
node scripts/setup-github-secrets.mjs
```

This reads your local Wrangler OAuth session and GitHub credentials, then writes both repository secrets. Re-run after `wrangler login` if the OAuth token expires. For long-lived CI, replace `CLOUDFLARE_API_TOKEN` in GitHub with a dedicated dashboard API token.

Optional: create a **production** environment in GitHub with required reviewers before deploys go live.

## Cloudflare Worker secrets (one-time)

These are **not** stored in GitHub. Set them in Cloudflare (or via Wrangler locally):

```bash
npx wrangler secret put SMTP_PASSWORD
npx wrangler secret put PORTAL_LOGIN_PASSWORD
npx wrangler secret put PORTAL_SESSION_SECRET
```

Non-secret configuration lives in `wrangler.jsonc` (`CONTACT_*`, `SMTP_HOST`, etc.).

## Manual deploy

```bash
npm run deploy
```

Requires `CLOUDFLARE_API_TOKEN` in the environment or `wrangler login`.

## Static assets

Hero videos are committed under `public/videos/`:

- `metallic-cubes.mp4` — default PageHero / marketing backgrounds
- `rotating-earth.mp4` — Login and Demo page backgrounds

Central paths are defined in `src/config/media.ts`.
