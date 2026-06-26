import { sendCareerApplicationEmail } from './email'
import type { CareerPayload, Env } from './types'

const MAX_NAME = 120
const MAX_EMAIL = 254
const MAX_PHONE = 32
const MAX_URL = 500
const MAX_COVER = 5000
const MAX_FILENAME = 200
const MAX_RESUME_BASE64 = 2.8 * 1024 * 1024 // ~2 MB file encoded

const ALLOWED_RESUME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
])

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function jsonResponse(body: unknown, status = 200): Response {
  return Response.json(body, { status, headers: corsHeaders })
}

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLength)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

function parsePayload(body: unknown): CareerPayload | null {
  if (!body || typeof body !== 'object') return null

  const record = body as Record<string, unknown>
  const name = sanitize(record.name, MAX_NAME)
  const email = sanitize(record.email, MAX_EMAIL)
  const phone = sanitize(record.phone, MAX_PHONE)
  const linkedin = sanitize(record.linkedin, MAX_URL)
  const portfolio = sanitize(record.portfolio, MAX_URL)
  const coverLetter = sanitize(record.coverLetter, MAX_COVER)
  const roleId = sanitize(record.roleId, 80)
  const roleTitle = sanitize(record.roleTitle, 200)
  const resumeFileName = sanitize(record.resumeFileName, MAX_FILENAME)
  const resumeContentType = sanitize(record.resumeContentType, 120)
  const resumeBase64 = sanitize(record.resumeBase64, MAX_RESUME_BASE64)
  const website = sanitize(record.website, 200)

  if (!name || !email || !coverLetter || !roleId || !roleTitle || !resumeFileName || !resumeBase64) {
    return null
  }
  if (!isValidEmail(email) || !isValidUrl(linkedin)) return null
  if (portfolio && !isValidUrl(portfolio)) return null
  if (!ALLOWED_RESUME_TYPES.has(resumeContentType)) return null

  return {
    name,
    email,
    phone,
    linkedin,
    portfolio,
    coverLetter,
    roleId,
    roleTitle,
    resumeFileName,
    resumeContentType,
    resumeBase64,
    website,
  }
}

export async function handleCareerApplication(request: Request, env: Env): Promise<Response> {
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
    await sendCareerApplicationEmail(env, payload)
    return jsonResponse({
      ok: true,
      message: 'Your application has been submitted. Our talent team will respond within 5 business days.',
    })
  } catch (error) {
    console.error('[careers] submission failed:', error)
    return jsonResponse(
      { error: 'Unable to submit your application right now. Please email contact@koreveridian.ca with your resume.' },
      503,
    )
  }
}
