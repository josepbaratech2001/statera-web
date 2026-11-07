import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Analytics from '@/components/Analytics'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Analytics />
      <CTA />
      <Footer />
    </main>
  )
}
