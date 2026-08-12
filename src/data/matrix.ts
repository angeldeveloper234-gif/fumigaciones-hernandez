import type { ServiceSlug } from '@/lib/services'
import type { CoverageSlug } from '@/lib/locations'

/**
 * Matriz zona × plaga. Fuente única de las páginas de intersección.
 *
 * Declara qué combinaciones existen. Lo que no está acá no existe: la ruta
 * devuelve 404 en vez de servir una página vacía. Esa es la diferencia entre
 * una arquitectura de intersección y doorway spam.
 *
 * ── Por qué 8 × 3 y no 11 × 6 ────────────────────────────────────────────
 * De las 66 combinaciones posibles solo 24 tienen algo genuinamente distinto
 * que decir. Se eligieron por dos criterios:
 *
 * · Las 8 plagas núcleo tienen anclaje local verificable: el inmueble y el
 *   entorno de cada ciudad cambian cómo se comporta la plaga y cómo se trata.
 *   `pulgas`, `aranas` y `moscas` quedan fuera —mantienen su página de
 *   servicio— porque su tratamiento no cambia de forma sustantiva entre
 *   Tampico y Altamira. Forzarlas daría 9 páginas finas.
 *
 * · Las 3 zonas núcleo concentran el negocio. `pueblo-viejo`, `panuco` y
 *   `aldama` conservan su página de zona y no generan intersecciones: son
 *   cobertura secundaria y no hay volumen de búsqueda que las justifique.
 *
 * ── Patrón de URL ─────────────────────────────────────────────────────────
 * `/cobertura/[zona]/[plaga]`, anidado bajo la página de zona que ya existe e
 * indexa. Las hijas heredan contexto temático y el breadcrumb sale natural.
 * Cambiarlo a esta altura exige un 301 por cada URL.
 */

/** Plagas con intersección. Ocho de las once del catálogo. */
export const MATRIX_PESTS = [
  'moscos',
  'cucarachas',
  'termitas',
  'ratas',
  'alacranes',
  'chinches',
  'garrapatas',
  'hormigas',
] as const satisfies readonly ServiceSlug[]

/** Zonas con intersección. Las tres del núcleo del negocio. */
export const MATRIX_ZONES = [
  'tampico',
  'ciudad-madero',
  'altamira',
] as const satisfies readonly CoverageSlug[]

export type MatrixPest = (typeof MATRIX_PESTS)[number]
export type MatrixZone = (typeof MATRIX_ZONES)[number]

export interface MatrixCombo {
  zone: MatrixZone
  pest: MatrixPest
}

/** Las 24 combinaciones declaradas, en orden de zona y luego de plaga. */
export const MATRIX_COMBOS: readonly MatrixCombo[] = MATRIX_ZONES.flatMap(
  (zone) => MATRIX_PESTS.map((pest) => ({ zone, pest })),
)

export const isMatrixZone = (slug: string): slug is MatrixZone =>
  (MATRIX_ZONES as readonly string[]).includes(slug)

export const isMatrixPest = (slug: string): slug is MatrixPest =>
  (MATRIX_PESTS as readonly string[]).includes(slug)

/** Una combinación es válida solo si ambos extremos están declarados. */
export const isMatrixCombo = (
  zone: string,
  pest: string,
): zone is MatrixZone => isMatrixZone(zone) && isMatrixPest(pest)

/** Las 8 plagas que le corresponden a una zona. Vacío si no es zona núcleo. */
export const pestsForZone = (zone: string): readonly MatrixPest[] =>
  isMatrixZone(zone) ? MATRIX_PESTS : []

/** Las 3 zonas que le corresponden a una plaga. Vacío si no es plaga núcleo. */
export const zonesForPest = (pest: string): readonly MatrixZone[] =>
  isMatrixPest(pest) ? MATRIX_ZONES : []

export const intersectionPath = (zone: string, pest: string) =>
  `/cobertura/${zone}/${pest}`
