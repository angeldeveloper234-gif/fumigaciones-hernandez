import Image from 'next/image'
import {
  sectionMedia,
  type SectionId,
  type SectionMedia,
  type SectionOverlay,
} from '@/config/section-media'
import { cn } from '@/lib/utils'

/**
 * Gradientes de velo.
 *
 * Se usa gradiente y no un velo plano para que el fondo respire en el centro y
 * siga cerrando arriba y abajo, donde suele caer el texto. Las opacidades están
 * elegidas para el peor caso —foto blanca bajo `dark`, foto negra bajo `light`—
 * y en ese peor caso el contraste del texto sigue por encima de 4.5:1.
 */
/**
 * Opacidades calculadas, no elegidas a ojo. Se miden en el punto más
 * transparente del gradiente (`via-`), que es el que manda, y contra el peor
 * caso admitido para cada velo:
 *
 *  - `dark`  · peor caso foto blanca ⇒ fondo #616161. El texto más flojo que
 *              el home pone sobre imagen es `text-white/80` ⇒ 4.7:1.
 *  - `light` · peor caso foto de luminancia media-baja (≈ #404040) ⇒ fondo
 *              #D9D9D9. El texto más flojo es #B41B1E ⇒ 4.8:1.
 *
 * El velo claro cubre fotos hasta media-oscuras, no fotos negras: para una
 * foto oscura corresponde `overlay: 'dark'`, que es la decisión que existe
 * justamente para eso. Subir más el blanco sí llegaría a la foto negra, pero
 * aplana los fondos entre sí —a /90 dos secciones claras quedaban a 3 unidades
 * RGB de distancia— y el ritmo por sección se pierde.
 *
 * Si estas opacidades cambian, hay que rehacer la cuenta.
 */
const OVERLAY: Record<SectionOverlay, string> = {
  dark: 'bg-gradient-to-b from-black/74 via-black/62 to-black/76',
  light: 'bg-gradient-to-b from-white/86 via-white/80 to-white/88',
  /**
   * Velo de hero: lateral, no de arriba hacia abajo.
   *
   * El texto descansa sobre la banda casi sólida de la izquierda y la foto
   * respira a la derecha. En el peor caso —foto blanca— el punto más claro
   * bajo el texto es el azul de marca al 88%, y ahí el blanco supera 8:1.
   */
  hero: 'bg-gradient-to-r from-[#1C3266] via-[#1C3266]/88 to-[#1C3266]/45',
  none: '',
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
    ? props.id === 'hero' || props.id.startsWith('hero-')
    : (props as { priority?: boolean }).priority === true
  // Se consulta la clase, no el literal: `satisfies` conserva el tipo exacto de
  // cada entrada, así que comparar contra `'none'` sería código muerto para
  // TypeScript mientras ninguna sección lo use. `none` mapea a cadena vacía.
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
      {overlayClass && <div className={cn('absolute inset-0', overlayClass)} />}
    </div>
  )
}
