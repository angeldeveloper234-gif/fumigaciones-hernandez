import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
} from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  ALL_AREA_SERVICES,
  COVERAGE_AREAS,
  getAreaCommonPests,
  getCoverageOgImage,
  getCoverageArea,
  getRelatedAreas,
} from '@/lib/locations'
import {
  areaServiceSchema,
  breadcrumbSchema,
  faqSchema,
} from '@/lib/structured-data'
import { getPestService } from '@/lib/services'
import { Faq } from '@/components/ui/Faq'
import { publishedPestsForZone } from '@/data/intersections'
import { intersectionPath } from '@/data/matrix'
import { getZoneFaqs } from '@/data/zone-faqs'
import { generatePageMetadata } from '@/lib/seo'
import { whatsappUrl } from '@/lib/site'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return COVERAGE_AREAS.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const area = getCoverageArea(slug)

  if (!area) {
    return generatePageMetadata({
      title: 'Zona no encontrada',
      description: '',
      path: `/cobertura/${slug}`,
      noIndex: true,
    })
  }

  return generatePageMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/cobertura/${area.slug}`,
    image: getCoverageOgImage(area),
    absoluteTitle: true,
    keywords: [
      `fumigación ${area.name}`,
      `control de plagas ${area.name}`,
      `fumigadora en ${area.name}`,
      `fumigación urgente ${area.name}`,
      'Fumigaciones Hernández',
    ],
  })
}

const processSteps = [
  {
    icon: SearchCheck,
    title: 'Inspección',
    description: 'Vemos qué plaga es, por dónde entra y qué tan avanzada está.',
  },
  {
    icon: ShieldCheck,
    title: 'Tratamiento',
    description: 'Elegimos la técnica según el tipo de inmueble y aplicamos.',
  },
  {
    icon: CheckCircle2,
    title: 'Seguimiento',
    description: 'Volvemos a revisar y le decimos qué cerrar para que no vuelva.',
  },
] as const

export default async function CoverageAreaPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const area = getCoverageArea(slug)

  if (!area) notFound()

  const commonPests = getAreaCommonPests(area)
  // Intersecciones publicadas de esta zona. Vacio en las zonas de cobertura
  // secundaria, que por diseno no generan paginas hijas.
  const zonePests = publishedPestsForZone(area.slug)
  const relatedAreas = getRelatedAreas(area)
  const zoneFaqs = getZoneFaqs(area.slug)
  const quoteUrl = whatsappUrl(
    `Buen día. Necesito control de plagas en ${area.name}.`,
  )

  return (
    <>
      <JsonLd
        data={[
          areaServiceSchema(area),
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Cobertura', path: '/cobertura' },
            { name: area.name, path: `/cobertura/${area.slug}` },
          ]),
          // Espeja exactamente el texto del acordeón visible de más abajo.
          faqSchema(zoneFaqs),
        ]}
      />

      <article className="bg-white">
        <header className="relative isolate overflow-hidden bg-[#1C3266] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:42px_42px]"
          />
          <div className="container py-10 md:py-14">
            <nav
              aria-label="Migas de pan"
              className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/55"
            >
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
              <ArrowRight className="size-3" />
              <Link href="/cobertura" className="hover:text-white">
                Cobertura
              </Link>
              <ArrowRight className="size-3" />
              <span className="text-[#FFE95C]">{area.name}</span>
            </nav>

            <div className="mt-9 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FFDF00]/40 bg-[#FFDF00]/12 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#FFF0A0]">
                  <MapPin className="size-4" />
                  {area.state} · Atención 24 horas
                </div>
                <h1 className="t-h1 mt-6 max-w-4xl">
                  {area.h1}
                </h1>
                <p className="mt-6 max-w-2xl border-l-2 border-[#F07070] pl-5 text-base leading-7 text-white/72 md:text-lg">
                  {area.shortDescription}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={quoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#FFDF00] px-7 text-sm font-black text-[#1C3266] transition hover:-translate-y-0.5 hover:bg-[#FFE94D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <MessageCircle className="size-5" />
                    Solicitar inspección
                  </a>
                  <Link
                    href="/cobertura"
                    className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/28 px-7 text-sm font-black text-white transition hover:border-white/60 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F07070]"
                  >
                    Ver todas las zonas
                  </Link>
                </div>
              </div>

              <div className="grid min-h-[25rem] grid-cols-[1.1fr_0.9fr] gap-3">
                {commonPests.map((pest, index) => (
                  <Link
                    key={pest.slug}
                    href={`/servicios/${pest.slug}`}
                    className={`group relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/5 shadow-xl ${
                      index === 0 ? 'row-span-2' : ''
                    }`}
                  >
                    <Image
                      src={pest.image}
                      alt={`${pest.name}: plaga frecuente atendida por Fumigaciones Hernández en ${area.name}`}
                      fill
                      priority={index === 0}
                      sizes={
                        index === 0
                          ? '(max-width: 1023px) 55vw, 28vw'
                          : '(max-width: 1023px) 40vw, 18vw'
                      }
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C3266]/82 via-transparent to-transparent" />
                    <p className="absolute bottom-4 left-4 right-4 text-sm font-black">
                      {pest.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="py-14 md:py-20">
          <div className="container grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
                Contexto local
              </p>
              <h2 className="t-h2 mt-4 text-[#212121]">
                Control pensado para propiedades de {area.name}
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-[#5A6070]">
                {area.localContext.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="self-start rounded-[1.75rem] border border-black/8 bg-[#F5F8FC] p-6">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#B41B1E]">
                Espacios que atendemos
              </p>
              <ul className="mt-5 space-y-3">
                {area.propertyTypes.map((type) => (
                  <li
                    key={type}
                    className="flex items-center gap-3 text-sm font-bold text-[#424A43]"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-[#FFDF00]" />
                    {type}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-black/8 pt-6 text-sm leading-6 text-[#5A6070]">
                {area.response}
              </p>
            </aside>
          </div>
        </section>

        <section className="bg-[#F5F8FC] py-14 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
                Actividad frecuente en la zona
              </p>
              <h2 className="t-h2 mt-4 text-[#212121]">
                Plagas comunes en {area.name}
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {commonPests.map((pest) => (
                <Link
                  key={pest.slug}
                  href={`/servicios/${pest.slug}`}
                  className="group overflow-hidden rounded-[1.5rem] border border-black/8 bg-white transition hover:-translate-y-1 hover:border-[#FFDF00]/60 hover:shadow-[0_18px_42px_rgba(28,50,102,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDF00]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#FFF8DC]">
                    <Image
                      src={pest.image}
                      alt={pest.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-black text-[#212121]">
                      {pest.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#5A6070]">
                      {pest.cardDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#B41B1E]">
                      Ver tratamiento
                      <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {zonePests.length > 0 && (
          <section className="border-t border-black/10 bg-white py-14 md:py-20">
            <div className="container">
              <p className="t-kicker text-[#B41B1E]">
                Detalle por plaga
              </p>
              <h2 className="t-h2 mt-3 max-w-2xl text-[#212121]">
                Cada plaga se comporta distinto en {area.name}
              </h2>
              <p className="t-body mt-4 text-[#3E4650]">
                El tipo de inmueble y el entorno cambian por donde entra la
                plaga y como se trata. Estas paginas entran en ese detalle.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {zonePests.map((pestSlug) => {
                  const pest = getPestService(pestSlug)
                  if (!pest) return null
                  return (
                    <li key={pestSlug}>
                      <Link
                        href={intersectionPath(area.slug, pestSlug)}
                        className="group flex h-full items-center justify-between gap-3 rounded-lg border border-black/10 bg-white p-5 transition hover:border-[#1C3266] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C3266]"
                      >
                        <span className="t-body-sm font-semibold text-[#212121]">
                          {pest.name} en {area.name}
                        </span>
                        <ArrowRight className="size-4 shrink-0 text-[#1C3266] transition group-hover:translate-x-1" />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        )}

        <section className="bg-white py-14 md:py-20">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
                  Solución completa
                </p>
                <h2 className="t-h2 mt-4 text-[#212121]">
                  Los ocho servicios disponibles
                </h2>
              </div>
              <p className="text-base leading-7 text-[#5A6070]">
                La inspección confirma la especie y el tratamiento. Enlaza cada
                servicio para conocer señales, métodos y recomendaciones.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ALL_AREA_SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  className="group flex min-h-24 items-center gap-4 rounded-[1.25rem] border border-black/8 bg-[#F6F9FC] p-4 transition hover:-translate-y-0.5 hover:border-[#FFDF00]/60 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FFDF00]"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF8DC] text-[#B41B1E] transition group-hover:bg-[#FFDF00] group-hover:text-[#1C3266]">
                    <ShieldCheck className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-black text-[#212121]">
                      {service.name}
                    </span>
                    <span className="mt-1 block text-xs text-[#707770]">
                      Ver servicio
                    </span>
                  </span>
                  <ArrowRight className="ml-auto size-4 shrink-0 text-[#B41B1E]" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1C3266] py-18 text-white md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FFE95C]">
                Proceso Fumigaciones Hernández
              </p>
              <h2 className="t-h2 mt-4">
                De la primera señal al seguimiento
              </h2>
            </div>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-[1.5rem] border border-white/12 bg-white/6 p-6"
                >
                  <div className="flex items-center justify-between">
                    <step.icon className="size-6 text-[#FFE95C]" />
                    <span className="text-sm font-black text-[#F07070]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-black/8 bg-white py-14 md:py-20">
          <div className="container">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
                  Cobertura cercana
                </p>
                <h2 className="t-h2 mt-3 text-[#212121]">
                  Otras zonas de atención
                </h2>
              </div>
              <Link
                href="/cobertura"
                className="inline-flex items-center gap-2 text-sm font-black text-[#B41B1E] hover:text-[#1C3266]"
              >
                Ver las seis zonas
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedAreas.map((related) => (
                <Link
                  key={related.slug}
                  href={`/cobertura/${related.slug}`}
                  className="group rounded-[1.5rem] border border-black/8 bg-[#F6F9FC] p-5 transition hover:-translate-y-0.5 hover:border-[#FFDF00]/60 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FFDF00]"
                >
                  <span className="flex items-center justify-between gap-4">
                    <span>
                      <span className="text-xs font-black uppercase tracking-[0.12em] text-[#B41B1E]">
                        {related.state}
                      </span>
                      <span className="mt-2 block text-lg font-black text-[#212121]">
                        {related.name}
                      </span>
                    </span>
                    <MapPin className="size-5 text-[#FFDF00]" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ propia de la zona: responde sobre la logística de atenderla
            —si se llega, cómo se coordina, qué cambia según el inmueble— y no
            sobre una plaga concreta, que es lo que responden las páginas de
            intersección. Por eso ninguna se repite entre unas y otras. */}
        <section className="border-t border-black/10 bg-white py-14 md:py-20">
          <div className="container">
            <p className="t-kicker text-[#B41B1E]">Antes de llamar</p>
            <h2 className="t-h2 mt-3 max-w-2xl text-[#212121]">
              Preguntas frecuentes sobre {area.name}
            </h2>
            <Faq items={zoneFaqs} className="mt-6 max-w-3xl" />
          </div>
        </section>

        <section className="bg-[#F07070] py-14 text-[#212121]">
          <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em]">
                <Clock3 className="size-4" />
                Atención 24 horas en {area.name}
              </p>
              <h2 className="t-h2 mt-3 max-w-3xl">
                Coordine una revisión para su propiedad
              </h2>
            </div>
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-[#1C3266] px-7 text-sm font-black text-white transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C3266]"
            >
              <MessageCircle className="size-5" />
              Solicitar por WhatsApp
            </a>
          </div>
          <div className="container mt-7">
            <Link
              href="/cobertura"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#212121]/65 hover:text-[#212121]"
            >
              <ArrowLeft className="size-4" />
              Volver a cobertura
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
