import type { ServiceSlug } from '@/lib/services'

/**
 * Foto de cada plaga. Punto único de verdad.
 *
 * Existe por una razón concreta: las once imágenes que traía el repo eran
 * byte a byte las mismas que usa `fumcon-next`, y encima adentro se repetían
 * —`chinches`, `garrapatas` y `pulgas` apuntaban al mismo archivo, igual que
 * `moscas` y `moscos`—. Once plagas con seis fotos, todas prestadas.
 *
 * Las de acá salen del banco de Pexels del estudio (licencia Pexels, uso
 * comercial sin atribución obligatoria) y se verificó que ninguna coincida
 * con las de fumcon: se compararon por hash perceptual las 41 candidatas
 * contra las 8 de fumcon y no hubo una sola colisión.
 *
 * Los archivos están descargados al repo, no enlazados a Pexels. Si el CDN
 * cambia una URL o baja una foto, el sitio no se entera.
 *
 * Todas normalizadas a 1600x1200 (4:3) en WebP con recorte centrado en el
 * sujeto. La variante de Open Graph de cada una vive en /images/og/pests.
 */

export interface PestMedia {
  /** Ruta local. Descargada al repo a propósito, no hotlink. */
  src: string
  /** Descriptivo y específico: es lo que lee quien usa lector de pantalla. */
  alt: string
  /**
   * ID de Pexels de origen, para poder rastrear la licencia y el autor.
   * `null` en los slots que todavía esperan foto.
   */
  pexelsId: number | null
  /** `false` mientras el slot sea un placeholder de color plano. */
  isFinal: boolean
}

/**
 * Alacranes y arañas no estaban en los bancos del estudio y se buscaron
 * aparte en Pexels, aplicando el mismo filtro de autor: se descarta cualquier
 * foto cuyo autor tenga nombre de fumigadora. Los dos autores elegidos son
 * fotógrafos individuales.
 *
 * En alacranes se eligió a propósito un Centruroides sobre madera y no una
 * toma de desierto: Centruroides es el género que importa en México y el
 * contexto doméstico es el que corresponde a una página que habla de grietas,
 * muros y entretechos. En arañas, una doméstica sobre su tela, que es lo que
 * la gente reconoce y lo que el servicio retira.
 */
export const pestMedia = {
  moscos: {
    src: '/images/pests/moscos.webp',
    alt: 'Mosco posado sobre una hoja, visto de cerca',
    pexelsId: 34407554,
    isFinal: true,
  },
  cucarachas: {
    src: '/images/pests/cucarachas.webp',
    alt: 'Cucaracha alemana sobre una superficie clara',
    pexelsId: 27033323,
    isFinal: true,
  },
  termitas: {
    // Muestra el daño y no el insecto, que es el argumento real: la madera se
    // come por dentro y cuando se ve por fuera ya avanzó.
    src: '/images/pests/termitas.webp',
    alt: 'Madera perforada por dentro, con el daño visible en la superficie',
    pexelsId: 18087296,
    isFinal: true,
  },
  ratas: {
    src: '/images/pests/ratas.webp',
    alt: 'Roedor sobre piso de concreto, junto a un muro',
    pexelsId: 7164046,
    isFinal: true,
  },
  hormigas: {
    src: '/images/pests/hormigas.webp',
    alt: 'Hormiga recorriendo un tallo verde',
    pexelsId: 20724883,
    isFinal: true,
  },
  alacranes: {
    src: '/images/pests/alacranes.webp',
    alt: 'Alacrán del género Centruroides sobre una superficie de madera',
    pexelsId: 20781638,
    isFinal: true,
  },
  pulgas: {
    // El banco advierte que es una toma de microscopio, más clínica que
    // ambiental. Sirve para ilustrar; una foto de mascota rascándose
    // comunicaría mejor, pero no hay ninguna disponible todavía.
    src: '/images/pests/pulgas.webp',
    alt: 'Pulga vista al microscopio, con su estructura completa a la vista',
    pexelsId: 12953356,
    isFinal: true,
  },
  chinches: {
    // De las tres candidatas del banco, la única descrita explícitamente como
    // "common bed bug". Las otras dos eran aproximaciones de otra especie.
    src: '/images/pests/chinches.webp',
    alt: 'Chinche de cama sobre una superficie, con el exoesqueleto a la vista',
    pexelsId: 7899582,
    isFinal: true,
  },
  aranas: {
    src: '/images/pests/aranas.webp',
    alt: 'Araña doméstica sobre su tela, vista de cerca',
    pexelsId: 37809643,
    isFinal: true,
  },
  garrapatas: {
    src: '/images/pests/garrapatas.webp',
    alt: 'Garrapata sobre una hoja, con el fondo desenfocado',
    pexelsId: 11019894,
    isFinal: true,
  },
  moscas: {
    src: '/images/pests/moscas.webp',
    alt: 'Mosca doméstica de cerca, con los ojos compuestos a la vista',
    pexelsId: 14512575,
    isFinal: true,
  },
} satisfies Record<ServiceSlug, PestMedia>

/** Slots que todavía esperan foto definitiva. */
export const pendingPestMedia = (
  Object.entries(pestMedia) as [ServiceSlug, PestMedia][]
)
  .filter(([, m]) => !m.isFinal)
  .map(([slug]) => slug)
