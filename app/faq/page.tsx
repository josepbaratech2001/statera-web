import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronDown } from 'lucide-react'

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
        'Utilizamos pipelines automatizados y eficientes que recopilan datos públicos de X diariamente. Todos los datos se almacenan de forma segura en BigQuery y se procesan con máxima privacidad.',
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
      question: '¿Qué datos de privacidad recopilan?',
      answer:
        'No recopilamos datos personales de usuarios. Solo analizamos tweets públicos y perfiles públicos. Cumplimos con RGPD y todas las regulaciones de privacidad.',
    },
  ]

  return (
    <main className="w-full">
      <Header />
      <div className="pt-32 pb-20 px-6 bg-gradient-to-b from-surface to-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-primary mb-4">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl text-text-secondary">
              Todo lo que necesitas saber sobre Statera
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-accent/30 transition-all cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-lg text-primary hover:text-accent transition-colors">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-16 bg-accent/10 border border-accent/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-3">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-text-secondary mb-6">
              Contáctanos directamente o consulta nuestra documentación técnica.
            </p>
            <button className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold">
              Enviar Email
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
