'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import BetaModal from './BetaModal'

const capabilities = [
  'Dashboard interactivo con filtros en tiempo real',
  'Análisis comparativo entre perfiles y periodos',
  'Exportación de informes personalizados',
  'API para integración con tus sistemas',
]

const bars = [60, 40, 70, 50, 90, 65, 80, 75, 95, 70, 85, 78]

const sentiment = [
  { label: 'Positivo', value: 45, className: 'bg-cream' },
  { label: 'Neutral', value: 35, className: 'bg-butter/60' },
  { label: 'Negativo', value: 20, className: 'bg-wine' },
]

export default function Analytics() {
  const [betaModalOpen, setBetaModalOpen] = useState(false)

  return (
    <section id="analytics" className="scroll-mt-20 bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">Statera Analytics · Beta</p>
          <h2 className="mb-6 text-4xl font-medium leading-tight text-burgundy md:text-5xl">
            Tus datos de social listening, en un solo lugar
          </h2>
          <p className="mb-10 text-lg font-light leading-relaxed tracking-body text-ink/75">
            Nuestra plataforma de analytics permite profundizar en la conversación pública con
            herramientas avanzadas de visualización y análisis.
          </p>

          <ul className="mb-10 space-y-4">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cream ring-1 ring-butter">
                  <Check className="h-3.5 w-3.5 text-burgundy" strokeWidth={2} />
                </span>
                <span className="font-light tracking-body text-ink/85">{item}</span>
              </li>
            ))}
          </ul>

          <button onClick={() => setBetaModalOpen(true)} className="btn-primary px-8 py-4">
            Solicitar acceso a la beta
          </button>
        </div>

        {/* Vista previa del dashboard */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-brand bg-burgundy p-8 text-cream shadow-[0_30px_60px_-20px_rgba(76,16,42,0.45)] md:p-10">
            <img
              src="/brand/statera-icon-wine.svg"
              alt=""
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-20 w-72 opacity-60"
            />

            <div className="relative space-y-8">
              <div className="flex items-start justify-between border-b border-cream/15 pb-6">
                <div>
                  <h3 className="mb-1 text-xl font-medium">Seguimiento de tendencias</h3>
                  <p className="text-sm font-light tracking-body text-butter">Últimos 30 días</p>
                </div>
                <img src="/brand/statera-icon-cream.svg" alt="" aria-hidden className="h-7 w-auto" />
              </div>

              <div>
                <div className="mb-3 flex items-baseline justify-between">
                  <span className="text-sm font-light tracking-body text-cream/80">Menciones diarias</span>
                  <span className="text-2xl font-medium">+24%</span>
                </div>
                <div className="flex h-24 items-end gap-1.5">
                  {bars.map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-butter opacity-80 transition-opacity hover:opacity-100"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="border-t border-cream/15 pt-6">
                <span className="mb-4 block text-sm font-light tracking-body text-cream/80">Sentimiento</span>
                <div className="mb-4 flex h-2.5 overflow-hidden rounded-full ring-1 ring-cream/20">
                  {sentiment.map((s) => (
                    <div key={s.label} className={s.className} style={{ width: `${s.value}%` }} />
                  ))}
                </div>
                <div className="flex justify-between text-xs font-light tracking-body text-cream/80">
                  {sentiment.map((s) => (
                    <span key={s.label} className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${s.className}`} />
                      {s.label} {s.value}%
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <span className="powered-by-statera on-dark">
                  Powered by <b>Statera</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BetaModal isOpen={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
    </section>
  )
}
