import type { Metadata, Viewport } from 'next'
import ScrollToTop from '@/components/ScrollToTop'
import './globals.css'

export const metadata: Metadata = {
  title: 'Statera - Social Listening Inteligente',
  description: 'Análisis de tendencias políticas y de actualidad en X (Twitter) en España. Escuchamos la voz de la sociedad.',
  keywords: [
    'social listening',
    'análisis político',
    'X Twitter',
    'tendencias',
    'opinión pública',
    'España',
  ],
  openGraph: {
    title: 'Statera',
    description: 'Escuchamos lo que importa. Análisis inteligente de la opinión pública.',
    url: 'https://statera.es',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
