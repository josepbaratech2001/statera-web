'use client'

import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary/95 to-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Sé Parte de la Revolución del Social Listening
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Únete a la beta privada de Statera Analytics y descubre insights que transformarán
          tu forma de entender la opinión pública.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-accent text-primary rounded-lg hover:bg-accent/90 transition-all font-semibold text-lg flex items-center justify-center gap-2">
            Solicitar Acceso <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all font-semibold text-lg">
            Documentación
          </button>
        </div>

        <p className="text-white/60 text-sm mt-8">
          Primeros 100 usuarios reciben acceso prioritario a todas las features
        </p>
      </div>
    </section>
  )
}
