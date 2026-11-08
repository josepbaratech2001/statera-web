'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 animate-fade-in items-center justify-center rounded-full bg-burgundy text-cream shadow-lg ring-1 ring-cream/20 transition-colors hover:bg-wine"
      aria-label="Volver arriba"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  )
}
