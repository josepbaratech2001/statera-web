'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import BetaModal from './BetaModal'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [betaModalOpen, setBetaModalOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Cómo funciona', href: '#how-it-works' },
    { label: 'Analytics', href: '#analytics' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="Statera"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-accent transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setBetaModalOpen(true)}
          className="hidden md:block px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all font-medium"
        >
          Acceso Beta
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-accent font-medium"
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
              className="w-full mt-4 px-6 py-2 bg-accent text-white rounded-lg font-medium"
            >
              Acceso Beta
            </button>
          </div>
        </div>
      )}

      <BetaModal isOpen={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
    </header>
  )
}
