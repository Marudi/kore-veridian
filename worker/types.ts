export interface Env {
  SMTP_HOST: string
  SMTP_PORT: string
  SMTP_USER: string
  SMTP_PASSWORD?: string
  PORTAL_LOGIN_PASSWORD?: string
  PORTAL_SESSION_SECRET?: string
  CONTACT_TO_EMAIL: string
  CONTACT_FROM_EMAIL: string
  ENVIRONMENT?: string
}

export interface ContactPayload {
  name: string
  email: string
  company?: string
  type: string
  message: string
  website?: string
}

export interface CareerPayload {
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
