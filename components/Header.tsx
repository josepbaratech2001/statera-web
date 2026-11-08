'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import BetaModal from './BetaModal'
import Logo from './Logo'

const navItems = [
  { label: 'Plataforma', href: '/#features' },
  { label: 'Metodología', href: '/#how-it-works' },
  { label: 'Analytics', href: '/#analytics' },
  { label: 'FAQ', href: '/faq' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [betaModalOpen, setBetaModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 z-50 w-full transition-colors duration-300',
        scrolled || isOpen
          ? 'border-b border-butter bg-cream/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="Statera — inicio" className="shrink-0">
          <Logo className="w-[140px] md:w-[156px]" />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-light tracking-body text-ink/80 transition-colors hover:text-wine"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button onClick={() => setBetaModalOpen(true)} className="btn-primary hidden py-2.5 text-sm md:inline-flex">
          Solicitar acceso
        </button>

        <button
          className="p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6 text-burgundy" /> : <Menu className="h-6 w-6 text-burgundy" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-butter bg-cream md:hidden">
          <div className="space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 font-light tracking-body text-ink hover:text-wine"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setBetaModalOpen(true)
                setIsOpen(false)
              }}
              className="btn-primary mt-4 w-full"
            >
              Solicitar acceso
            </button>
          </div>
        </div>
      )}

      <BetaModal isOpen={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
    </header>
  )
}
