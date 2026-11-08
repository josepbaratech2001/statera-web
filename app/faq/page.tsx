import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronDown } from 'lucide-react'

export const metadata = { title: 'Preguntas frecuentes' }

export default function FAQ() {
  const faqs = [
    {
      question: '¿Qué es Statera?',
      answer:
        'Statera es una plataforma de social listening que analiza tendencias políticas y de actualidad en X (Twitter) en España. Utilizamos IA para detectar patrones de comportamiento y opinión social generalizada.',
    },
    {
      question: '¿Cómo recolectáis los datos?',
      answer:
        'Utilizamos pipelines automatizados y eficientes que recopilan datos públicos de X diariamente. Los datos se almacenan de forma segura en infraestructura cloud y se tratan conforme al RGPD.',
    },
    {
      question: '¿No estáis señalando a nadie?',
      answer:
        'Correcto. Nuestra filosofía es simplemente escuchar y analizar. No juzgamos ni señalamos a nadie. Solo proporcionamos información clara y precisa sobre lo que la sociedad está diciendo.',
    },
    {
      question: '¿Cuándo estará disponible Statera Analytics?',
      answer:
        'Statera Analytics estará en beta privada muy pronto. Los primeros 100 usuarios tendrán acceso prioritario. Puedes solicitar acceso desde la página principal.',
    },
    {
      question: '¿Qué puedo hacer con Statera Analytics?',
      answer:
        'Con Statera Analytics podrás crear dashboards personalizados, analizar tendencias, comparar períodos, exportar reportes y acceder a nuestra API para integración en tus sistemas.',
    },
    {
      question: '¿Cómo me suscribo a la beta?',
      answer:
        'Puedes solicitar acceso a través del formulario en la página principal. Te enviaremos un email de confirmación y te invitaremos cuando se abra la beta.',
    },
    {
      question: '¿Es gratuito?',
      answer:
        'La beta privada será gratuita para los primeros usuarios. Los precios se anunciarán cuando lancemos la versión pública.',
    },
    {
      question: '¿Qué datos personales recopiláis?',
      answer:
        'No recopilamos datos personales de usuarios. Solo analizamos tweets públicos y perfiles públicos. Cumplimos con RGPD y todas las regulaciones de privacidad.',
    },
  ]

  return (
    <main className="w-full">
      <Header />
      <section className="relative overflow-hidden bg-cream px-6 pb-24 pt-40 md:pt-48">
        <img
          src="/brand/statera-icon-butter.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-40 top-20 hidden w-[520px] opacity-95 lg:block"
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-14">
            <p className="eyebrow mb-4">Ayuda</p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-burgundy md:text-6xl">
              Preguntas frecuentes
            </h1>
            <p className="text-lg font-light tracking-body text-ink/75">
              Todo lo que necesitas saber sobre Statera.
            </p>
          </div>

          <div className="divide-y divide-butter overflow-hidden rounded-brand border border-butter bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-5 md:px-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium text-burgundy transition-colors hover:text-wine [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-wine transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 font-light leading-relaxed tracking-body text-ink/75">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-brand bg-burgundy p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="mb-2 text-xl font-medium text-cream">¿No encuentras lo que buscas?</h2>
              <p className="font-light tracking-body text-cream/75">Escríbenos y te responderemos lo antes posible.</p>
            </div>
            <a href="mailto:hello@statera.es" className="btn-on-dark shrink-0">
              Contactar
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
