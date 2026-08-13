import Image from 'next/image'
import {
  sectionMedia,
  type SectionId,
  type SectionMedia,
  type SectionOverlay,
} from '@/config/section-media'
import { cn } from '@/lib/utils'

/**
 * Los dos velos de la dirección de arte.
 *
 * Los dos son del azul de marca y laterales, de izquierda a derecha: el texto
 * descansa sobre la banda densa de la izquierda y la foto respira a la
 * derecha. Lo que cambia entre ellos es cuánta foto dejan pasar.
 *
 * La versión anterior de este archivo fallaba justamente acá. Tenía un velo
 * claro al 80-86% y uno oscuro al 62-76%, calibrados para garantizar AA
 * contra la peor foto imaginable. El resultado era correcto y también
 * invisible: un color plano bajo un velo al 80% da otro color plano, y las
 * secciones se veían igual que antes de tener imagen.
 *
 * Ahora la cuenta se hace al revés: primero cuánta foto tiene que verse, y
 * después se garantiza el contraste ubicando el texto en la banda densa.
 *
 *  - `protagonista` · 90% a la izquierda, 42% a la derecha. Sobre la peor foto
 *    posible (blanca), la banda de texto queda en #37497A o más oscuro y el
 *    blanco supera 7:1. La mitad derecha muestra la foto de verdad.
 *  - `textura` · 94% a 80%. La foto solo aporta grano y profundidad; el bloque
 *    se lee como color de marca. Blanco por encima de 9:1 en todo el ancho.
 */
const OVERLAY: Record<SectionOverlay, string> = {
  /**
   * Hero: el más generoso con la imagen, ~26% de foto en el centro.
   *
   * Se intentó primero con gradiente lateral —velo denso a la izquierda, foto
   * respirando a la derecha— y hubo que descartarlo tras medirlo: el texto de
   * los heroes se extiende más allá de la banda densa (el `<span>` de color
   * del H1, la insignia, la columna derecha) y caía en zonas al 45%, con
   * contrastes de 2:1. Vertical y parejo sostiene AA en todo el ancho.
   */
  hero: 'bg-gradient-to-b from-[#1C3266]/88 via-[#1C3266]/74 to-[#1C3266]/88',
  /**
   * Sección protagonista: ~20% de foto. La imagen se reconoce y no compite con
   * las grillas de tarjetas que llevan estas secciones.
   */
  protagonista:
    'bg-gradient-to-b from-[#1C3266]/90 via-[#1C3266]/80 to-[#1C3266]/90',
  /**
   * Textura: ~12%. La foto solo aporta grano y profundidad; el bloque se lee
   * como color de marca, que es lo que corresponde a los CTA y al bloque de
   * señales de confianza.
   */
  textura: 'bg-gradient-to-b from-[#1C3266]/94 via-[#1C3266]/88 to-[#1C3266]/94',
}

type SectionBackgroundProps = {
  className?: string
} & (
  | { id: SectionId; media?: never }
  | {
      /**
       * Media ya resuelta. La usan las rutas dinámicas, que eligen su imagen
       * por slug con `resolveZoneHero` o `resolvePestHero` y por lo tanto no
       * tienen un `SectionId` fijo.
       */
      media: SectionMedia
      id?: never
      /** El hero de la página es su LCP: precarga. */
      priority?: boolean
    }
)

/**
 * Fondo de sección. Va como primer hijo de un `<section>` con `relative isolate`.
 *
 * Se apoya en `fill` dentro de un contenedor absoluto, así que no reserva
 * espacio ni desplaza nada al cargar (CLS 0).
 */
export function SectionBackground(props: SectionBackgroundProps) {
  const { className } = props
  const media: SectionMedia = props.id ? sectionMedia[props.id] : props.media
  // Fondo sin `alt` = puramente decorativo: se oculta del árbol de accesibilidad.
  const decorative = media.alt.trim() === ''
  // Un solo `priority` por página, y siempre el hero: es el LCP. Las secciones
  // que no son hero nunca precargan.
  const isLcp = props.id
    ? props.id.startsWith('hero-')
    : (props as { priority?: boolean }).priority === true
  const overlayClass = OVERLAY[media.overlay]

  return (
    <div
      aria-hidden={decorative || undefined}
      className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}
    >
      <Image
        src={media.src}
        alt={media.alt}
        fill
        sizes="100vw"
        // `priority` ya implica carga eager + fetchpriority alto, y sin él
        // `next/image` es lazy por defecto. Pasar `loading` a mano además de
        // `priority` pisa esa combinación y el hero pierde la precarga.
        priority={isLcp}
        style={{ objectPosition: media.focal }}
        className="object-cover"
      />
      <div className={cn('absolute inset-0', overlayClass)} />
    </div>
  )
}
