'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  organization: string
  useCase: string
  needs: string[]
}

export default function BetaSignup() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    useCase: '',
    needs: [],
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const needs = [
    'Análisis político',
    'Seguimiento de campañas',
    'Monitoreo de medios',
    'Gestión de reputación',
    'Investigación académica',
    'Otro',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNeedsChange = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter((n) => n !== need)
        : [...prev.needs, need],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el formulario')
      }

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setStep(1)
        setFormData({
          name: '',
          email: '',
          organization: '',
          useCase: '',
          needs: [],
        })
      }, 4000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {submitted ? (
        <div className="py-6 text-center animate-fade-in">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cream ring-1 ring-butter">
            <CheckCircle className="h-7 w-7 text-burgundy" strokeWidth={1.5} />
          </div>
          <h3 className="mb-2 text-2xl font-medium text-burgundy">Solicitud enviada</h3>
          <p className="mb-2 font-light tracking-body text-ink/75">
            Hemos recibido tu solicitud de acceso a la beta.
          </p>
          <p className="text-sm font-light tracking-body text-wine">
            Te escribiremos a {formData.email} con los próximos pasos.
          </p>
        </div>
      ) : error ? (
        <div className="py-6 text-center animate-fade-in">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-cream ring-1 ring-butter">
            <AlertCircle className="h-7 w-7 text-wine" strokeWidth={1.5} />
          </div>
          <h3 className="mb-2 text-xl font-medium text-burgundy">No hemos podido enviar tu solicitud</h3>
          <p className="mb-6 font-light tracking-body text-ink/75">{error}</p>
          <button onClick={() => setError('')} className="btn-primary">
            Intentar de nuevo
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Indicador de pasos */}
          <div className="flex items-center gap-3 text-xs font-light uppercase tracking-tagline text-wine">
            <span>Paso {step} de 2</span>
            <span className="flex flex-1 gap-1.5">
              <span className="h-0.5 flex-1 rounded-full bg-burgundy" />
              <span className={`h-0.5 flex-1 rounded-full ${step === 2 ? 'bg-burgundy' : 'bg-butter'}`} />
            </span>
          </div>

          {step === 1 && (
            <div className="space-y-5 animate-fade-in">
              <h3 className="text-xl font-medium text-burgundy">Información básica</h3>

              <div>
                <label htmlFor="beta-name" className="mb-2 block text-sm font-medium text-burgundy">
                  Nombre completo *
                </label>
                <input
                  id="beta-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="beta-email" className="mb-2 block text-sm font-medium text-burgundy">
                  Email profesional *
                </label>
                <input
                  id="beta-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="nombre@organizacion.com"
                  autoComplete="email"
                  required
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="beta-org" className="mb-2 block text-sm font-medium text-burgundy">
                  Organización
                </label>
                <input
                  id="beta-org"
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Ej.: institución, medio, partido, consultora"
                  autoComplete="organization"
                  className="field"
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!formData.name || !formData.email}
                className="btn-primary mt-2 w-full"
              >
                Continuar
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 animate-fade-in">
              <h3 className="text-xl font-medium text-burgundy">Cuéntanos qué necesitas</h3>

              <fieldset>
                <legend className="mb-3 block text-sm font-medium text-burgundy">
                  ¿Qué te interesa de Statera? *
                </legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {needs.map((need) => {
                    const checked = formData.needs.includes(need)
                    return (
                      <label
                        key={need}
                        className={`flex cursor-pointer items-center gap-3 rounded-brand border px-4 py-3 text-sm font-light tracking-body transition-colors ${
                          checked
                            ? 'border-burgundy bg-cream text-burgundy'
                            : 'border-burgundy/15 text-ink/80 hover:border-wine/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleNeedsChange(need)}
                          className="h-4 w-4 accent-[#4c102a]"
                        />
                        {need}
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <div>
                <label htmlFor="beta-usecase" className="mb-2 block text-sm font-medium text-burgundy">
                  Describe tu caso de uso *
                </label>
                <textarea
                  id="beta-usecase"
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  placeholder="¿Qué te gustaría conseguir con Statera Analytics?"
                  required
                  rows={4}
                  className="field resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="btn-secondary flex-1">
                  Atrás
                </button>
                <button
                  type="submit"
                  disabled={loading || formData.needs.length === 0 || !formData.useCase}
                  className="btn-primary flex-1"
                >
                  {loading ? 'Enviando…' : 'Solicitar acceso'}
                </button>
              </div>
            </div>
          )}

          <p className="text-center text-xs font-light tracking-body text-ink/55">
            Tratamos tus datos de forma confidencial y solo para gestionar tu acceso.
          </p>
        </form>
      )}
    </div>
  )
}
