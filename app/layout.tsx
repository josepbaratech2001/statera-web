import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Statera - Social Listening Inteligente',
  description: 'Análisis de tendencias políticas y de actualidad en X (Twitter) en España. Escuchamos la voz de la sociedad.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
