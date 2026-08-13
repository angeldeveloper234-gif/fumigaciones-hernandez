/**
 * Fondos de sección y de hero.
 *
 * Punto único de verdad: cambiar una foto es editar la `src` de su entrada y
 * nada más. Ningún componente conoce rutas de imagen.
 *
 * Los 6 heroes ya tienen foto real: técnicos de control de plagas trabajando.
 * Las secciones del home siguen con placeholders autodescriptivos —llevan el
 * `SectionId` escrito encima, un color propio y un patrón diagonal— para que
 * se vea de un vistazo qué sección tomó qué imagen. Cuando lleguen sus fotos
 * se reemplaza el archivo con el mismo nombre en `public/images/secciones/`
 * y no hay que tocar código.
 *
 * Formato esperado: horizontal 16:9, 1600px de ancho, comprimido al ~70%.
 *
 * Sobre las fotos de los heroes, tres cosas que conviene no perder:
 *
 * 1. Son ilustrativas, de Pexels, no del equipo de Hernández. Por eso ningún
 *    `alt` dice «nuestro equipo» ni «nuestro trabajo»: sería una afirmación
 *    falsa del mismo tipo que un testimonio inventado.
 * 2. Se descartaron las que mostraban marca legible de otra fumigadora. Dos
 *    candidatas fuertes de la misma sesión (Pexels 16851694 y 19789837) traían
 *    «GARDA PEST CONTROL» impreso en el tanque y en el uniforme, y otra traía
 *    el escudo municipal de Daca. No entran, por buenas que sean.
 * 3. El `pexelsId` queda anotado para poder rastrear licencia y autor. Licencia
 *    Pexels: uso comercial, sin atribución obligatoria.
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
  /**
   * ID de Pexels de origen, para rastrear licencia y autor. Ausente en los
   * slots que todavía tienen placeholder.
   */
  pexelsId?: number
}

export const sectionMedia = {
  /**
   * El técnico queda a la izquierda del centro, así que el recorte se ancla
   * en 35%: en móvil el hero se vuelve vertical y un `center` lo dejaría
   * fuera, con la nube de humo sola ocupando todo.
   */
  'hero-home': {
    src: '/images/secciones/hero-home.webp',
    alt: 'Técnico de control de plagas nebulizando el exterior de una vivienda',
    overlay: 'hero',
    focal: '35% center',
    pexelsId: 19789841,
  },
  /** Equipo y oficio, sin cara mirando a cámara: es la página de quiénes son. */
  'hero-nosotros': {
    src: '/images/secciones/hero-nosotros.webp',
    alt: 'Mochila aspersora al hombro de un técnico de control de plagas',
    overlay: 'hero',
    focal: 'center',
    pexelsId: 9246012,
  },
  /** Nebulización dentro de una bodega: dice que atienden industria, no solo casas. */
  'hero-servicios': {
    src: '/images/secciones/hero-servicios.webp',
    alt: 'Técnico nebulizando el interior de una bodega',
    overlay: 'hero',
    focal: 'center',
    pexelsId: 36302077,
  },
  /** Técnico recorriendo el exterior de una vivienda, que es de lo que habla cobertura. */
  'hero-cobertura': {
    src: '/images/secciones/hero-cobertura.webp',
    alt: 'Técnico con equipo de protección caminando por el exterior de una vivienda',
    overlay: 'hero',
    focal: 'center',
    pexelsId: 4732346,
  },
  'hero-blog': {
    src: '/images/secciones/hero-blog.webp',
    alt: 'Técnico aplicando tratamiento en una nave de almacenaje',
    overlay: 'hero',
    focal: 'center',
    pexelsId: 32055757,
  },
  /** La cara queda a la derecha del centro; el recorte la sigue. */
  'hero-contacto': {
    src: '/images/secciones/hero-contacto.webp',
    alt: 'Técnico de control de plagas con equipo de aplicación listo',
    overlay: 'hero',
    focal: '58% center',
    pexelsId: 9245158,
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
