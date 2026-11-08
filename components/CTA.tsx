import Link from 'next/link'
import BetaSignup from './BetaSignup'

export default function CTA() {
  return (
    <section id="beta" className="relative scroll-mt-20 overflow-hidden bg-burgundy px-6 py-24 md:py-32">
      {/* Decoración: icono grande en Vino recortado a la derecha + icono secundario */}
      <img
        src="/brand/statera-icon-wine.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-48 top-1/2 hidden w-[640px] -translate-y-1/2 opacity-60 lg:block"
      />
      <img
        src="/brand/statera-icon-wine.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-16 hidden w-14 opacity-40 lg:block"
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div className="lg:pt-6">
          <p className="mb-4 text-xs font-light uppercase tracking-tagline text-butter">Beta privada</p>
          <h2 className="mb-6 text-4xl font-medium leading-tight text-cream md:text-5xl">
            Únete a la beta de Statera Analytics
          </h2>
          <p className="mb-8 max-w-md text-lg font-light leading-relaxed tracking-body text-cream/80">
            Accede antes que nadie a una nueva forma de entender la opinión pública. Los primeros
            100 usuarios tendrán acceso prioritario a todas las funcionalidades.
          </p>
          <Link
            href="/faq"
            className="text-sm font-light tracking-body text-butter underline decoration-butter/40 underline-offset-4 transition-colors hover:text-cream"
          >
            Preguntas frecuentes →
          </Link>
        </div>

        <div className="rounded-brand bg-white p-8 shadow-2xl md:p-10">
          <BetaSignup />
        </div>
      </div>
    </section>
  )
}
