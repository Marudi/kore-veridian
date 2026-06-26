import { sendMail } from 'cloudflare-smtp'
import type { CareerPayload, ContactPayload, Env } from './types'

function parseFromAddress(from: string): { email: string; name: string } {
  const match = from.match(/^(.+?)\s*<([^>]+)>$/)
  if (match) {
    return { name: match[1].trim(), email: match[2].trim() }
  }
  return { name: 'Kore Veridian', email: from.trim() }
}

function getSmtpConfig(env: Env) {
  const from = parseFromAddress(env.CONTACT_FROM_EMAIL)
  const port = Number(env.SMTP_PORT || 465)
  return {
    host: env.SMTP_HOST,
    port,
    secureTransport: (port === 587 ? 'starttls' : 'tls') as 'starttls' | 'tls',
    username: env.SMTP_USER,
    password: env.SMTP_PASSWORD!,
    from: from.email,
    to: env.CONTACT_TO_EMAIL,
    heloName: 'koreveridian.ca',
    messageIdDomain: 'koreveridian.ca',
  }
}

function wrapBase64(base64: string): string {
  const chunks: string[] = []
  for (let i = 0; i < base64.length; i += 76) {
    chunks.push(base64.slice(i, i + 76))
  }
  return chunks.join('\r\n')
}

function buildCareerMime(payload: CareerPayload, fromEmail: string, toEmail: string): string {
  const boundary = `----=_Part_${crypto.randomUUID()}`
  const subject = `[Kore Veridian Careers] ${payload.roleTitle} — ${payload.name}`

  const textBody = [
    'New career application — Kore Veridian',
    '',
    `Role: ${payload.roleTitle} (${payload.roleId})`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || '—'}`,
    `LinkedIn: ${payload.linkedin}`,
    `Portfolio: ${payload.portfolio || '—'}`,
    '',
    'Cover Letter:',
    payload.coverLetter,
    '',
    `Resume attached: ${payload.resumeFileName}`,
  ].join('\r\n')

  return [
    `From: Kore Veridian Careers <${fromEmail}>`,
    `To: ${toEmail}`,
    `Reply-To: ${payload.name} <${payload.email}>`,
    `Subject: ${subject}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@koreveridian.ca>`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    textBody.replace(/\n\./g, '\n..'),
    '',
    `--${boundary}`,
    `Content-Type: ${payload.resumeContentType}; name="${payload.resumeFileName}"`,
    'Content-Transfer-Encoding: base64',
    `Content-Disposition: attachment; filename="${payload.resumeFileName}"`,
    '',
    wrapBase64(payload.resumeBase64),
    '',
    `--${boundary}--`,
    '',
  ].join('\r\n')
}

async function sendRawMime(env: Env, mimeMessage: string): Promise<void> {
  const { connect } = await import('cloudflare:sockets')
  const config = getSmtpConfig(env)
  const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  let socket = connect(
    { hostname: config.host, port: config.port },
    { secureTransport: config.secureTransport === 'tls' ? 'on' : config.secureTransport === 'starttls' ? 'starttls' : 'off', allowHalfOpen: false },
  )
  let reader = socket.readable.getReader()
  let writer = socket.writable.getWriter()
  let buffer = ''

  const readResponse = async (expected: number[]): Promise<void> => {
    while (true) {
      const { value, done } = await reader.read()
      if (done) throw new Error('SMTP connection closed')
      buffer += decoder.decode(value, { stream: true })
      if (!buffer.endsWith('\r\n')) continue
      const lines = buffer.split('\r\n').filter(Boolean)
      const last = lines.at(-1) ?? ''
      const match = last.match(/^(\d{3})\s/)
      if (!match) continue
      const code = Number(match[1])
      const response = buffer.trimEnd()
      buffer = ''
      if (!expected.includes(code)) {
        throw new Error(`SMTP error ${code}: ${response}`)
      }
      return
    }
  }

  const command = async (cmd: string, expected: number[]): Promise<void> => {
    await writer.write(encoder.encode(`${cmd}\r\n`))
    await readResponse(expected)
  }

  const toBase64 = (value: string): string => btoa(String.fromCharCode(...encoder.encode(value)))

  try {
    await readResponse([220])
    await command(`EHLO ${config.heloName}`, [250])

    if (config.secureTransport === 'starttls') {
      await command('STARTTLS', [220])
      reader.releaseLock()
      writer.releaseLock()
      socket = socket.startTls()
      reader = socket.readable.getReader()
      writer = socket.writable.getWriter()
      buffer = ''
      await command(`EHLO ${config.heloName}`, [250])
    }

    await command('AUTH LOGIN', [334])
    await command(toBase64(config.username), [334])
    await command(toBase64(config.password), [235])
    await command(`MAIL FROM:<${config.from}>`, [250])
    await command(`RCPT TO:<${config.to}>`, [250, 251])
    await command('DATA', [354])
    await writer.write(encoder.encode(`${mimeMessage}\r\n.\r\n`))
    await readResponse([250])
    await command('QUIT', [221])
  } finally {
    try {
      reader.releaseLock()
      writer.releaseLock()
    } catch {
      /* ignore */
    }
    socket.close()
  }
}

export async function sendCareerApplicationEmail(env: Env, payload: CareerPayload): Promise<void> {
  if (!env.SMTP_PASSWORD) {
    if (env.ENVIRONMENT === 'development') {
      console.log('[careers] dry-run', { role: payload.roleTitle, applicant: payload.email })
      return
    }
    throw new Error('SMTP credentials are not configured')
  }

  const config = getSmtpConfig(env)
  const mime = buildCareerMime(payload, config.from, config.to)
  await sendRawMime(env, mime)
}

export async function sendContactEmail(env: Env, payload: ContactPayload): Promise<void> {
  if (!env.SMTP_PASSWORD) {
    if (env.ENVIRONMENT === 'development') {
      console.log('[contact] dry-run', { to: env.CONTACT_TO_EMAIL, payload })
      return
    }
    throw new Error('SMTP credentials are not configured')
  }

  const inquiryLabels: Record<string, string> = {
    demo: 'Request a Demo',
    consulting: 'Consulting Inquiry',
    managed: 'Managed Services',
    voice: 'Voice Services',
    partner: 'Partner Program',
    support: 'Technical Support',
    general: 'General Inquiry',
  }

  const inquiry = inquiryLabels[payload.type] ?? payload.type
  const config = getSmtpConfig(env)

  await sendMail(
    {
      host: config.host,
      port: config.port,
      secureTransport: config.secureTransport,
      username: config.username,
      password: config.password,
      from: config.from,
      to: config.to,
      heloName: config.heloName,
      messageIdDomain: config.messageIdDomain,
    },
    {
      subject: `[Kore Veridian] ${inquiry} — ${payload.name}`,
      replyTo: payload.email,
      text: [
        'New website contact form submission',
        '',
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Company: ${payload.company || '—'}`,
        `Inquiry Type: ${inquiry}`,
        '',
        'Message:',
        payload.message,
      ].join('\n'),
    },
  )
}
