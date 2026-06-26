import type { ContactPayload, Env } from './types'

const inquiryLabels: Record<string, string> = {
  demo: 'Request a Demo',
  consulting: 'Consulting Inquiry',
  managed: 'Managed Services',
  voice: 'Voice Services',
  partner: 'Partner Program',
  general: 'General Inquiry',
}

function buildEmailHtml(payload: ContactPayload): string {
  const inquiry = inquiryLabels[payload.type] ?? payload.type

  return `
    <h2>New contact inquiry — Kore Veridian</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(payload.name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(payload.email)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(payload.company || '—')}</td></tr>
      <tr><td><strong>Inquiry Type</strong></td><td>${escapeHtml(inquiry)}</td></tr>
    </table>
    <h3>Message</h3>
    <p style="white-space:pre-wrap;font-family:sans-serif;">${escapeHtml(payload.message)}</p>
  `
}

function buildEmailText(payload: ContactPayload): string {
  const inquiry = inquiryLabels[payload.type] ?? payload.type
  return [
    'New contact inquiry — Kore Veridian',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || '—'}`,
    `Inquiry Type: ${inquiry}`,
    '',
    'Message:',
    payload.message,
  ].join('\n')
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export async function sendContactEmail(env: Env, payload: ContactPayload): Promise<void> {
  if (!env.RESEND_API_KEY) {
    if (env.ENVIRONMENT === 'development') {
      console.log('[contact] dry-run — no RESEND_API_KEY configured', payload)
      return
    }
    throw new Error('Email service is not configured')
  }

  const inquiry = inquiryLabels[payload.type] ?? payload.type
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: payload.email,
      subject: `[Kore Veridian] ${inquiry} — ${payload.name}`,
      html: buildEmailHtml(payload),
      text: buildEmailText(payload),
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    console.error('[contact] Resend API error:', response.status, errorBody)
    throw new Error('Failed to send notification email')
  }
}
