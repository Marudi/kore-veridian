# Kore Veridian

Marketing site and Cloudflare Worker backend for [koreveridian.ca](https://koreveridian.ca).

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · Cloudflare Workers

## Quick start

```bash
npm install
npm run dev
```

## CI/CD

Pull requests run lint and build checks and deploy a preview Worker. Merges to `main` deploy production automatically.

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for secrets, Wrangler configuration, and the full Git workflow.
