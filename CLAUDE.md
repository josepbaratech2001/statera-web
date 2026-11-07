# Statera Web - Documentación para Claude

## Descripción del Proyecto

Sitio web oficial de **Statera**, una plataforma de social listening que analiza tendencias políticas y de actualidad en X (Twitter) en España. El sitio presenta la visión de la empresa: "escuchamos lo que importa" sin juzgar ni señalar, solo analizando la opinión social.

## Contexto de Negocio

- **Statera**: Social listening sobre política española
- **Fase Actual**: Landing page + anuncio de Statera Analytics (beta)
- **Audiencia**: Decisores, políticos, medios, analistas que necesitan entender la opinión pública
- **Mensaje Clave**: Objetividad total. No juzgamos, simplemente escuchamos y analizamos.

## Stack Tecnológico

- **Framework**: Next.js 14 con TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Colores**:
  - Primary: #1E2B3C (azul oscuro)
  - Accent: #B07D2B (dorado)
  - Light: #F5F0E6 (beige)
  - Surface: #F9F7F4 (gris muy claro)

## Estructura de Componentes

- `Header`: Navegación responsiva con logo y menú móvil
- `Hero`: Sección principal con estadísticas
- `Features`: Grid de 6 características (2x3)
- `HowItWorks`: Pipeline de 4 pasos
- `Analytics`: Preview de dashboard + descripción de Statera Analytics
- `CTA`: Call-to-action final
- `Footer`: Links y redes sociales

## Guías de Desarrollo

### Filosofía de Diseño

1. **Moderno y Tech-Forward**: Refleja que somos una empresa de IA y data
2. **Limpio**: Sin ruido, enfocado en el mensaje
3. **Objetividad**: El diseño no interpreta, solo presenta
4. **Accesible**: Textos claros, buena jerarquía

### Cómo Añadir Cambios

- Componentes React en `components/`
- Estilos con Tailwind (evitar CSS personalizado innecesario)
- Mantener la paleta de colores consistente
- Responsive-first (mobile → desktop)

### Testing Local

```bash
npm install
npm run dev
# Visita http://localhost:3000
```

## Referencias Externas

- Logo original en: `/Users/josepbaratech/Statera/reflex_dashboard/assets/logo.svg`
- Repo principal Statera: `/Users/josepbaratech/Statera`
- Referencia de diseño: embedsocial.com/social-listening/x/

## Notas Importantes

- El sitio es **estático/JAMstack** por ahora (sin base de datos)
- Los botones "Acceso Beta" / "Solicitar Acceso" serán conectados a un formulario/servicio en el futuro
- La API de Statera se integrará cuando esté lista
- SEO y meta tags ya están configurados en `layout.tsx`

---

**Última actualización**: 7 Nov 2024
