import { useState, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { mainNavigation, topLinks } from '../../data/navigation'
import { MegaMenu } from '../navigation/MegaMenu'
import { Button } from '../ui/Button'
import { BrandLogo } from '../ui/BrandLogo'
import { cn } from '../../lib/utils'

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const activeMenuData = useMemo(
    () => mainNavigation.find((item) => item.label === activeMenu && item.columns),
    [activeMenu],
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setActiveMenu(null)
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden lg:block border-b border-border-subtle bg-bg-secondary/80">
        <div className="max-w-7xl mx-auto px-6 flex justify-end gap-6 py-2">
          {topLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className={cn(
          'relative transition-all duration-300',
          scrolled ? 'bg-bg-primary/95 backdrop-blur-xl shadow-lg shadow-black/20' : 'bg-bg-primary/90 backdrop-blur-md',
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-veridian/50">
              <BrandLogo variant="header" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {mainNavigation.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 px-3.5 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5 whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onMouseEnter={() => item.columns && setActiveMenu(item.label)}
                      className={cn(
                        'flex items-center gap-1 px-3.5 py-2 text-sm transition-colors rounded-lg whitespace-nowrap',
                        activeMenu === item.label
                          ? 'text-veridian bg-veridian/10'
                          : 'text-text-secondary hover:text-text-primary hover:bg-white/5',
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-3.5 h-3.5 transition-transform duration-200',
                          activeMenu === item.label && 'rotate-180',
                        )}
                      />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <Button variant="secondary" size="sm" href="/login">
                Login
              </Button>
              <Button variant="primary" size="sm" href="/demo">
                Request a Demo
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-text-secondary hover:text-text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Full-width mega menu panel */}
        <AnimatePresence>
          {activeMenuData && (
            <MegaMenu
              key={activeMenuData.label}
              menu={activeMenuData}
              isOpen
              onClose={() => setActiveMenu(null)}
            />
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-border-subtle bg-bg-secondary"
            >
              <div className="px-4 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
                {mainNavigation.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="block text-base font-medium text-text-primary py-2"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <div className="text-xs font-semibold uppercase tracking-wider text-veridian mb-2">
                          {item.label}
                        </div>
                        <div className="space-y-1 pl-2">
                          {item.columns?.flatMap((col) =>
                            col.items.map((sub) => (
                              <Link
                                key={sub.href}
                                to={sub.href}
                                className="block py-2 text-sm text-text-secondary hover:text-veridian transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {sub.title}
                              </Link>
                            )),
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-border-subtle">
                  <Button variant="secondary" href="/login" className="w-full">
                    Login
                  </Button>
                  <Button variant="primary" href="/demo" className="w-full">
                    Request a Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
