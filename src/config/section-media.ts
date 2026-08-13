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
  | 'hero-nosotros'
  | 'hero-servicios'
  | 'hero-cobertura'
  | 'hero-blog'
  | 'hero-contacto'
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
/**
 * Velo que se pinta sobre la imagen.
 *
 * `hero` no es un `dark` mas oscuro: es un gradiente lateral, de izquierda a
 * derecha, en vez del velo de arriba hacia abajo que usan las secciones. Esa
 * es la diferenciacion elegida frente al sitio hermano del estudio, que apoya
 * el hero en una foto a sangre con velo negro parejo y color de marca encima.
 * Aca el texto descansa sobre una banda casi solida a la izquierda y la foto
 * respira a la derecha, y el hero es una franja compacta, no full-height.
 */
export type SectionOverlay = 'dark' | 'light' | 'hero' | 'none'

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
    overlay: 'hero',
    focal: 'center',
  },
  // Heroes de las cinco paginas estaticas restantes.
  'hero-nosotros': {
    src: '/images/placeholders/hero-nosotros.png',
    alt: '',
    overlay: 'hero',
    focal: 'center',
  },
  'hero-servicios': {
    src: '/images/placeholders/hero-servicios.png',
    alt: '',
    overlay: 'hero',
    focal: 'center',
  },
  'hero-cobertura': {
    src: '/images/placeholders/hero-cobertura.png',
    alt: '',
    overlay: 'hero',
    focal: 'center',
  },
  'hero-blog': {
    src: '/images/placeholders/hero-blog.png',
    alt: '',
    overlay: 'hero',
    focal: 'center',
  },
  'hero-contacto': {
    src: '/images/placeholders/hero-contacto.png',
    alt: '',
    overlay: 'hero',
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

/**
 * Heroes de las rutas dinámicas.
 *
 * Resuelven por slug con fallback: una zona o una plaga sin imagen cargada no
 * rompe la página ni queda sin fondo, cae al genérico. Es la diferencia entre
 * una config que soporta que agreguen una zona mañana y una que hay que
 * recordar actualizar.
 */
const HERO_ZONE_FALLBACK: SectionMedia = {
  src: '/images/placeholders/hero-zona-fallback.png',
  alt: '',
  overlay: 'hero',
  focal: 'center',
}

const zoneHeroMedia: Readonly<Record<string, SectionMedia>> = {
  tampico: { ...HERO_ZONE_FALLBACK, src: '/images/placeholders/hero-zona-tampico.png' },
  'ciudad-madero': { ...HERO_ZONE_FALLBACK, src: '/images/placeholders/hero-zona-ciudad-madero.png' },
  altamira: { ...HERO_ZONE_FALLBACK, src: '/images/placeholders/hero-zona-altamira.png' },
  'pueblo-viejo': { ...HERO_ZONE_FALLBACK, src: '/images/placeholders/hero-zona-pueblo-viejo.png' },
  panuco: { ...HERO_ZONE_FALLBACK, src: '/images/placeholders/hero-zona-panuco.png' },
  aldama: { ...HERO_ZONE_FALLBACK, src: '/images/placeholders/hero-zona-aldama.png' },
}

export const resolveZoneHero = (slug: string): SectionMedia =>
  zoneHeroMedia[slug] ?? HERO_ZONE_FALLBACK

/**
 * En plagas no hace falta un placeholder aparte: cada una ya tiene su foto
 * propia en `pest-media.ts`. El hero la reusa como fondo, y si el slug no
 * existiera cae al genérico de zona.
 */
export const resolvePestHero = (src?: string): SectionMedia =>
  src ? { src, alt: '', overlay: 'hero', focal: 'center' } : HERO_ZONE_FALLBACK
