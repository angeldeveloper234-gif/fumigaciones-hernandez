import {
  Building2,
  ClipboardCheck,
  Clock3,
  MapPinned,
  ReceiptText,
  ShieldCheck,
} from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { HERNANDEZ_HOME } from '@/lib/translations'
import { SITE } from '@/lib/site'
import { COVERAGE_AREAS } from '@/lib/locations'

const copy = HERNANDEZ_HOME.es.trust

const ICONS = {
  clock: Clock3,
  receipt: ReceiptText,
  office: Building2,
  map: MapPinned,
  shield: ShieldCheck,
  clipboard: ClipboardCheck,
} as const

/**
 * Señales de confianza, no testimonios.
 *
 * Lo que había acá era la misión, la visión y los valores del sitio de 2019
 * —texto legítimo del negocio— pero maquetados como reseñas: cinco estrellas
 * por bloque, comillas de cita, avatar con iniciales y una insignia de Google
 * al lado del título. Presentado así, una declaración de valores se lee como
 * una calificación de clientes que nadie dejó.
 *
 * En su lugar van hechos que el visitante puede comprobar por su cuenta:
 * marcar el teléfono, ir a la oficina, pedir la cotización. Sin estrellas y
 * sin números que no podamos sostener.
 */
export function Trust() {
  return (
    <section className="section-y relative isolate overflow-hidden bg-[#F5F8FC]">
      <SectionBackground id="trust" />
      <div className="container">
        <div className="max-w-2xl">
          <p className="t-kicker text-[#B41B1E]">{copy.eyebrow}</p>
          <h2 className="t-h2 mt-3 text-[#212121]">{copy.title}</h2>
          <p className="t-body mt-4 text-[#3E4650]">{copy.description}</p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.items.map((item, index) => {
            const Icon = ICONS[item.icon]
            const detail =
              item.detail === '{{ADDRESS}}'
                ? `${SITE.address.streetAddress}, ${SITE.address.neighborhood}, ${SITE.address.addressLocality}`
                : item.detail === '{{AREAS}}'
                  ? COVERAGE_AREAS.map((a) => a.name).join(' · ')
                  : item.detail

            return (
              <li key={item.title}>
                <FadeUp delay={Math.min(index * 0.05, 0.2)}>
                  <article className="flex h-full gap-4 rounded-lg border border-black/10 bg-white p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#FFF8DC] text-[#B41B1E]">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="t-h3 text-[#212121]">{item.title}</h3>
                      <p className="t-body-sm mt-1.5 text-[#3E4650]">
                        {detail}
                      </p>
                    </div>
                  </article>
                </FadeUp>
              </li>
            )
          })}
        </ul>

        {/* El slot de reseñas queda declarado y vacío a propósito. Cuando el
            negocio junte reseñas reales en Google, entran acá y recién ahí
            corresponde `aggregateRating` en los datos estructurados.
            {{PENDIENTE: reseñas reales de Google}} */}
      </div>
    </section>
  )
}
