/**
 * Fondos de sección y de hero.
 *
 * Punto único de verdad: cambiar una foto es editar la `src` de su entrada y
 * nada más. Ningún componente conoce rutas de imagen.
 *
 * Las `src` de hoy son placeholders autodescriptivos: llevan el `SectionId`
 * escrito encima, un color propio y un patrón diagonal. Están así a propósito,
 * para que se vea de un vistazo qué sección tomó qué imagen. Cuando lleguen
 * las fotos definitivas se reemplaza el archivo con el mismo nombre en
 * `public/images/secciones/` y no hay que tocar código.
 *
 * Formato esperado: horizontal 16:9, 1600px de ancho, comprimido al ~70%.
 */

export type SectionId =
  // Los 6 heroes de páginas estáticas
  | 'hero-home'
  | 'hero-nosotros'
  | 'hero-servicios'
  | 'hero-cobertura'
  | 'hero-blog'
  | 'hero-contacto'
  // Las secciones del home
  | 'sec-plagas'
  | 'sec-tecnica'
  | 'sec-expertos'
  | 'sec-cotizacion'
  | 'sec-confianza'
  | 'sec-zonas'
  | 'sec-blog'
  | 'sec-contacto'

/**
 * Los dos niveles de la dirección de arte, no dos colores distintos.
 *
 * · `hero` — variante lateral de protagonista. Solo para heroes, donde el
 *   texto está confinado a la izquierda y la derecha puede mostrar la foto.
 * · `protagonista` — la foto se reconoce. Va en plagas, técnica, expertos y
 *   zonas: ahí la imagen aporta información.
 * · `textura` — la foto apenas se percibe, casi color de marca. Va en los
 *   bloques de CTA y de señales de confianza, donde solo aporta profundidad.
 *
 * Alternar las dos es lo que evita que el home se lea como un catálogo de
 * banco de imágenes, y de paso separa el sitio del hermano del estudio, que
 * va a foto fuerte pareja en todo.
 */
export type SectionOverlay = 'hero' | 'protagonista' | 'textura'

export interface SectionMedia {
  /** Ruta local o URL absoluta de un host declarado en `next.config.ts`. */
  src: string
  /**
   * Vacío = fondo decorativo: se marca `aria-hidden`, que es lo correcto para
   * una imagen que solo aporta ambiente. Si la foto aporta información, poné
   * acá el texto alternativo y deja de ser decorativa.
   */
  alt: string
  overlay: SectionOverlay
  /** `object-position`: qué parte se conserva al recortar. */
  focal: string
}

export const sectionMedia = {
  'hero-home': {
    src: '/images/secciones/hero-home.png',
    alt: 'Técnico de control de plagas aplicando tratamiento en un inmueble',
    overlay: 'hero',
    focal: 'center right',
  },
  'hero-nosotros': {
    src: '/images/secciones/hero-nosotros.png',
    alt: 'Manos de un técnico preparando el equipo de aplicación',
    overlay: 'hero',
    focal: 'center',
  },
  'hero-servicios': {
    src: '/images/secciones/hero-servicios.png',
    alt: 'Equipo profesional de aplicación para control de plagas',
    overlay: 'hero',
    focal: 'center',
  },
  'hero-cobertura': {
    src: '/images/secciones/hero-cobertura.png',
    alt: 'Vista de una zona residencial de la costa del Golfo',
    overlay: 'hero',
    focal: 'center',
  },
  'hero-blog': {
    src: '/images/secciones/hero-blog.png',
    alt: 'Inspección de una vivienda en busca de señales de plaga',
    overlay: 'hero',
    focal: 'center left',
  },
  'hero-contacto': {
    src: '/images/secciones/hero-contacto.png',
    alt: 'Atención telefónica de servicio de control de plagas',
    overlay: 'hero',
    focal: 'center',
  },

  'sec-plagas': {
    src: '/images/secciones/sec-plagas.png',
    alt: 'Acercamiento de una cucaracha sobre fondo neutro',
    overlay: 'protagonista',
    focal: 'center',
  },
  'sec-tecnica': {
    src: '/images/secciones/sec-tecnica.png',
    alt: 'Interior de una bodega industrial',
    overlay: 'protagonista',
    focal: 'center',
  },
  'sec-expertos': {
    src: '/images/secciones/sec-expertos.png',
    alt: 'Técnico trabajando en el exterior de una vivienda',
    overlay: 'protagonista',
    focal: 'center right',
  },
  'sec-cotizacion': {
    src: '/images/secciones/sec-cotizacion.png',
    alt: '',
    overlay: 'textura',
    focal: 'center',
  },
  'sec-confianza': {
    src: '/images/secciones/sec-confianza.png',
    alt: '',
    overlay: 'textura',
    focal: 'center',
  },
  'sec-zonas': {
    src: '/images/secciones/sec-zonas.png',
    alt: 'Vista urbana de la zona conurbada del sur de Tamaulipas',
    overlay: 'protagonista',
    focal: 'center',
  },
  /**
   * El home tiene 9 secciones, no 8: la shot list no contempla el bloque de
   * guías del blog. Va como `textura`, que es lo que corresponde a un bloque
   * de tarjetas donde la foto no debe competir.
   */
  'sec-blog': {
    src: '/images/secciones/sec-blog.png',
    alt: '',
    overlay: 'textura',
    focal: 'center',
  },
  'sec-contacto': {
    src: '/images/secciones/sec-contacto.png',
    alt: '',
    overlay: 'textura',
    focal: 'center',
  },
} satisfies Record<SectionId, SectionMedia>

/**
 * Heroes de las rutas dinámicas.
 *
 * Resuelven por slug con fallback: una zona o una plaga sin imagen cargada no
 * rompe la página ni queda sin fondo, cae al genérico.
 */
const HERO_ZONE_FALLBACK: SectionMedia = {
  src: '/images/secciones/hero-zona-fallback.png',
  alt: '',
  overlay: 'hero',
  focal: 'center',
}

const zoneHeroMedia: Readonly<Record<string, SectionMedia>> = {
  tampico: { ...HERO_ZONE_FALLBACK, src: '/images/secciones/hero-zona-tampico.png' },
  'ciudad-madero': { ...HERO_ZONE_FALLBACK, src: '/images/secciones/hero-zona-ciudad-madero.png' },
  altamira: { ...HERO_ZONE_FALLBACK, src: '/images/secciones/hero-zona-altamira.png' },
  'pueblo-viejo': { ...HERO_ZONE_FALLBACK, src: '/images/secciones/hero-zona-pueblo-viejo.png' },
  panuco: { ...HERO_ZONE_FALLBACK, src: '/images/secciones/hero-zona-panuco.png' },
  aldama: { ...HERO_ZONE_FALLBACK, src: '/images/secciones/hero-zona-aldama.png' },
}

export const resolveZoneHero = (slug: string): SectionMedia =>
  zoneHeroMedia[slug] ?? HERO_ZONE_FALLBACK

/**
 * En plagas no hace falta placeholder aparte: cada una ya tiene su foto propia
 * en `pest-media.ts`. El hero la reusa como fondo, y si el slug no existiera
 * cae al genérico.
 */
export const resolvePestHero = (src?: string): SectionMedia =>
  src ? { src, alt: '', overlay: 'hero', focal: 'center' } : HERO_ZONE_FALLBACK
