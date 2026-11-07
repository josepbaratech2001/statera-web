'use client'

import Link from 'next/link'
import { Twitter, Github, Linkedin } from 'lucide-react'

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
                <Link href="#" className="hover:text-accent transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Compañía</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Empleo
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  RGPD
                </Link>
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
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
