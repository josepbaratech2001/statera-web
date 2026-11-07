'use client'

import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

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
    <div className="bg-surface border border-gray-200 rounded-xl p-8 md:p-12">
      {submitted ? (
        <div className="text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-2">
            ¡Solicitud Enviada!
          </h3>
          <p className="text-text-secondary mb-2">
            Hemos recibido tu solicitud de acceso a la beta.
          </p>
          <p className="text-sm text-text-secondary">
            Te enviaremos un email a {formData.email} con los próximos pasos.
          </p>
        </div>
      ) : error ? (
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">
            Error al enviar
          </h3>
          <p className="text-text-secondary mb-4">
            {error}
          </p>
          <button
            onClick={() => setError('')}
            className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold"
          >
            Intentar de nuevo
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold text-primary">Información Básica</h3>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Organización
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="Ej: Ministerio, Medio, Partido"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!formData.name || !formData.email}
                className="w-full mt-6 px-6 py-3 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar →
              </button>
            </div>
          )}

          {/* Step 2: Needs & Use Case */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="text-lg font-semibold text-primary">Cuéntanos tus Necesidades</h3>

              <div>
                <label className="block text-sm font-medium text-primary mb-3">
                  ¿Qué te interesa de Statera? *
                </label>
                <div className="space-y-2">
                  {needs.map((need) => (
                    <label key={need} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.needs.includes(need)}
                        onChange={() => handleNeedsChange(need)}
                        className="w-4 h-4 text-accent rounded"
                      />
                      <span className="ml-3 text-text-secondary">{need}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Describe tu caso de uso *
                </label>
                <textarea
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos qué quieres lograr con Statera Analytics..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold"
                >
                  ← Atrás
                </button>
                <button
                  type="submit"
                  disabled={loading || formData.needs.length === 0 || !formData.useCase}
                  className="flex-1 px-6 py-3 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Solicitar Acceso'}
                </button>
              </div>
            </div>
          )}

          <p className="text-xs text-text-secondary text-center">
            Tus datos serán enviados a nuestro equipo de forma segura
          </p>
        </form>
      )}
    </div>
  )
}
