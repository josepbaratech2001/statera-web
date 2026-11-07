# Statera Web

Sitio web oficial de Statera - Social Listening Inteligente. Análisis de tendencias políticas y de actualidad en X (Twitter) en España.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional construida con Next.js y Tailwind CSS
- **Responsive**: Totalmente adaptable a dispositivos móviles y escritorio
- **Performance**: Optimizado para velocidad y SEO
- **Componentes Reutilizables**: Arquitectura escalable y mantenible

## 📋 Secciones

- **Hero**: Presentación principal con call-to-action
- **Features**: Capacidades potentes de Statera
- **How It Works**: Explicación del pipeline de análisis
- **Analytics**: Preview de Statera Analytics (próximamente)
- **CTA**: Call-to-action final
- **Footer**: Información de contacto y links

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Lenguaje**: TypeScript
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Runtime**: Node.js

## 📦 Instalación

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos

```bash
# Clonar el repositorio
git clone <repo-url>
cd catshark

# Instalar dependencias
npm install
# o
yarn install

# Ejecutar en desarrollo
npm run dev
# o
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🏗️ Estructura del Proyecto

```
catshark/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Navegación
│   ├── Hero.tsx            # Sección hero
│   ├── Features.tsx        # Características
│   ├── HowItWorks.tsx      # Cómo funciona
│   ├── Analytics.tsx       # Preview de analytics
│   ├── CTA.tsx             # Call-to-action
│   └── Footer.tsx          # Pie de página
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🎨 Paleta de Colores

- **Primary**: `#1E2B3C` (Azul oscuro)
- **Accent**: `#B07D2B` (Dorado)
- **Light**: `#F5F0E6` (Beige claro)
- **Surface**: `#F9F7F4` (Gris muy claro)

## 🚀 Deploy

### Vercel (Recomendado)

El proyecto está completamente optimizado para Vercel. Solo necesitas:

1. Push a GitHub
2. Conecta el repo en [vercel.com](https://vercel.com)
3. Vercel detectará Next.js automáticamente
4. Tu sitio estará listo en minutos

```bash
npm i -g vercel
vercel  # para deploy manual
```

### Otras plataformas

```bash
# Build para producción
npm run build

# Iniciar servidor de producción (requiere Node.js)
npm start
```

### Build optimizado

```bash
# Análisis del bundle
npm run build -- --analyze
```

## 📝 Desarrollo

### Comandos disponibles

```bash
npm run dev      # Desarrollar en modo local
npm run build    # Build para producción
npm start        # Iniciar servidor de producción
npm run lint     # Linter
```

### Añadir nuevos componentes

1. Crear archivo en `components/`
2. Exportar como componente React
3. Importar en `app/page.tsx`

## 🔄 Estructura de Variables de Entorno

Actualmente no requiere variables de entorno. En futuras versiones:

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.statera.es
```

## 📄 Licencia

© 2024 Statera. Todos los derechos reservados.

## 🤝 Contribuir

Por favor lee nuestras guías de contribución (próximamente).

---

**Estado**: 🚀 En desarrollo activo | Versión: 0.1.0
