import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { footerNavigation } from '../../data/navigation'
import { companyTagline } from '../../data/content'
import { BrandLogo } from '../ui/BrandLogo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border-subtle bg-bg-secondary">
      <div className="absolute inset-0 bg-gradient-to-t from-veridian/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-veridian/50">
              <BrandLogo variant="footer" showTagline={false} />
            </Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs mb-6">
              {companyTagline} Cloud-first, AI-powered consulting, managed services, and voice platform solutions.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'LinkedIn', href: '#', icon: 'in' },
                { label: 'Twitter', href: '#', icon: 'X' },
                { label: 'GitHub', href: '#', icon: 'GH' },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-xs font-bold text-text-muted hover:text-veridian hover:border-veridian/30 transition-all"
                >
                  {icon}
                </a>
              ))}
              <a
                href="/contact"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-text-muted hover:text-veridian hover:border-veridian/30 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerNavigation).map(([key, links]) => (
            <div key={key}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-4 capitalize">
                {key}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-text-muted hover:text-veridian transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} Kore Veridian. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/security" className="text-xs text-text-muted hover:text-text-primary transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
