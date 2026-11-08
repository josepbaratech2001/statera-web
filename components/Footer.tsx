import Link from 'next/link'
import Logo from './Logo'

const columns = [
  {
    title: 'Producto',
    links: [
      { label: 'Plataforma', href: '/#features' },
      { label: 'Metodología', href: '/#how-it-works' },
      { label: 'Statera Analytics', href: '/#analytics' },
      { label: 'Preguntas frecuentes', href: '/faq' },
    ],
  },
  {
    title: 'Compañía',
    links: [
      { label: 'Sobre nosotros', href: 'https://statera.es', external: true },
      { label: 'Blog', href: 'https://blog.statera.es', external: true },
      { label: 'Contacto', href: 'mailto:hello@statera.es' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacidad', href: 'https://statera.es/privacy', external: true },
      { label: 'Términos', href: 'https://statera.es/terms', external: true },
      { label: 'Cookies', href: 'https://statera.es/cookies', external: true },
    ],
  },
]

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-4 w-4 fill-current">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const socials = [
  { label: 'X', href: 'https://x.com/StateraSL', Icon: XIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/statera', Icon: LinkedInIcon },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-20">
        <div className="mb-16 grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" aria-label="Statera — inicio" className="mb-6 inline-block">
              <Logo color="cream" className="w-[160px]" />
            </Link>
            <p className="mb-8 text-xs font-light uppercase tracking-tagline text-butter">
              Social listening &amp; insights
            </p>
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:border-butter hover:bg-butter hover:text-burgundy"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-sm font-medium text-cream">{col.title}</h4>
              <ul className="space-y-3 text-sm font-light tracking-body text-cream/65">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...('external' in link && link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="transition-colors hover:text-butter"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs font-light tracking-body text-cream/55 md:flex-row">
          <p>© {currentYear} Statera. Todos los derechos reservados.</p>
          <p>Escuchamos lo que importa.</p>
        </div>
      </div>
    </footer>
  )
}
