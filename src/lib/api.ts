export interface ContactFormData {
  name: string
  email: string
  company?: string
  type: string
  message: string
  website?: string
}

export interface ContactResponse {
  ok?: boolean
  message?: string
  error?: string
}

export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const result = (await response.json()) as ContactResponse

  if (!response.ok) {
    throw new Error(result.error || 'Failed to send message')
  }

  return result
}

export interface LoginData {
  email: string
  password: string
  portal: 'customer' | 'partner'
}

export interface LoginResponse {
  ok?: boolean
  redirect?: string
  error?: string
}

export interface SessionResponse {
  authenticated: boolean
  email?: string
  portal?: string
}

export async function login(data: LoginData): Promise<LoginResponse> {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(data),
  })

  const result = (await response.json()) as LoginResponse

  if (!response.ok) {
    throw new Error(result.error || 'Unable to sign in')
  }

  return result
}

export async function getSession(): Promise<SessionResponse> {
  const response = await fetch('/api/session', {
    credentials: 'same-origin',
  })

  return (await response.json()) as SessionResponse
}

export async function logout(): Promise<void> {
  await fetch('/api/logout', {
    method: 'POST',
    credentials: 'same-origin',
  })
}

export interface CareerApplicationData {
  name: string
  email: string
  phone?: string
  linkedin: string
  portfolio?: string
  coverLetter: string
  roleId: string
  roleTitle: string
  resumeFileName: string
  resumeContentType: string
  resumeBase64: string
  website?: string
}

export async function submitCareerApplication(data: CareerApplicationData): Promise<ContactResponse> {
  const response = await fetch('/api/careers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const result = (await response.json()) as ContactResponse

  if (!response.ok) {
    throw new Error(result.error || 'Failed to submit application')
  }

  return result
}

