import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { NavMenu } from '../../data/navigation'

interface MegaMenuProps {
  menu: NavMenu
  isOpen: boolean
  onClose: () => void
}

export function MegaMenu({ menu, isOpen, onClose }: MegaMenuProps) {
  if (!menu.columns) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 right-0 top-full pt-2"
          onMouseLeave={onClose}
        >
          <div className="glass-panel rounded-2xl shadow-2xl shadow-black/40 overflow-hidden mx-4 lg:mx-auto lg:max-w-7xl">
            <div className="absolute inset-0 bg-gradient-to-br from-veridian/5 via-transparent to-accent-purple/5 pointer-events-none" />
            <div className="relative p-6 lg:p-8">
              <div
                className={`grid gap-8 ${
                  menu.columns.length === 3
                    ? 'lg:grid-cols-3'
                    : menu.columns.length === 2
                      ? 'lg:grid-cols-2'
                      : 'lg:grid-cols-1'
                }`}
              >
                {menu.columns.map((column, colIndex) => (
                  <motion.div
                    key={column.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: colIndex * 0.05, duration: 0.3 }}
                  >
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-veridian bg-veridian/10 rounded-full border border-veridian/20">
                        {column.label}
                      </span>
                    </div>
                    <div className="space-y-1">
                      {column.items.map((item, itemIndex) => {
                        const Icon = item.icon
                        return (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: colIndex * 0.05 + itemIndex * 0.03, duration: 0.25 }}
                          >
                            <Link
                              to={item.href}
                              onClick={onClose}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center group-hover:border-veridian/30 group-hover:bg-veridian/10 transition-all duration-200">
                                <Icon className="w-4.5 h-4.5 text-text-secondary group-hover:text-veridian transition-colors" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-sm font-medium text-text-primary group-hover:text-veridian transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-xs text-text-muted mt-0.5 leading-relaxed line-clamp-2">
                                  {item.description}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
