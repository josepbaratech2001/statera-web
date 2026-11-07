'use client'

import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-surface to-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-8 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
          <span className="text-accent font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Inteligencia de datos en tiempo real
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Escuchamos lo que</span>
          {' '}
          <span className="text-primary">importa</span>
        </h1>

        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
          Análisis inteligente de tendencias políticas y de actualidad en X en España.
          Descubre patrones de opinión sin prejuicios, para que los que realmente importa
          tengan información clara y precisa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg">
            Explora Statera Analytics
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold text-lg">
            Documentación
          </button>
        </div>

        {/* Hero Visual */}
        <div className="relative">
          <div className="absolute inset-0 gradient-accent opacity-5 rounded-2xl blur-3xl"></div>
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {[
                { label: 'Perfiles Seguidos', value: '500+' },
                { label: 'Análisis Diarios', value: '1M+' },
                { label: 'Precisión IA', value: '94%' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
