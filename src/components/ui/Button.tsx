import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-veridian hover:bg-veridian-light text-bg-primary font-semibold shadow-lg shadow-veridian/25 hover:shadow-veridian/40',
  secondary:
    'bg-bg-card hover:bg-bg-card-hover text-text-primary border border-border-subtle',
  ghost: 'bg-transparent hover:bg-white/5 text-text-secondary hover:text-text-primary',
  outline:
    'bg-transparent border border-veridian/40 text-veridian hover:bg-veridian/10 hover:border-veridian',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-2.5 text-sm rounded-xl',
  lg: 'px-8 py-3.5 text-base rounded-xl',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, external, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]',
      variants[variant],
      sizes[size],
      className,
    )

    if (href) {
      if (external) {
        return (
          <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        )
      }
      return (
        <Link to={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
