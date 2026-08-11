import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { HERNANDEZ_HOME } from '@/lib/translations'
import { PEST_SERVICES } from '@/lib/services'

const copy = HERNANDEZ_HOME.es.pests

export function PestGrid() {
  return (
    <section
      id="servicios"
      className="section-y relative isolate overflow-hidden bg-white"
    >
      <SectionBackground id="pests" />
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="t-kicker text-[#B41B1E]">{copy.eyebrow}</p>
          <h2 className="t-h2 mt-3 text-[#212121]">{copy.title}</h2>
          {/* #3E4650 y no el #5A6070 del template: este párrafo va sobre la
              imagen de sección y el gris claro no llega a AA ahí. */}
          <p className="t-body mx-auto mt-4 text-[#3E4650]">
            {copy.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PEST_SERVICES.map((pest, index) => (
            <FadeUp key={pest.slug} delay={Math.min(index * 0.04, 0.2)}>
              <Link
                href={`/servicios/${pest.slug}`}
                className="group block h-full overflow-hidden rounded-[1.5rem] border border-black/8 bg-[#F6F9FC] shadow-[0_12px_32px_rgba(28,50,102,0.06)] transition hover:-translate-y-1 hover:border-[#FFDF00]/60 hover:shadow-[0_18px_42px_rgba(28,50,102,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDF00]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FFF8DC]">
                  <Image
                    src={pest.image}
                    alt={`${pest.name}: servicio profesional de control de plagas en Tampico y la zona conurbada`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#F07070] px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#212121]">
                    Inspección previa
                  </span>
                </div>
                <div className="flex min-h-36 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="t-h3 text-[#212121]">{pest.name}</h3>
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FFF8DC] text-[#B41B1E] transition group-hover:bg-[#FFDF00] group-hover:text-[#1C3266]">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="t-body-sm mt-3 text-[#5A6070]">
                    {pest.cardDescription}
                  </p>
                  <span className="mt-auto pt-4 text-xs font-black uppercase tracking-[0.12em] text-[#B41B1E]">
                    {copy.cta}
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
