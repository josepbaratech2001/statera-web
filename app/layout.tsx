import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import ScrollToTop from '@/components/ScrollToTop'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://statera.es'),
  title: {
    default: 'Statera · Social listening & insights',
    template: '%s · Statera',
  },
  description:
    'Social listening sobre la conversación política y de actualidad en España. Análisis objetivo de la opinión pública en X, sin juicios ni sesgos.',
  keywords: [
    'social listening',
    'análisis político',
    'X Twitter',
    'tendencias',
    'opinión pública',
    'España',
  ],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Statera · Social listening & insights',
    description: 'Escuchamos lo que importa. Análisis objetivo de la opinión pública en España.',
    url: 'https://statera.es',
    siteName: 'Statera',
    locale: 'es_ES',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4c102a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={poppins.variable}>
      <body className="font-sans">
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
