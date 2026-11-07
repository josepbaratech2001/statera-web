'use client'

import { useState } from 'react'
import { Mail, CheckCircle } from 'lucide-react'

export default function BetaSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    }, 800)
  }

  return (
    <div className="bg-surface border border-gray-200 rounded-xl p-8 md:p-12">
      {submitted ? (
        <div className="text-center">
          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">
            ¡Gracias por tu interés!
          </h3>
          <p className="text-text-secondary">
            Te hemos enviado un email de confirmación. Nos pondremos en contacto pronto.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary pointer-events-none" />
              <input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold disabled:opacity-70"
            >
              {loading ? 'Enviando...' : 'Solicitar'}
            </button>
          </div>
          <p className="text-sm text-text-secondary">
            Nos uniremos a ti en beta pronto. Sin spam, solo noticias importantes.
          </p>
        </form>
      )}
    </div>
  )
}
