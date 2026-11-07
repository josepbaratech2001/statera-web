# Guía de Desarrollo - Statera Web

## 🚀 Inicio Rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar desarrollo
npm run dev

# 3. Abrir navegador
open http://localhost:3001
```

## 📁 Estructura de Archivos

```
app/
  - layout.tsx      # Layout raíz con metadata
  - page.tsx        # Página principal
  - faq/
    - page.tsx      # Página de FAQ
  - globals.css     # Estilos globales

components/
  - Header.tsx      # Navegación
  - Hero.tsx        # Sección hero
  - Features.tsx    # Características (6 items)
  - HowItWorks.tsx  # Pipeline (4 steps)
  - Analytics.tsx   # Preview dashboard
  - CTA.tsx         # Call-to-action
  - BetaSignup.tsx  # Formulario
  - ScrollToTop.tsx # Botón flotante
  - Footer.tsx      # Pie de página
```

## 🎨 Sistema de Colores

```css
--primary: #1E2B3C      /* Azul oscuro */
--accent: #B07D2B      /* Dorado */
--light: #F5F0E6       /* Beige */
--surface: #F9F7F4     /* Gris claro */
--text: #1E2B3C        /* Principal */
--text-secondary: #6B7280 /* Secundario */
```

Todos están en `tailwind.config.js`.

## ✏️ Cómo Agregar una Nueva Sección

1. Crear componente en `components/NuevaSeccion.tsx`:

```tsx
export default function NuevaSeccion() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Contenido */}
      </div>
    </section>
  )
}
```

2. Importar en `app/page.tsx`:

```tsx
import NuevaSeccion from '@/components/NuevaSeccion'

export default function Home() {
  return (
    <main>
      {/* ... otros componentes */}
      <NuevaSeccion />
    </main>
  )
}
```

## 🔧 Componentes Reutilizables

### Cards
```tsx
<div className="p-8 bg-surface border border-gray-200 rounded-xl hover:border-accent/30 transition-all">
  {/* Contenido */}
</div>
```

### Buttons
```tsx
{/* Primary */}
<button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold">
  Texto
</button>

{/* Secondary */}
<button className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold">
  Texto
</button>

{/* Accent */}
<button className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-opacity-90 transition-all font-semibold">
  Texto
</button>
```

### Iconos
```tsx
import { SparklesIcon, TrendingUp, Shield } from 'lucide-react'

<SparklesIcon className="w-6 h-6 text-accent" />
```

## 📱 Responsive Design

Usar Tailwind breakpoints:
- `md:` para tablet (768px+)
- `lg:` para desktop (1024px+)
- Siempre mobile-first

```tsx
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>
```

## 🎯 Validación Antes de Commit

```bash
# TypeScript check
npm run lint

# Build test
npm run build

# Prueba local
npm run dev
# Visitar página en navegador
```

## 🔐 Seguridad

- ✅ Siempre usar `'use client'` en componentes con state
- ✅ Evitar `eval()` y `innerHTML`
- ✅ Validar input en formularios
- ✅ No almacenar secrets en código

## 📊 Lighthouse Targets

- 🟢 Performance: 90+
- 🟢 Accessibility: 95+
- 🟢 Best Practices: 95+
- 🟢 SEO: 100

## 🚢 Deploy a Producción

### Vercel (Recomendado)
```bash
vercel
```

### Self-hosted
```bash
npm run build
npm start
```

## 🐛 Debugging

```bash
# Modo debug
DEBUG=* npm run dev

# VSCode: F5 para breakpoints
```

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [React 19](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

---

**Última actualización**: 7 Nov 2024
