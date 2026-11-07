'use client'

import Link from 'next/link'
import { X, Code, Briefcase } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">Statera</span>
            </div>
            <p className="text-white/60 text-sm">
              Escuchamos la voz de la sociedad en tiempo real.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#features" className="hover:text-accent transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <a href="https://statera.es/pricing" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://api.statera.es/docs" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="https://status.statera.es" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="https://statera.es" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="https://blog.statera.es" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="mailto:hello@statera.es" className="hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="https://statera.es/jobs" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Empleo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="https://statera.es/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="https://statera.es/terms" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="https://statera.es/cookies" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="https://statera.es/gdpr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  RGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-sm">
              © {currentYear} Statera. Todos los derechos reservados.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <a
                href="https://x.com/StateraSL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                title="X (Twitter)"
              >
                <X className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/StateraSL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                title="GitHub"
              >
                <Code className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/statera"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                title="LinkedIn"
              >
                <Briefcase className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
