import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { HERNANDEZ_HOME } from '@/lib/translations'
import { PEST_SERVICES } from '@/lib/services'

const copy = HERNANDEZ_HOME.es.pests

/**
 * Listado de plagas en filas horizontales, con la foto a la izquierda.
 *
 * El template base traía una grilla de cuatro columnas con la foto en 4:3
 * arriba y el título debajo: el mismo patrón, clase por clase, que usa
 * el sitio hermano. Además obligaba a recortar once plagas en tarjetas
 * cuadradas
 * donde el nombre —lo único que la persona busca— queda diminuto.
 *
 * En fila el nombre manda, la foto acompaña, y el bloque se lee como un
 * directorio de servicios y no como un catálogo de fotos de stock.
 */
export function PestGrid() {
  return (
    <section
      id="servicios"
      className="section-y relative isolate overflow-hidden bg-[#1C3266] text-white"
    >
      <SectionBackground id="sec-plagas" />
      <div className="container">
        <div className="max-w-2xl">
          <p className="t-kicker text-[#FFE95C]">{copy.eyebrow}</p>
          <h2 className="t-h2 mt-3">{copy.title}</h2>
          <p className="t-body mt-4 text-white/90">{copy.description}</p>
        </div>

        <ul className="mt-10 grid gap-3 lg:grid-cols-2 lg:gap-4">
          {PEST_SERVICES.map((pest, index) => (
            <li key={pest.slug}>
              <FadeUp delay={Math.min(index * 0.03, 0.18)}>
                <Link
                  href={`/servicios/${pest.slug}`}
                  aria-label={`${pest.name}: ${copy.cta.toLowerCase()}`}
                  className="group flex h-full items-stretch overflow-hidden rounded-lg border border-black/10 bg-white transition hover:border-[#1C3266] hover:shadow-[0_10px_28px_rgba(28,50,102,0.10)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C3266]"
                >
                  <div className="relative w-28 shrink-0 self-stretch bg-[#EEF2F7] sm:w-36">
                    <Image
                      src={pest.image}
                      alt={pest.imageAlt}
                      fill
                      sizes="(max-width: 640px) 112px, 144px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 items-center gap-3 p-4 sm:p-5">
                    <div className="min-w-0 flex-1">
                      <h3 className="t-h3 text-[#212121]">{pest.name}</h3>
                      <p className="t-body-sm mt-1.5 text-[#3E4650]">
                        {pest.cardDescription}
                      </p>
                    </div>
                    <ArrowRight className="size-5 shrink-0 text-[#1C3266] transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
