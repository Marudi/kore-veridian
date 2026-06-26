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
