import { handleContactRequest } from './contact'
import type { Env } from './types'

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/contact') {
      return handleContactRequest(request, env)
    }

    if (url.pathname === '/api/health') {
      return Response.json({ status: 'ok', service: 'kore-veridian' })
    }

    return new Response('Not Found', { status: 404 })
  },
} satisfies ExportedHandler<Env>
