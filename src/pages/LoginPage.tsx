import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lock, Mail, AlertCircle, Loader2, ArrowRight, Globe } from 'lucide-react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { BrandLogo } from '../components/ui/BrandLogo'
import { RotatingWorldMapBackground } from '../components/ui/RotatingWorldMap'
import { siteConfig } from '../data/site'
import { login } from '../lib/api'

type PortalType = 'customer' | 'partner'

export function LoginPage() {
  const navigate = useNavigate()
  const [portalType, setPortalType] = useState<PortalType>('customer')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const result = await login({ email, password, portal: portalType })
      if (result.redirect) {
        navigate(result.redirect)
        return
      }
      setError('Unable to sign in. Please try again.')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to sign in. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-4rem)]">
      <RotatingWorldMapBackground />

      <div className="relative z-10">
        {/* Hero */}
        <section className="pt-16 pb-8 lg:pt-20 lg:pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-veridian bg-veridian/10 rounded-full border border-veridian/25 mb-6"
            >
              <Globe className="w-3.5 h-3.5" />
              Global Platform Access
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              Kore Veridian <span className="gradient-text">Portal</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-text-secondary max-w-xl mx-auto leading-relaxed"
            >
              Access your cloud platform, voice services, and managed operations dashboard from anywhere in the
              world.
            </motion.p>
          </div>
        </section>

        {/* Login card */}
        <section className="pb-24">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="p-8 rounded-2xl glass-panel border border-veridian/15 shadow-2xl shadow-black/40 backdrop-blur-xl bg-bg-card/75">
                <div className="flex justify-center mb-8">
                  <BrandLogo variant="header" showTagline={false} />
                </div>

                <div className="flex rounded-xl bg-bg-primary/80 border border-border-subtle p-1 mb-8">
                  {(['customer', 'partner'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPortalType(type)}
                      className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
                        portalType === type
                          ? 'bg-veridian text-bg-primary shadow-sm shadow-veridian/20'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {type === 'customer' ? 'Customer' : 'Partner'}
                    </button>
                  ))}
                </div>

                {error && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-300 mb-6">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="login-email" className="block text-sm font-medium text-text-secondary mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                      <input
                        id="login-email"
                        type="email"
                        required
                        autoComplete="email"
                        disabled={submitting}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-bg-primary/90 border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-veridian/50 focus:ring-1 focus:ring-veridian/20 transition-colors disabled:opacity-50"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="login-password" className="block text-sm font-medium text-text-secondary">
                        Password
                      </label>
                      <a
                        href={`mailto:${siteConfig.contactEmail}?subject=Portal%20Password%20Reset`}
                        className="text-xs text-veridian hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                      <input
                        id="login-password"
                        type="password"
                        required
                        autoComplete="current-password"
                        disabled={submitting}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-bg-primary/90 border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:border-veridian/50 focus:ring-1 focus:ring-veridian/20 transition-colors disabled:opacity-50"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      <>
                        Sign In
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-border-subtle space-y-4 text-center">
                  <p className="text-sm text-text-secondary">
                    {portalType === 'partner' ? (
                      <>
                        Not a partner yet?{' '}
                        <Link to="/partners" className="text-veridian hover:underline">
                          Apply to the partner program
                        </Link>
                      </>
                    ) : (
                      <>
                        Need portal access?{' '}
                        <Link to="/contact" className="text-veridian hover:underline">
                          Contact our team
                        </Link>
                      </>
                    )}
                  </p>
                  <p className="text-xs text-text-muted">
                    {portalType === 'partner' ? 'Partner portal' : 'Customer portal'} credentials are issued after
                    onboarding.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  )
}
