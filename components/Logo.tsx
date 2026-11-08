/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'

type LogoColor = 'burgundy' | 'cream' | 'white' | 'ink'

interface LogoProps {
  /** horizontal = icono + wordmark (principal); icon = solo icono */
  variant?: 'horizontal' | 'icon'
  /** claro → burgundy, oscuro → cream */
  color?: LogoColor
  className?: string
}

// Proporciones oficiales del lockup (viewBox 857.45 × 245.5) y del icono (213 × 245.5).
const RATIO = { horizontal: 857.45 / 245.5, icon: 213 / 245.5 }

/**
 * Logo oficial de Statera. El wordmark es custom: nunca re-teclearlo en una fuente.
 * Mínimo digital: 120 px de ancho (lockup), 24 px (icono).
 */
export default function Logo({ variant = 'horizontal', color = 'burgundy', className }: LogoProps) {
  const file = variant === 'horizontal' ? 'logo' : 'icon'
  const h = 245.5
  return (
    <img
      src={`/brand/statera-${file}-${color}.svg`}
      alt={variant === 'horizontal' ? 'Statera' : ''}
      aria-hidden={variant === 'icon' ? true : undefined}
      width={Math.round(h * RATIO[variant])}
      height={h}
      className={clsx('block h-auto select-none', className)}
      draggable={false}
    />
  )
}
