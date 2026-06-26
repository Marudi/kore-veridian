import { sendContactEmail } from './email'
import type { ContactPayload, Env } from './types'

const MAX_NAME = 120
const MAX_EMAIL = 254
const MAX_COMPANY = 200
const MAX_MESSAGE = 5000
const ALLOWED_TYPES = new Set(['demo', 'consulting', 'managed', 'voice', 'partner', 'general'])

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'text/plain, application/json',
}

function jsonResponse(body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: corsHeaders })
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

function parsePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== 'object') return null

  const record = body as Record<string, unknown>
  const name = sanitize(record.name, MAX_NAME)
  const email = sanitize(record.email, MAX_EMAIL)
  const company = sanitize(record.company, MAX_COMPANY)
  const type = sanitize(record.type, 32) || 'general'
  const message = sanitize(record.message, MAX_MESSAGE)
  const website = sanitize(record.website, 200)

  if (!name || !email || !message || !isValidEmail(email)) return null
  if (!ALLOWED_TYPES.has(type)) return null

  return { name, email, company, type, message, website }
}

export async function handleContactRequest(request: Request, env: Env): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders })
  }

  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400)
  }

  const payload = parsePayload(body)
  if (!payload) {
    return jsonResponse({ error: 'Invalid or missing required fields' }, 400)
  }

  if (payload.website) {
    return jsonResponse({ ok: true })
  }

  try {
    await sendContactEmail(env, payload)
    return jsonResponse({
      ok: true,
      message: 'Your message has been sent. We will respond within one business day.',
    })
  } catch (error) {
    console.error('[contact] submission failed:', error)
    return jsonResponse(
      { error: 'Unable to send your message right now. Please email hello@koreveridian.com directly.' },
      503,
    )
  }
}
