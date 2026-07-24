import {
  BadgeCheck,
  Building2,
  Clock3,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react'
import { FUMCON_HOME } from '@/lib/translations'
import { SITE, whatsappUrl } from '@/lib/site'

const copy = FUMCON_HOME.es.about

const credentials = [
  {
    icon: BadgeCheck,
    label: 'Licencia sanitaria',
    value: SITE.license,
  },
  {
    icon: ShieldCheck,
    label: 'Productos certificados',
    value: 'COFEPRIS / EPA',
  },
  {
    icon: HeartHandshake,
    label: 'Aplicación responsable',
    value: 'No tóxicos y biodegradables',
  },
  {
    icon: Clock3,
    label: 'Respuesta operativa',
    value: '24 horas, todos los días',
  },
] as const

export function About() {
  return (
    <section className="bg-[#F4F7F4] py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#118F1D]">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.05] tracking-[-0.035em] text-[#212121]">
            {copy.title}
          </h2>
          <p className="mt-6 text-base leading-7 text-[#4F5B52]">
            {copy.description}
          </p>
          <p className="mt-4 text-base leading-7 text-[#4F5B52]">
            {copy.secondary}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {copy.audiences.map((audience) => (
              <span
                key={audience}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-bold text-[#334036]"
              >
                <Building2 className="size-3.5 text-[#118F1D]" />
                {audience}
              </span>
            ))}
          </div>
          <a
            href={whatsappUrl(
              'Hola, quiero saber qué tratamiento recomienda Fumcon para mi propiedad.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#212121] px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#118F1D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19D42B]"
          >
            Hablar con un especialista
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {credentials.map((item, index) => (
            <article
              key={item.label}
              className={`rounded-[1.5rem] border border-black/8 p-6 shadow-[0_12px_30px_rgba(16,36,20,0.06)] ${
                index === 0
                  ? 'bg-[#19D42B] text-[#102414]'
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
