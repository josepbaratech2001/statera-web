# 🚀 Guía de Configuración - Statera Web

## Paso 1: Configurar Emails (Resend)

### 1.1 Obtener API Key de Resend

1. Ve a [resend.com](https://resend.com)
2. Crea una cuenta (gratis, solo necesitas email)
3. Ve a Settings → API Keys
4. Copia tu API Key

### 1.2 Agregar la API Key al proyecto

```bash
# En la raíz del proyecto, copia .env.example
cp .env.example .env.local

# Abre .env.local y reemplaza:
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

### 1.3 Probar el formulario

1. Ejecuta el servidor: `npm run dev`
2. Abre http://localhost:3001
3. Haz click en "Acceso Beta" en cualquier parte
4. Completa el formulario
5. Revisa tu email en statera.main@gmail.com (será automático cuando esté en producción)

**Nota**: En desarrollo, Resend envía desde `onboarding@resend.dev`. En producción, configura tu dominio personalizado.

---

## Paso 2: Agregar Más Visuales

### 2.1 Agregar Logo de X (Twitter)

Ya está integrado en varias secciones. Si quieres agregar más, puedes:

```bash
# Descargar el logo oficial de X
# Y guardarlo en public/x-logo.svg o public/x-logo.png
```

Luego usarlo en componentes:
```tsx
<img src="/x-logo.svg" alt="X" className="h-6 w-auto" />
```

### 2.2 Agregar Más Imágenes/Decoraciones

1. Copia imágenes a `public/` (JPG, PNG, SVG)
2. Úsalas en componentes:

```tsx
<img 
  src="/imagen.svg" 
  alt="Descripción"
  className="w-full rounded-xl"
/>
```

---

## Paso 3: Desplegar en Vercel

### 3.1 Preparar para Deploy

```bash
# Asegúrate de que todo funciona localmente
npm run build
npm run dev

# Haz push a GitHub
git push origin statera-web-landing
```

### 3.2 Crear Repo en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Crea un repo llamado `statera-web`
3. Copia los comandos para agregar el remote:

```bash
git remote add origin https://github.com/tu-usuario/statera-web.git
git branch -M main
git push -u origin main
```

### 3.3 Deploy en Vercel

**Opción A: Automático**
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu GitHub
3. Selecciona el repo
4. Haz click "Deploy"
5. Vercel detallará automáticamente Next.js

**Opción B: CLI**
```bash
npm i -g vercel
vercel
```

### 3.4 Configurar Variables de Entorno

En Vercel Dashboard:
1. Ve a Settings → Environment Variables
2. Agrega:
   - `RESEND_API_KEY`: Tu API key de Resend
   - Cualquier otra variable necesaria

---

## Paso 4: Configurar Dominio Personalizado

### 4.1 En Vercel

1. Dashboard → Proyecto → Settings → Domains
2. Agrega: `statera.es` (o tu dominio)
3. Sigue los pasos para configurar DNS

### 4.2 Configurar Email con Dominio

En Resend:
1. Ve a Domains
2. Agrega `statera.es`
3. Sigue instrucciones de DNS
4. Verifica que funciona

Luego en `app/api/beta-signup/route.ts`, cambia:
```tsx
// De:
from: 'Statera <onboarding@resend.dev>'

// A:
from: 'Statera <noreply@statera.es>'
```

---

## Paso 5: Mejoras Opcionales

### 5.1 Integrar con Statera Analytics

Conecta la API real:
1. Obtén endpoints de tu API
2. Crea `lib/api.ts`:

```tsx
export async function fetchAnalytics() {
  const res = await fetch('https://api.statera.es/analytics')
  return res.json()
}
```

3. Úsalo en componentes:
```tsx
const data = await fetchAnalytics()
```

### 5.2 Agregar Analytics (Google Analytics)

```bash
npm install @vercel/analytics
```

En `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout() {
  return (
    <html>
      <body>
        {/* ... */}
        <Analytics />
      </body>
    </html>
  )
}
```

### 5.3 Mejorar Formulario

Agregar más campos:
- Teléfono
- País/Región
- Presupuesto
- Timeline

Edita `components/BetaSignup.tsx` y `app/api/beta-signup/route.ts`

### 5.4 Agregar Blog o Documentación

```bash
# Instalar MDX para blog
npm install @mdx-js/loader @mdx-js/react
```

Crea `app/blog/page.tsx`:
```tsx
export default function Blog() {
  return (
    <main>
      {/* Lista de posts */}
    </main>
  )
}
```

---

## Paso 6: Personalización Avanzada

### 6.1 Personalizar Colores

Edita `tailwind.config.js`:
```js
colors: {
  primary: '#1E2B3C',  // Azul
  accent: '#B07D2B',   // Dorado
  // Añade más colores aquí
}
```

### 6.2 Cambiar Fuentes

En `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

### 6.3 Agregar Animaciones

Edita `tailwind.config.js`:
```js
animation: {
  'fade-in-up': 'fadeInUp 0.6s ease-out',
  'bounce-slow': 'bounce 3s infinite',
}
```

---

## Checklist de Deployment

- [ ] API key de Resend configurada
- [ ] Servidor local funciona (`npm run dev`)
- [ ] Build sin errores (`npm run build`)
- [ ] Repo en GitHub
- [ ] Proyecto en Vercel
- [ ] Dominio personalizado configurado
- [ ] Emails funcionan
- [ ] Variables de entorno en Vercel

---

## Troubleshooting

### ¿Los emails no se envían?
1. Verifica API key de Resend
2. Revisa logs en Vercel: `vercel logs`
3. Prueba localmente con: `npm run dev`

### ¿El logo no aparece?
1. Asegúrate que está en `public/logo.svg`
2. Revisa la ruta en el componente
3. Limpia cache: `rm -rf .next`

### ¿Dominio no funciona?
1. Espera 24-48 horas para DNS
2. Verifica configuración de DNS
3. Contacta al soporte de Vercel

---

## Recursos Útiles

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Resend Docs](https://resend.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

---

**¿Preguntas?** Contacta a `hello@statera.es`
