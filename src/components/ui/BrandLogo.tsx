import { companyTagline } from '../../data/content'
import { cn } from '../../lib/utils'

interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'compact'
  showTagline?: boolean
  className?: string
}

export function BrandLogo({ variant = 'header', showTagline, className }: BrandLogoProps) {
  const showTaglineText = showTagline ?? variant !== 'compact'

  const iconClass =
    variant === 'header'
      ? 'h-11 w-11 lg:h-12 lg:w-12'
      : variant === 'footer'
        ? 'h-10 w-10'
        : 'h-9 w-9'

  const nameClass =
    variant === 'header'
      ? 'text-base sm:text-lg font-semibold'
      : variant === 'footer'
        ? 'text-base font-semibold'
        : 'text-sm font-semibold'

  return (
    <div className={cn('flex items-center gap-3 min-w-0', className)}>
      <img
        src="/logos/Icon-Only-White.svg"
        alt=""
        aria-hidden="true"
        width={48}
        height={48}
        className={cn(iconClass, 'flex-shrink-0 object-contain')}
      />
      <div className="flex flex-col justify-center min-w-0">
        <span className={cn('text-text-primary tracking-tight leading-tight whitespace-nowrap', nameClass)}>
          Kore Veridian
        </span>
        {showTaglineText && (
          <span
            className={cn(
              'text-text-muted leading-snug mt-0.5',
              variant === 'header' ? 'text-[11px] sm:text-xs hidden md:block' : 'text-xs',
            )}
          >
            {companyTagline}
          </span>
        )}
      </div>
    </div>
  )
}
