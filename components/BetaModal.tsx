'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import BetaSignup from './BetaSignup'

interface BetaModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BetaModal({ isOpen, onClose }: BetaModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">
            Solicitar Acceso a Beta
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-primary" />
          </button>
        </div>

        <div className="p-8">
          <BetaSignup />
        </div>
      </div>
    </div>
  )
}
