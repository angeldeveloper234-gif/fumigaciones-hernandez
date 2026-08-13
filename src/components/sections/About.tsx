import {
  BadgeCheck,
  Building2,
  Clock3,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { HERNANDEZ_HOME } from '@/lib/translations'
import { SITE, whatsappUrl } from '@/lib/site'

const copy = HERNANDEZ_HOME.es.about

/**
 * Datos duros, no adjetivos.
 *
 * Las dos últimas tarjetas decían "Equipo: el mejor del mercado" y "Precios:
 * los mejores de la zona". Son superlativos que nadie puede comprobar y que
 * `CLAUDE.md` §5 descarta. En su lugar van la oficina y la base operativa, que
 * son direcciones reales y además son el argumento de la sección.
 *
 * {{PENDIENTE: antigüedad del negocio — el dominio existe desde 2017, pero el
 * negocio puede ser bastante anterior. Con un año concreto, esta tarjeta pesa
 * más que cualquiera de las otras.}}
 */
const credentials = [
  {
    icon: Clock3,
    label: 'Horario',
    value: SITE.officeHoursLabel,
  },
  {
    icon: BadgeCheck,
    label: 'Guardia',
    value: SITE.openingHoursLabel,
  },
  {
    icon: ShieldCheck,
    label: 'Oficina',
    value: `${SITE.address.streetAddress}, ${SITE.address.neighborhood}, ${SITE.address.addressLocality}`,
  },
  {
    icon: HeartHandshake,
    label: 'Base operativa',
    value: 'Calle Malinalli M-5 LT-11, Cd. Cuauhtémoc, Tampico',
  },
] as const

export function About() {
  return (
    <section className="section-y relative isolate overflow-hidden bg-[#1C3266] text-white">
      <SectionBackground id="sec-expertos" />
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <p className="t-kicker text-[#FFE95C]">{copy.eyebrow}</p>
          <h2 className="t-h2 mt-3">{copy.title}</h2>
          <p className="t-body mt-5 text-white/90">{copy.description}</p>
          <p className="t-body mt-4 text-white/90">{copy.secondary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {copy.audiences.map((audience) => (
              <span
                key={audience}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white"
              >
                <Building2 className="size-3.5 text-[#FFE95C]" />
                {audience}
              </span>
            ))}
          </div>
          <a
            href={whatsappUrl(
              'Buen día. Quiero contarles qué estoy viendo en mi propiedad y que me digan cómo seguimos.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#212121] px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#B41B1E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDF00]"
          >
            {copy.cta}
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {credentials.map((item, index) => (
            <article
              key={item.label}
              className={`rounded-[1.5rem] border border-black/8 p-6 shadow-[0_12px_30px_rgba(28,50,102,0.06)] ${
                index === 0
                  ? 'bg-[#FFDF00] text-[#1C3266]'
                  : 'bg-white text-[#212121]'
              }`}
            >
              <item.icon className="size-7" />
              <p className="t-kicker mt-7 opacity-70">{item.label}</p>
              <p className="mt-2 text-base font-black leading-6">{item.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
