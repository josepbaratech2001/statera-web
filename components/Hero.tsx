'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import BetaModal from './BetaModal'

const stats = [
  { value: '500+', label: 'Perfiles monitorizados' },
  { value: '1M+', label: 'Publicaciones analizadas al día' },
  { value: '94%', label: 'Precisión de clasificación' },
]

export default function Hero() {
  const [betaModalOpen, setBetaModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-cream px-6 pb-24 pt-40 md:pb-32 md:pt-48">
      {/* Decoración de marca: icono grande recortado a la derecha en Mantequilla */}
      <div aria-hidden className="pointer-events-none absolute -right-40 top-16 hidden w-[620px] opacity-95 lg:block">
        <img src="/brand/statera-icon-butter.svg" alt="" className="w-full" />
      </div>
      <div aria-hidden className="pointer-events-none absolute bottom-10 right-[38%] hidden w-16 opacity-40 lg:block">
        <img src="/brand/statera-icon-butter.svg" alt="" className="w-full" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl animate-fade-in-up">
          <p className="eyebrow mb-8">Social listening &amp; insights</p>

          <h1 className="mb-8 text-5xl font-medium leading-[1.08] tracking-tight text-burgundy md:text-7xl">
            Escuchamos
            <br />
            lo que importa.
          </h1>

          <p className="mb-12 max-w-2xl text-lg font-light leading-relaxed tracking-body text-ink/80 md:text-xl">
            Analizamos la conversación política y de actualidad en España para ofrecer una
            lectura clara y objetiva de la opinión pública. Sin juicios. Sin sesgos. Solo datos.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button onClick={() => setBetaModalOpen(true)} className="btn-primary px-8 py-4">
              Solicitar acceso a la beta
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#how-it-works" className="btn-secondary px-8 py-4">
              Conocer la metodología
            </a>
          </div>
        </div>

        {/* Cifras */}
        <dl className="mt-20 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-brand border border-butter bg-butter sm:grid-cols-3 md:mt-28">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end bg-white px-8 py-7">
              <dt className="mt-2 text-sm font-light tracking-body text-wine">{stat.label}</dt>
              <dd className="text-4xl font-medium text-burgundy">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Decoración reducida en móvil/tablet */}
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-4 w-56 opacity-60 lg:hidden">
        <img src="/brand/statera-icon-butter.svg" alt="" className="w-full" />
      </div>

      <BetaModal isOpen={betaModalOpen} onClose={() => setBetaModalOpen(false)} />
    </section>
  )
}
