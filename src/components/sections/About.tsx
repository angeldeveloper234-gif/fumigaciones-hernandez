import {
  BadgeCheck,
  Building2,
  Clock3,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react'
import { HERNANDEZ_HOME } from '@/lib/translations'
import { SITE, whatsappUrl } from '@/lib/site'

const copy = HERNANDEZ_HOME.es.about

// Solo afirmaciones que el negocio sostiene en su propio material histórico.
// TODO(cliente): si hay licencia sanitaria o antigüedad concreta, sustituyen a
// las dos primeras y ganan mucha fuerza frente a la competencia local.
const credentials = [
  {
    icon: Clock3,
    label: 'Disponibilidad',
    value: SITE.openingHoursLabel,
  },
  {
    icon: BadgeCheck,
    label: 'Zona de servicio',
    value: 'Tampico, Madero y Altamira',
  },
  {
    icon: ShieldCheck,
    label: 'Equipo',
    value: 'El mejor del mercado',
  },
  {
    icon: HeartHandshake,
    label: 'Precios',
    value: 'Los mejores de la zona',
  },
] as const

export function About() {
  return (
    <section className="bg-[#F5F8FC] py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-[-0.035em] text-[#212121]">
            {copy.title}
          </h2>
          <p className="mt-6 text-base leading-7 text-[#4F5663]">
            {copy.description}
          </p>
          <p className="mt-4 text-base leading-7 text-[#4F5663]">
            {copy.secondary}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {copy.audiences.map((audience) => (
              <span
                key={audience}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#333A44]"
              >
                <Building2 className="size-3.5 text-[#B41B1E]" />
                {audience}
              </span>
            ))}
          </div>
          <a
            href={whatsappUrl(
              'Hola, quiero saber qué tratamiento recomienda Fumigaciones Hernández para mi propiedad.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#212121] px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#B41B1E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDF00]"
          >
            Hablar con un especialista
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
              <p className="mt-8 text-xs font-black uppercase tracking-[0.14em] opacity-65">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-black leading-6">{item.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
