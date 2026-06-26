import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { NavMenu } from '../../data/navigation'
import { cn } from '../../lib/utils'

interface MegaMenuProps {
  menu: NavMenu
  isOpen: boolean
  onClose: () => void
}

export function MegaMenu({ menu, isOpen, onClose }: MegaMenuProps) {
  if (!menu.columns || !isOpen) return null

  const columnCount = menu.columns.length

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-0 right-0 top-full z-50"
    >
      <div className="border-t border-border-subtle bg-bg-secondary/98 backdrop-blur-xl shadow-2xl shadow-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div
            className={cn(
              'grid gap-8 lg:gap-10',
              columnCount === 3 && 'lg:grid-cols-3',
              columnCount === 2 && 'lg:grid-cols-2 lg:max-w-3xl mx-auto',
              columnCount === 1 && 'lg:grid-cols-1 lg:max-w-md',
            )}
          >
            {menu.columns.map((column, colIndex) => (
              <motion.div
                key={column.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: colIndex * 0.04, duration: 0.25 }}
                className="min-w-0"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-veridian bg-veridian/10 rounded-full border border-veridian/20 whitespace-nowrap">
                    {column.label}
                  </span>
                </div>
                <div className="space-y-1">
                  {column.items.map((item, itemIndex) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.href + item.title}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: colIndex * 0.04 + itemIndex * 0.025, duration: 0.2 }}
                      >
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className="group flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bg-card border border-border-subtle flex items-center justify-center group-hover:border-veridian/30 group-hover:bg-veridian/10 transition-all duration-200">
                            <Icon className="w-4 h-4 text-text-secondary group-hover:text-veridian transition-colors" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium text-text-primary group-hover:text-veridian transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-text-muted mt-0.5 leading-relaxed">
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
  )
}
