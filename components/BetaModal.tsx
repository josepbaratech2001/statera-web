'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import BetaSignup from './BetaSignup'
import Logo from './Logo'

interface BetaModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BetaModal({ isOpen, onClose }: BetaModalProps) {
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="beta-modal-title"
        className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-brand bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-butter bg-cream px-8 py-5">
          <div className="flex items-center gap-3">
            <Logo variant="icon" className="h-7 w-auto" />
            <h2 id="beta-modal-title" className="text-lg font-medium text-burgundy">
              Solicitar acceso a la beta
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-full p-2 text-burgundy transition-colors hover:bg-butter"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-8">
          <BetaSignup />
        </div>
      </div>
    </div>
  )
}
