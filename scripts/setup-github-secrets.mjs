#!/usr/bin/env node
/**
 * Sets GitHub Actions secrets using:
 * - Cloudflare account ID + OAuth token from local Wrangler auth
 * - GitHub token from git credential manager / GITHUB_TOKEN / GH_TOKEN
 */
import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import sodium from 'tweetsodium'

const OWNER = 'Marudi'
const REPO = 'kore-veridian'
const ACCOUNT_ID = '233fce8e767d5217d153e314fa527658'

function readWranglerOAuthToken() {
  const configPath = path.join(
    os.homedir(),
    'AppData',
    'Roaming',
    'xdg.config',
    '.wrangler',
    'config',
    'default.toml',
  )
  const raw = fs.readFileSync(configPath, 'utf8')
  const match = raw.match(/oauth_token\s*=\s*"([^"]+)"/)
  if (!match) throw new Error('Wrangler OAuth token not found. Run: npx wrangler login')
  return match[1]
}

function readGitHubToken() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN

  const input = 'protocol=https\nhost=github.com\n\n'
  const result = spawnSync('git', ['credential', 'fill'], {
    input,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
  })

  if (result.status === 0 && result.stdout) {
    const passwordMatch = result.stdout.match(/^password=(.+)$/m)
    if (passwordMatch?.[1]) return passwordMatch[1].trim()
  }

  throw new Error(
    'GitHub token not found. Sign in to GitHub in Cursor/Git, or set GITHUB_TOKEN / GH_TOKEN.',
  )
}

async function githubRequest(token, route, options = {}) {
  const response = await fetch(`https://api.github.com${route}`, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`GitHub API ${route} failed (${response.status}): ${body}`)
  }

  if (response.status === 204) return null
  return response.json()
}

function encryptSecret(publicKeyBase64, secretValue) {
  const messageBytes = Buffer.from(secretValue, 'utf8')
  const keyBytes = Buffer.from(publicKeyBase64, 'base64')
  const encryptedBytes = sodium.seal(messageBytes, keyBytes)
  return Buffer.from(encryptedBytes).toString('base64')
}

async function setRepoSecret(githubToken, secretName, secretValue) {
  const keyData = await githubRequest(
    githubToken,
    `/repos/${OWNER}/${REPO}/actions/secrets/public-key`,
  )

  const encrypted = encryptSecret(keyData.key, secretValue)

  await githubRequest(githubToken, `/repos/${OWNER}/${REPO}/actions/secrets/${secretName}`, {
    method: 'PUT',
    body: JSON.stringify({
      encrypted_value: encrypted,
      key_id: keyData.key_id,
    }),
  })
}

async function createCloudflareApiToken(oauthToken) {
  // Wrangler OAuth tokens work with wrangler-action for deploys. Prefer a dedicated
  // dashboard API token for long-lived CI; OAuth tokens expire with wrangler login.
  return oauthToken
}

async function main() {
  console.log('Reading local Wrangler auth...')
  const oauthToken = readWranglerOAuthToken()

  console.log('Reading GitHub credentials...')
  const githubToken = readGitHubToken()

  console.log('Using Wrangler OAuth token for CLOUDFLARE_API_TOKEN...')
  const cloudflareApiToken = await createCloudflareApiToken(oauthToken)

  console.log('Setting CLOUDFLARE_ACCOUNT_ID secret...')
  await setRepoSecret(githubToken, 'CLOUDFLARE_ACCOUNT_ID', ACCOUNT_ID)

  console.log('Setting CLOUDFLARE_API_TOKEN secret...')
  await setRepoSecret(githubToken, 'CLOUDFLARE_API_TOKEN', cloudflareApiToken)

  console.log('Done. GitHub Actions secrets configured for Marudi/kore-veridian.')
}

main().catch((error) => {
  console.error(error.message || error)
  process.exit(1)
})
