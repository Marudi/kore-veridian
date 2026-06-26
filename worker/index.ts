import { handleCareerApplication } from './careers'
import { handleContactRequest } from './contact'
import { handleLoginRequest, handleLogoutRequest, handleSessionRequest } from './auth'
import type { Env } from './types'

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/api/contact') {
      return handleContactRequest(request, env)
    }

    if (url.pathname === '/api/login') {
      return handleLoginRequest(request, env)
    }

    if (url.pathname === '/api/session') {
      return handleSessionRequest(request, env)
    }

    if (url.pathname === '/api/logout') {
      return handleLogoutRequest(request)
    }

    if (url.pathname === '/api/careers') {
      return handleCareerApplication(request, env)
    }

    if (url.pathname === '/api/health') {
      return Response.json({ status: 'ok', service: 'kore-veridian' })
    }

    return new Response('Not Found', { status: 404 })
  },
} satisfies ExportedHandler<Env>
