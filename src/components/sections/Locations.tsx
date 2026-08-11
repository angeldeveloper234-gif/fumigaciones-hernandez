import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Navigation } from 'lucide-react'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { HERNANDEZ_HOME } from '@/lib/translations'
import { whatsappUrl } from '@/lib/site'
import { COVERAGE_AREAS } from '@/lib/locations'

const copy = HERNANDEZ_HOME.es.coverage

export function Locations() {
  return (
    <section className="section-y relative isolate overflow-hidden bg-[#1C3266] text-white">
      <SectionBackground id="coverage" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="container relative grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-32">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[#FFDF00] text-[#1C3266]">
            <Navigation className="size-7" />
          </div>
          <p className="t-kicker mt-6 text-[#FFE95C]">{copy.eyebrow}</p>
          <h2 className="t-h2 mt-3">{copy.title}</h2>
          <p className="t-body mt-4 text-white/80">{copy.description}</p>
          <a
            href={whatsappUrl(
              'Buen día. Quiero confirmar si llegan a mi colonia.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/22 px-5 text-sm font-extrabold transition hover:border-[#FFDF00] hover:bg-[#FFDF00] hover:text-[#1C3266] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F07070]"
          >
            {copy.cta}
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(24rem,1.2fr)_minmax(18rem,0.8fr)] xl:items-stretch">
          <div className="order-2 grid gap-3 sm:grid-cols-2 xl:order-1 xl:auto-rows-fr xl:grid-cols-2">
            {COVERAGE_AREAS.map((area, index) => (
              <Link
                key={area.slug}
                href={`/cobertura/${area.slug}`}
                className="group flex h-full min-h-24 items-center gap-4 rounded-[1.25rem] border border-white/12 bg-white/[0.055] p-5 transition hover:-translate-y-0.5 hover:border-[#FFDF00]/60 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FFDF00] xl:min-h-28"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#FFDF00]/12 text-[#FFE95C] transition group-hover:bg-[#FFDF00] group-hover:text-[#1C3266]">
                  <MapPin className="size-5" />
                </span>
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  {/* Ver nota en Methods: el coral no llega a AA sobre foto. */}
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#FFE95C]">
                    Zona {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-1 text-[clamp(0.75rem,calc(0.65rem+0.25vw),0.825rem)] font-black leading-[1.15] [hyphens:auto] [overflow-wrap:break-word]">
                    {area.name}
                  </p>
                </div>
                <ArrowRight className="ml-auto size-4 shrink-0 text-white/35 transition group-hover:translate-x-1 group-hover:text-[#FFE95C]" />
              </Link>
            ))}
          </div>

          <aside className="order-1 flex h-full flex-col rounded-[1.75rem] border border-white/12 bg-white p-5 text-[#1C3266] shadow-[0_24px_60px_rgba(0,0,0,0.16)] xl:order-2">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="t-kicker text-[#B41B1E]">Mapa de cobertura</p>
                <h3 className="t-h3 mt-2">
                  Presencia en Tampico y la zona conurbada
                </h3>
              </div>
              <span className="shrink-0 rounded-full bg-[#FFF8DC] px-3 py-1 text-xs font-black text-[#B41B1E]">
                {COVERAGE_AREAS.length} zonas
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-black/8 bg-[#F6F9FC] p-2">
              <Image
                src="/images/maps/mexico-coverage-mobile.svg"
                alt="Mapa de México con la zona conurbada resaltados y ocho ciudades de cobertura señaladas"
                width={700}
                height={930}
                className="h-auto w-full sm:hidden"
              />
              <Image
                src="/images/maps/mexico-coverage.svg"
                alt="Mapa de México con la zona conurbada resaltados y ocho ciudades de cobertura señaladas"
                width={1200}
                height={720}
                className="hidden h-auto w-full sm:block"
              />
            </div>

            <ol className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2">
              {COVERAGE_AREAS.map((area, index) => (
                <li
                  key={`map-${area.slug}`}
                  className="flex min-w-0 items-center gap-2 text-[0.65rem] font-extrabold leading-4 text-[#3E4650]"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#FFDF00] text-[0.6rem] font-black text-[#1C3266]">
                    {index + 1}
                  </span>
                  <span>{area.name}</span>
                </li>
              ))}
            </ol>

            <p className="mt-auto pt-4 text-xs leading-5 text-[#3E4650]">
              Tampico, Ciudad Madero y Altamira concentran el grueso del
              servicio. Pueblo Viejo, Pánuco y Aldama se atienden coordinando
              la visita.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
