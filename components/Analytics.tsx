'use client'

export default function Analytics() {
  return (
    <section id="analytics" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Statera Analytics
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Nuestra plataforma de analytics (próximamente en beta) permite a clientes
              profundizar en datos de social listening con herramientas avanzadas de visualización
              y análisis.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Dashboard interactivo con filtros en tiempo real',
                'Análisis comparativo entre perfiles y períodos',
                'Exportación de reportes personalizados',
                'API para integración en tus sistemas',
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold">
              Solicitar Acceso Beta
            </button>
          </div>

          {/* Right Side - Dashboard Preview */}
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 gradient-accent opacity-5 rounded-2xl blur-3xl"></div>

            <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-white">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                {/* Header */}
                <div className="border-b border-white/20 pb-4">
                  <h3 className="text-2xl font-bold mb-2">Seguimiento de Tendencias</h3>
                  <p className="text-white/70 text-sm">Últimos 30 días</p>
                </div>

                {/* Charts */}
                <div className="space-y-4">
                  {/* Chart 1 */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white/70">Menciones Diarias</span>
                      <span className="text-lg font-semibold">+24%</span>
                    </div>
                    <div className="flex items-end gap-1 h-12">
                      {[60, 40, 70, 50, 90, 65, 80, 75, 95, 70].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-accent rounded-t opacity-70 hover:opacity-100 transition-opacity"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Chart 2 */}
                  <div className="pt-4 border-t border-white/20">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-white/70">Sentimiento</span>
                    </div>
                    <div className="flex gap-3">
                      {[
                        { label: 'Positivo', value: 45, color: 'bg-green-400' },
                        { label: 'Neutral', value: 35, color: 'bg-blue-400' },
                        { label: 'Negativo', value: 20, color: 'bg-red-400' },
                      ].map((item, i) => (
                        <div key={i} className="flex-1">
                          <div className={`${item.color} h-2 rounded-full mb-2`}></div>
                          <div className="text-xs text-white/70">{item.value}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
