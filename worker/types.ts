export interface Env {
  RESEND_API_KEY?: string
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
