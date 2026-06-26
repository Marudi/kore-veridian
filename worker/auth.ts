import type { Env } from './types'

const SESSION_COOKIE = 'kv_session'
const SESSION_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Credentials': 'true',
}

interface SessionPayload {
  email: string
  portal: string
  exp: number
}

function jsonResponse(body: unknown, status = 200, headers: Record<string, string> = {}): Response {
  return Response.json(body, { status, headers: { ...corsHeaders, ...headers } })
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function signSession(payload: SessionPayload, secret: string): Promise<string> {
  const data = btoa(JSON.stringify(payload))
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data))
  const sig = btoa(String.fromCharCode(...new Uint8Array(signature)))
  return `${data}.${sig}`
}

async function verifySession(token: string, secret: string): Promise<SessionPayload | null> {
  const [data, sig] = token.split('.')
  if (!data || !sig) return null

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify'],
  )

  const signatureBytes = Uint8Array.from(atob(sig), (c) => c.charCodeAt(0))
  const valid = await crypto.subtle.verify('HMAC', key, signatureBytes, new TextEncoder().encode(data))
  if (!valid) return null

  try {
    const payload = JSON.parse(atob(data)) as SessionPayload
    if (payload.exp < Date.now()) return null
    return payload
  } catch {
    return null
  }
}

function sessionCookie(token: string, maxAge: number): string {
  return `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`
}

function clearSessionCookie(): string {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
}

function getSessionSecret(env: Env): string {
  if (!env.PORTAL_SESSION_SECRET && env.ENVIRONMENT === 'production') {
    throw new Error('PORTAL_SESSION_SECRET is not configured')
  }
  return env.PORTAL_SESSION_SECRET || 'development-only-secret'
}

function getPortalPassword(env: Env): string | undefined {
  return env.PORTAL_LOGIN_PASSWORD
}

export async function handleLoginRequest(request: Request, env: Env): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders })
  }

  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  let body: { email?: string; password?: string; portal?: string }
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400)
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  const password = typeof body.password === 'string' ? body.password : ''
  const portal = body.portal === 'partner' ? 'partner' : 'customer'

  if (!email || !password || !isValidEmail(email)) {
    return jsonResponse({ error: 'Invalid email or password' }, 400)
  }

  const portalPassword = getPortalPassword(env)
  if (!portalPassword || password !== portalPassword) {
    return jsonResponse({ error: 'Invalid email or password. Contact us if you need portal access.' }, 401)
  }

  const token = await signSession(
    {
      email,
      portal,
      exp: Date.now() + SESSION_MAX_AGE * 1000,
    },
    getSessionSecret(env),
  )

  return jsonResponse(
    { ok: true, redirect: '/portal' },
    200,
    { 'Set-Cookie': sessionCookie(token, SESSION_MAX_AGE) },
  )
}

export async function handleSessionRequest(request: Request, env: Env): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders })
  }

  const cookie = request.headers.get('Cookie') ?? ''
  const match = cookie.match(new RegExp(`${SESSION_COOKIE}=([^;]+)`))
  const token = match?.[1]

  if (!token) {
    return jsonResponse({ authenticated: false })
  }

  const session = await verifySession(token, getSessionSecret(env))
  if (!session) {
    return jsonResponse({ authenticated: false }, 401, { 'Set-Cookie': clearSessionCookie() })
  }

  return jsonResponse({
    authenticated: true,
    email: session.email,
    portal: session.portal,
  })
}

export async function handleLogoutRequest(request: Request): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders })
  }

  return jsonResponse({ ok: true }, 200, { 'Set-Cookie': clearSessionCookie() })
}
