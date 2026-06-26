import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  Headphones,
  FileText,
  Settings,
  LogOut,
  Cloud,
  Phone,
} from 'lucide-react'
import { PageHero } from '../components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { getSession, logout } from '../lib/api'

const portalLinks = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    description: 'Overview of your cloud and voice service health.',
    href: '#',
  },
  {
    icon: Cloud,
    title: 'Cloud Platform',
    description: 'Manage environments, tenants, and infrastructure.',
    href: '/platform',
  },
  {
    icon: Phone,
    title: 'Voice Services',
    description: 'Configure trunks, DIDs, and voice applications.',
    href: '/voice-services',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Open tickets and view incident history.',
    href: '/support',
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Guides, API references, and deployment docs.',
    href: '/resources',
  },
  {
    icon: Settings,
    title: 'Account Settings',
    description: 'Profile, billing contacts, and notification preferences.',
    href: '/contact',
  },
]

export function PortalPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSession()
      .then((session) => {
        if (!session.authenticated) {
          navigate('/login', { replace: true })
          return
        }
        setEmail(session.email ?? null)
      })
      .catch(() => navigate('/login', { replace: true }))
      .finally(() => setLoading(false))
  }, [navigate])

  const handleLogout = async () => {
    await logout()
    navigate('/login', { replace: true })
  }

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-text-secondary">
        Loading portal...
      </div>
    )
  }

  return (
    <>
      <PageHero
        badge="Portal"
        title="Welcome Back"
        titleAccent={email?.split('@')[0] ?? 'User'}
        description="Manage your Kore Veridian services from a single control plane."
      />

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <p className="text-sm text-text-secondary">
                Signed in as <span className="text-text-primary font-medium">{email}</span>
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalLinks.map((item) => {
              const Icon = item.icon
              return (
                <StaggerItem key={item.title}>
                  <Link
                    to={item.href}
                    className="group block p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-veridian/30 transition-all h-full"
                  >
                    <Icon className="w-8 h-8 text-veridian mb-4 group-hover:scale-105 transition-transform" />
                    <h3 className="font-semibold mb-2 group-hover:text-veridian transition-colors">{item.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          <AnimatedSection className="mt-12 p-6 rounded-2xl bg-veridian/5 border border-veridian/20 text-center" delay={0.2}>
            <p className="text-sm text-text-secondary">
              Full platform console access is provisioned per account. Contact{' '}
              <a href="mailto:contact@koreveridian.ca" className="text-veridian hover:underline">
                contact@koreveridian.ca
              </a>{' '}
              to enable advanced portal features for your organization.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
