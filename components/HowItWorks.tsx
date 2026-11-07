'use client'

import { Download, Database, Cpu, TrendingUp } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: 'Recolección',
      description: 'Pipelines automatizados extraen datos públicos de X diariamente con máxima eficiencia.',
    },
    {
      icon: Database,
      title: 'Almacenamiento',
      description: 'Datos estructurados en BigQuery, particionados y optimizados para consultas rápidas.',
    },
    {
      icon: Cpu,
      title: 'Análisis IA',
      description: 'Modelos de machine learning detectan patrones, sentimientos y tendencias emergentes.',
    },
    {
      icon: TrendingUp,
      title: 'Insights',
      description: 'Visualizaciones claras y reportes precisos para decisiones basadas en datos.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Cómo Funciona
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Una arquitectura pensada para precisión, escala y velocidad.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 -right-2 w-4 h-0.5 bg-gradient-to-r from-accent to-accent/0" />
                )}

                {/* Card */}
                <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-accent/30 transition-all">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 mt-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
