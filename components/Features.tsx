'use client'

import { Brain, TrendingUp, Shield, Zap, BarChart3, Network } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Análisis con IA',
      description: 'Detecta patrones de comportamiento y opinión social con algoritmos avanzados de machine learning.',
    },
    {
      icon: TrendingUp,
      title: 'Tendencias en Tiempo Real',
      description: 'Seguimiento automático de la evolución de temas, políticos y campañas en X (Twitter).',
    },
    {
      icon: Shield,
      title: 'Objetividad Total',
      description: 'No juzgamos ni señalamos. Simplemente escuchamos y analizamos lo que dice la sociedad.',
    },
    {
      icon: Zap,
      title: 'Recolección Eficiente',
      description: 'Pipelines automatizados que garantizan datos frescos y precisos cada día.',
    },
    {
      icon: BarChart3,
      title: 'Impacto Medible',
      description: 'Tracker de impacto para perfiles, campañas y tweets con métricas precisas.',
    },
    {
      icon: Network,
      title: 'Datos Estructurados',
      description: 'Almacenamiento en BigQuery con arquitectura escalable para análisis complejos.',
    },
  ]

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Capacidades Potentes
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Statera combina recolección de datos eficiente con análisis inteligente
            para darte claridad sobre lo que importa.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 bg-surface border border-gray-200 rounded-xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
