import type { MatrixCombo, MatrixPest, MatrixZone } from '../matrix'
import type { IntersectionContent } from './types'
import { CIUDAD_MADERO_INTERSECTIONS } from './ciudad-madero'
import { TAMPICO_INTERSECTIONS } from './tampico'

export type { IntersectionContent } from './types'

/**
 * Registro de las páginas de intersección zona × plaga.
 *
 * La matriz declara qué combinaciones existen; los archivos por zona declaran
 * qué dice cada una. Están separados a propósito: una combinación sin
 * contenido no genera página, así que es imposible publicar una intersección
 * vacía por olvido.
 *
 * Estado: Tampico y Ciudad Madero completas (16/24). Falta Altamira, que se
 * escribe en la tanda 3 de la fase 3B.
 */
const ALL: readonly IntersectionContent[] = [
  ...TAMPICO_INTERSECTIONS,
  ...CIUDAD_MADERO_INTERSECTIONS,
]

export const intersectionKey = (zone: string, pest: string) => `${zone}/${pest}`

export const INTERSECTIONS: Readonly<Record<string, IntersectionContent>> =
  Object.fromEntries(ALL.map((c) => [intersectionKey(c.zone, c.pest), c]))

export const getIntersection = (zone: string, pest: string) =>
  INTERSECTIONS[intersectionKey(zone, pest)] ?? null

/** Combinaciones con contenido escrito. Alimenta `generateStaticParams`. */
export const publishedIntersections = (): readonly MatrixCombo[] =>
  ALL.map(({ zone, pest }) => ({ zone, pest }))

export const hasIntersection = (zone: string, pest: string) =>
  intersectionKey(zone, pest) in INTERSECTIONS

/**
 * Los dos helpers de abajo alimentan el enlazado bidireccional: la página de
 * zona lista sus plagas y la de servicio lista sus zonas.
 *
 * Filtran por contenido publicado y no por la matriz a propósito. Durante la
 * fase 3B la matriz declara 24 combinaciones pero solo hay contenido para
 * algunas; enlazar contra la matriz dejaría enlaces a 404 en producción hasta
 * que se escriba la última. Cuando 3B termine, ambos conjuntos coinciden.
 */
export const publishedPestsForZone = (zone: string): readonly MatrixPest[] =>
  ALL.filter((c) => c.zone === zone).map((c) => c.pest)

export const publishedZonesForPest = (pest: string): readonly MatrixZone[] =>
  ALL.filter((c) => c.pest === pest).map((c) => c.zone)
