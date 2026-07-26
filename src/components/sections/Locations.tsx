import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Navigation } from 'lucide-react'
import { FUMCON_HOME } from '@/lib/translations'
import { whatsappUrl } from '@/lib/site'
import { COVERAGE_AREAS } from '@/lib/locations'

const copy = FUMCON_HOME.es.coverage

export function Locations() {
  return (
    <section className="relative overflow-hidden bg-[#102414] py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:22px_22px]"
      />
      <div className="container relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
        <div className="lg:sticky lg:top-32">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-[#19D42B] text-[#102414]">
            <Navigation className="size-7" />
          </div>
          <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-[#78ED84]">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.04] tracking-[-0.035em]">
            {copy.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-white/62">
            {copy.description}
          </p>
          <a
            href={whatsappUrl(
              'Hola, quiero confirmar la cobertura de Fumcon en mi zona.',
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/22 px-5 text-sm font-extrabold transition hover:border-[#19D42B] hover:bg-[#19D42B] hover:text-[#102414] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBC02D]"
          >
            {copy.cta}
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(15rem,0.78fr)_minmax(0,1.22fr)] xl:items-start">
          <div className="order-2 grid gap-3 sm:grid-cols-2 xl:order-1 xl:grid-cols-1">
            {COVERAGE_AREAS.map((area, index) => (
              <Link
                key={area.slug}
                href={`/cobertura/${area.slug}`}
                className="group flex min-h-24 items-center gap-4 rounded-[1.25rem] border border-white/12 bg-white/[0.055] p-5 transition hover:-translate-y-0.5 hover:border-[#19D42B]/60 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#19D42B]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#19D42B]/12 text-[#78ED84] transition group-hover:bg-[#19D42B] group-hover:text-[#102414]">
                  <MapPin className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#FBC02D]">
                    Zona {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-1 font-black">{area.name}</p>
                </div>
                <ArrowRight className="ml-auto size-4 shrink-0 text-white/35 transition group-hover:translate-x-1 group-hover:text-[#78ED84]" />
              </Link>
            ))}
          </div>

          <aside className="order-1 rounded-[1.75rem] border border-white/12 bg-white p-5 text-[#102414] shadow-[0_24px_60px_rgba(0,0,0,0.16)] xl:order-2">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-[#118F1D]">
                  Mapa de cobertura
                </p>
                <h3 className="mt-2 text-xl font-black">
                  Presencia en el sureste
                </h3>
              </div>
              <span className="shrink-0 rounded-full bg-[#E9FBEA] px-3 py-1 text-xs font-black text-[#118F1D]">
                8 ciudades
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-black/8 bg-[#F7F9F7] p-2">
              <Image
                src="/images/maps/mexico-coverage-mobile.svg"
                alt="Mapa de México con Yucatán y Quintana Roo resaltados y ocho ciudades de cobertura señaladas"
                width={700}
                height={930}
                className="h-auto w-full sm:hidden"
              />
              <Image
                src="/images/maps/mexico-coverage.svg"
                alt="Mapa de México con Yucatán y Quintana Roo resaltados y ocho ciudades de cobertura señaladas"
                width={1200}
                height={720}
                className="hidden h-auto w-full sm:block"
              />
            </div>

            <ol className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2">
              {COVERAGE_AREAS.map((area, index) => (
                <li
                  key={`map-${area.slug}`}
                  className="flex min-w-0 items-center gap-2 text-[0.65rem] font-extrabold leading-4 text-[#3E463F]"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#19D42B] text-[0.6rem] font-black text-[#102414]">
                    {index + 1}
                  </span>
                  <span>{area.name}</span>
                </li>
              ))}
            </ol>

            <p className="mt-4 text-xs leading-5 text-[#5A6070]">
              Yucatán y Quintana Roo concentran nuestras zonas de atención
              local.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
