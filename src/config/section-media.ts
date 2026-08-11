/**
 * Fondos de las secciones del home.
 *
 * Punto único de verdad: cambiar la foto de una sección es editar la `src` de
 * su entrada y nada más. Ningún componente conoce rutas de imagen.
 *
 * Las `src` de hoy son placeholders locales de color plano (1600×900) para que
 * `build` pase sin las fotos finales. Cuando lleguen las definitivas:
 *  - archivo local  → dejarlo en `public/images/sections/` y apuntar acá;
 *  - URL externa    → pegarla tal cual; `next.config.ts` ya tiene el
 *    `remotePatterns` de los hosts habilitados.
 *
 * Formato esperado en todas: horizontal 16:9, mínimo 1600px de ancho.
 */

export type SectionId =
  | 'hero'
  | 'pests'
  | 'methods'
  | 'about'
  | 'promotion'
  | 'trust'
  | 'coverage'
  | 'blog'
  | 'contact'

/**
 * Velo que se pinta sobre la imagen.
 *  - `dark`  → texto claro encima (gradiente negro, garantiza AA sobre foto clara)
 *  - `light` → texto oscuro encima (gradiente blanco)
 *  - `none`  → sin velo; usar solo si la sección no lleva texto sobre la imagen
 */
export type SectionOverlay = 'dark' | 'light' | 'none'

export interface SectionMedia {
  /** Ruta local o URL absoluta de un host declarado en `next.config.ts`. */
  src: string
  /**
   * Vacío = fondo decorativo (se marca `aria-hidden`, que es lo correcto para
   * una imagen que solo aporta ambiente). Si la foto aporta información, poné
   * acá el texto alternativo y deja de ser decorativa.
   */
  alt: string
  overlay: SectionOverlay
  /** `object-position` de la imagen: qué parte se conserva al recortar. */
  focal: string
}

export const sectionMedia = {
  // 1 · Hero — "Fumigación y control de plagas"
  hero: {
    src: '/images/placeholders/hero.png',
    alt: '',
    overlay: 'dark',
    focal: 'center',
  },
  // 2 · "Moscos, cucarachas, termitas y más"
  pests: {
    src: '/images/placeholders/pests.png',
    alt: '',
    overlay: 'light',
    focal: 'center',
  },
  // 3 · "La técnica correcta para cada espacio"
  methods: {
    src: '/images/placeholders/methods.png',
    alt: '',
    overlay: 'dark',
    focal: 'center',
  },
  // 4 · "Expertos en fumigación de la zona conurbada"
  about: {
    src: '/images/placeholders/about.png',
    alt: '',
    overlay: 'light',
    focal: 'center',
  },
  // 5 · "Cotización sin costo"
  promotion: {
    src: '/images/placeholders/promotion.png',
    alt: '',
    overlay: 'light',
    focal: 'center',
  },
  // 6 · "Tu satisfacción es nuestra prioridad"
  trust: {
    src: '/images/placeholders/trust.png',
    alt: '',
    overlay: 'light',
    focal: 'center',
  },
  // 7 · "Tampico, Madero y Altamira"
  coverage: {
    src: '/images/placeholders/coverage.png',
    alt: '',
    overlay: 'dark',
    focal: 'center',
  },
  // 8 · "Aprende a detectarlo antes de que crezca" (blog)
  blog: {
    src: '/images/placeholders/blog.png',
    alt: '',
    overlay: 'light',
    focal: 'center',
  },
  // 9 · "Pásate o llama"
  contact: {
    src: '/images/placeholders/contact.png',
    alt: '',
    overlay: 'light',
    focal: 'center',
  },
} satisfies Record<SectionId, SectionMedia>
