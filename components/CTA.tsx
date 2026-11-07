'use client'

import Link from 'next/link'
import { useState } from 'react'
import BetaSignup from './BetaSignup'
import BetaModal from './BetaModal'

export default function CTA() {
  const [betaModalOpen, setBetaModalOpen] = useState(false)
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary/95 to-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sé Parte de la Revolución del Social Listening
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Únete a la beta privada de Statera Analytics y descubre insights que transformarán
            tu forma de entender la opinión pública.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl">
          <BetaSignup />
        </div>

        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            Primeros 100 usuarios reciben acceso prioritario a todas las features
          </p>
          <Link
            href="/faq"
            className="inline-block mt-4 text-white hover:text-accent transition-colors underline"
          >
            Más preguntas frecuentes →
          </Link>
        </div>

        <BetaModal isOpen={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
      </div>
    </section>
  )
}
