import { Brain, TrendingUp, Scale, RefreshCw, BarChart3, Layers } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Análisis con IA',
    description:
      'Modelos de lenguaje entrenados para detectar patrones de comportamiento y opinión en la conversación pública.',
  },
  {
    icon: TrendingUp,
    title: 'Tendencias en tiempo real',
    description:
      'Seguimiento continuo de la evolución de temas, perfiles políticos y campañas en X.',
  },
  {
    icon: Scale,
    title: 'Objetividad por diseño',
    description:
      'No juzgamos ni señalamos. Medimos lo que dice la sociedad y lo presentamos tal cual es.',
  },
  {
    icon: RefreshCw,
    title: 'Datos siempre actualizados',
    description:
      'Recolección automatizada diaria que garantiza información fresca, completa y verificable.',
  },
  {
    icon: BarChart3,
    title: 'Impacto medible',
    description:
      'Métricas de alcance e influencia para perfiles, campañas y publicaciones concretas.',
  },
  {
    icon: Layers,
    title: 'Infraestructura escalable',
    description:
      'Datos estructurados en una arquitectura cloud preparada para análisis complejos e históricos.',
  },
]

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid gap-6 md:mb-20 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow mb-4">Plataforma</p>
            <h2 className="text-4xl font-medium leading-tight text-burgundy md:text-5xl">
              Claridad sobre la conversación pública
            </h2>
          </div>
          <p className="max-w-xl text-lg font-light leading-relaxed tracking-body text-ink/75">
            Statera combina recolección de datos a escala con análisis inteligente para ofrecer
            una visión precisa de lo que importa a la sociedad.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-brand border border-butter bg-butter md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="group bg-white p-8 transition-colors hover:bg-cream md:p-10">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-burgundy ring-1 ring-butter transition-colors group-hover:bg-burgundy group-hover:text-cream">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-lg font-medium text-burgundy">{feature.title}</h3>
                <p className="font-light leading-relaxed tracking-body text-ink/75">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
