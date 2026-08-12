import type { FaqItem } from '@/components/ui/Faq'
import type { MatrixCombo, MatrixPest, MatrixZone } from '../matrix'

/**
 * Forma de una página de intersección zona × plaga.
 *
 * ── La regla que decide si una página va ──────────────────────────────────
 * La misma plaga tiene que leerse distinto en las tres ciudades porque el
 * inmueble y el entorno son distintos. Termitas en Madero es humedad salina y
 * madera en casa costera; en Altamira es obra nueva y suelo removido; en
 * Tampico es edificación antigua del centro. Si no se puede escribir esa
 * diferencia, la página no va.
 *
 * Mínimo 60% del cuerpo específico de la combinación. Si un párrafo sobrevive
 * cambiando el nombre de la ciudad, está mal escrito.
 */
export interface IntersectionContent {
  zone: MatrixZone
  pest: MatrixPest
  /** Único. No la misma fórmula en las 24. */
  h1: string
  /** ≤60 caracteres. */
  metaTitle: string
  /** ≤155 caracteres. */
  metaDescription: string
  /** 2–3 párrafos. Arranca por la situación local concreta. */
  intro: readonly string[]
  localContext: {
    heading: string
    paragraphs: readonly string[]
  }
  signs: {
    heading: string
    intro: string
    items: readonly string[]
  }
  howWeWork: {
    heading: string
    paragraphs: readonly string[]
    checks: readonly string[]
  }
  /** 5 preguntas propias de esta combinación. */
  faqs: readonly FaqItem[]
  /** 2 intersecciones relacionadas, para el enlazado lateral. */
  related: readonly MatrixCombo[]
}
