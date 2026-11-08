const steps = [
  {
    title: 'Recolección',
    description: 'Pipelines automatizados recogen diariamente datos públicos de X con criterios transparentes.',
  },
  {
    title: 'Estructuración',
    description: 'Los datos se normalizan y almacenan de forma particionada, listos para consultas rápidas.',
  },
  {
    title: 'Análisis',
    description: 'Modelos de IA identifican temas, sentimiento y tendencias emergentes en la conversación.',
  },
  {
    title: 'Insights',
    description: 'Visualizaciones claras e informes precisos para tomar decisiones basadas en datos.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-20 overflow-hidden bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className="eyebrow mb-4">Metodología</p>
          <h2 className="mb-6 text-4xl font-medium leading-tight text-burgundy md:text-5xl">
            Del dato a la decisión
          </h2>
          <p className="text-lg font-light leading-relaxed tracking-body text-ink/75">
            Un proceso riguroso, pensado para la precisión, la escala y la trazabilidad.
          </p>
        </div>

        <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="relative border-t border-burgundy/25 pt-8">
              <span className="absolute -top-px left-0 h-px w-12 bg-burgundy" aria-hidden />
              <span className="mb-6 block text-sm font-light tracking-tagline text-wine">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-3 text-xl font-medium text-burgundy">{step.title}</h3>
              <p className="font-light leading-relaxed tracking-body text-ink/75">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
