import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  CONTROL_METHODS,
  PEST_SERVICES,
  getPestService,
  getRelatedServices,
  getServiceOgImage,
} from '@/lib/services'
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from '@/lib/structured-data'
import { getCoverageArea } from '@/lib/locations'
import { publishedZonesForPest } from '@/data/intersections'
import { intersectionPath } from '@/data/matrix'
import { generatePageMetadata } from '@/lib/seo'
import { whatsappUrl } from '@/lib/site'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return PEST_SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const service = getPestService(slug)

  if (!service) {
    return generatePageMetadata({
      title: 'Servicio no encontrado',
      description: '',
      path: `/servicios/${slug}`,
      noIndex: true,
    })
  }

  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/servicios/${service.slug}`,
    image: getServiceOgImage(service.slug),
    // Los metaTitle de servicio ya son autosuficientes y llevan la geo dentro.
    // Sin esto, la plantilla añade " | Fumigaciones Hernández" y el title se va
    // a ~90 caracteres, muy por encima de lo que Google muestra.
    absoluteTitle: true,
    keywords: [
      `control de ${service.name.toLowerCase()} Tampico`,
      `fumigación ${service.name.toLowerCase()} Ciudad Madero`,
      `${service.name.toLowerCase()} Altamira`,
      'inspección de plagas',
      'Fumigaciones Hernández',
    ],
  })
}

const processSteps = [
  {
    title: 'Inspeccionamos',
    description:
      'Revisamos señales, refugios, rutas de entrada y condiciones que mantienen la actividad.',
    icon: SearchCheck,
  },
  {
    title: 'Diseñamos el tratamiento',
    description:
      'Elegimos producto, método y puntos de aplicación de acuerdo con la plaga y el inmueble.',
    icon: ShieldCheck,
  },
  {
    title: 'Aplicamos con precisión',
    description:
      'El técnico interviene las áreas necesarias y explica las indicaciones de seguridad y reingreso.',
    icon: Sparkles,
  },
  {
    title: 'Damos seguimiento',
    description:
      'Verificamos la evolución, reforzamos los puntos necesarios y dejamos acciones preventivas.',
    icon: CheckCircle2,
  },
] as const

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const service = getPestService(slug)

  if (!service) notFound()

  const related = getRelatedServices(service)
  // Zonas con pagina de interseccion publicada para esta plaga. Vacio en las
  // tres plagas que quedan fuera de la matriz por diseno.
  const pestZones = publishedZonesForPest(service.slug)
  const quoteUrl = whatsappUrl(
    `Hola, necesito una inspección para control de ${service.name.toLowerCase()} en mi propiedad.`,
  )

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Servicios', path: '/servicios' },
            {
              name: service.name,
              path: `/servicios/${service.slug}`,
            },
          ]),
        ]}
      />

      <article className="bg-white">
        <header className="relative isolate overflow-hidden bg-[#1C3266] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:42px_42px]"
          />
          <div className="container py-12 md:py-16">
            <nav
              aria-label="Migas de pan"
              className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/55"
            >
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
              <ArrowRight className="size-3" />
              <Link href="/servicios" className="hover:text-white">
                Servicios
              </Link>
              <ArrowRight className="size-3" />
              <span className="text-[#FFE95C]">{service.name}</span>
            </nav>

            <div className="mt-9 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FFDF00]/40 bg-[#FFDF00]/12 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#FFF0A0]">
                  <span className="size-2 rounded-full bg-[#F07070]" />
                  Servicio especializado con garantía
                </div>
                <h1 className="mt-6 max-w-4xl text-[clamp(2.45rem,6vw,4.75rem)] font-black leading-[0.96] tracking-[-0.045em] [hyphens:auto] [overflow-wrap:break-word]">
                  {service.h1}
                </h1>
                <p className="mt-6 max-w-2xl border-l-2 border-[#F07070] pl-5 text-base leading-7 text-white/72 md:text-lg">
                  {service.intro}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={quoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#FFDF00] px-7 text-sm font-black text-[#1C3266] transition hover:-translate-y-0.5 hover:bg-[#FFE94D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <MessageCircle className="size-5" />
                    Solicitar inspección sin costo
                  </a>
                  <Link
                    href="/servicios"
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/28 px-7 text-sm font-black text-white transition hover:border-white/60 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F07070]"
                  >
                    Ver todos los servicios
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/12 bg-white/5 shadow-2xl md:min-h-[30rem]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 46vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3266]/78 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/12 bg-[#1C3266]/82 p-4 backdrop-blur-sm">
                  <p className="text-xs font-black uppercase tracking-[0.13em] text-[#FFE95C]">
                    Fumigaciones Hernández
                  </p>
                  <p className="mt-1 text-sm font-bold text-white/78">
                    Tampico · Madero · Altamira · Atención 24 horas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container py-18 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
                El problema
              </p>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3.35rem)] font-black leading-[1] tracking-[-0.04em] text-[#212121]">
                Por qué conviene actuar desde las primeras señales
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-[#5A6070]">
                {service.problem.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <aside className="self-start rounded-[1.75rem] border border-black/8 bg-[#F5F8FC] p-6 shadow-[0_16px_40px_rgba(28,50,102,0.07)] lg:sticky lg:top-28">
              <p className="text-xs font-black uppercase tracking-[0.15em] text-[#B41B1E]">
                Señales de actividad
              </p>
              <h2 className="mt-3 text-2xl font-black leading-tight text-[#212121]">
                Qué conviene observar
              </h2>
              <ul className="mt-6 space-y-4">
                {service.signs.map((sign) => (
                  <li
                    key={sign}
                    className="flex items-start gap-3 text-sm leading-6 text-[#4F5663]"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#FFDF00]" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1C3266] px-5 text-sm font-black text-white transition hover:bg-[#183C20] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#FFDF00]"
              >
                Consultar por WhatsApp
              </a>
            </aside>
          </div>
        </div>

        <section className="bg-[#1C3266] py-18 text-white md:py-24">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FFE95C]">
                  Tratamiento profesional
                </p>
                <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1] tracking-[-0.04em]">
                  Método definido después de inspeccionar
                </h2>
              </div>
              <p className="text-base leading-7 text-white/68">
                {service.treatmentIntro}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {service.methods.map((method, index) => (
                <article
                  key={method}
                  className="rounded-[1.75rem] border border-white/12 bg-white/6 p-6"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-[#FFDF00] text-lg font-black text-[#1C3266]">
                      {index + 1}
                    </span>
                    <span className="rounded-full border border-[#F07070]/35 bg-[#F07070]/10 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-[#F07070]">
                      Método Fumigaciones Hernández
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-black [hyphens:auto] [overflow-wrap:break-word]">
                    {method}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {CONTROL_METHODS[method]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-18 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
                Cómo trabajamos
              </p>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1] tracking-[-0.04em] text-[#212121]">
                Un proceso claro de principio a fin
              </h2>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-[1.5rem] border border-black/8 bg-[#F6F9FC] p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-[#FFF8DC] text-[#B41B1E]">
                      <step.icon className="size-5" />
                    </span>
                    <span className="text-sm font-black text-[#FFDF00]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-black text-[#212121]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5A6070]">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#F5F8FC] py-18 md:py-24">
          <div className="container grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-black/8 bg-white p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#B41B1E]">
                Para sostener el resultado
              </p>
              <h2 className="mt-3 text-2xl font-black text-[#212121]">
                Recomendaciones preventivas
              </h2>
              <ul className="mt-6 space-y-4">
                {service.recommendations.map((recommendation) => (
                  <li
                    key={recommendation}
                    className="flex items-start gap-3 text-sm leading-6 text-[#5A6070]"
                  >
                    <Check className="mt-1 size-4 shrink-0 text-[#B41B1E]" />
                    <span>{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] bg-[#F07070] p-6 text-[#212121] md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.16em]">
                Incluido en el servicio
              </p>
              <h2 className="mt-3 text-2xl font-black">
                Acompañamiento más allá de la aplicación
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/52 px-4 py-3 text-sm font-bold"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-[#B41B1E]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white py-18 md:py-24">
          <div className="container grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
                Dudas frecuentes
              </p>
              <h2 className="mt-4 text-[clamp(2rem,5vw,3.35rem)] font-black leading-[1] tracking-[-0.04em] text-[#212121]">
                Antes del tratamiento
              </h2>
              <p className="mt-5 text-base leading-7 text-[#5A6070]">
                Cada propiedad es diferente. Estas respuestas ayudan a
                prepararte; el técnico confirmará las indicaciones después de
                inspeccionar.
              </p>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <section
                  key={faq.question}
                  className="rounded-[1.5rem] border border-black/8 bg-[#F6F9FC] p-6"
                >
                  <h3 className="text-lg font-black leading-snug text-[#212121]">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5A6070]">
                    {faq.answer}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </section>

        {pestZones.length > 0 && (
          <section className="border-t border-black/10 bg-[#F5F8FC] py-18 md:py-24">
            <div className="container">
              <p className="t-kicker text-[#B41B1E]">Por ciudad</p>
              <h2 className="t-h2 mt-3 max-w-2xl text-[#212121]">
                {service.name} en cada ciudad de la conurbación
              </h2>
              <p className="t-body mt-4 text-[#3E4650]">
                No es la misma plaga en el centro de Tampico que en una casa
                costera de Madero o en una nave de Altamira. Estas páginas
                explican la diferencia.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {pestZones.map((zoneSlug) => {
                  const zone = getCoverageArea(zoneSlug)
                  if (!zone) return null
                  return (
                    <li key={zoneSlug}>
                      <Link
                        href={intersectionPath(zoneSlug, service.slug)}
                        className="group flex h-full items-center justify-between gap-3 rounded-lg border border-black/10 bg-white p-5 transition hover:border-[#1C3266] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C3266]"
                      >
                        <span className="t-body-sm font-semibold text-[#212121]">
                          {service.name} en {zone.name}
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

        <section className="border-t border-black/8 bg-white py-18 md:py-24">
          <div className="container">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#B41B1E]">
                  También atendemos
                </p>
                <h2 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-black leading-[1] tracking-[-0.04em] text-[#212121]">
                  Servicios relacionados
                </h2>
              </div>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-sm font-black text-[#B41B1E] hover:text-[#1C3266]"
              >
                Ver todos
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/servicios/${item.slug}`}
                  className="group overflow-hidden rounded-[1.5rem] border border-black/8 bg-[#F6F9FC] transition hover:-translate-y-1 hover:border-[#FFDF00]/60 hover:shadow-[0_18px_42px_rgba(28,50,102,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDF00]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#FFF8DC]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-black text-[#212121] transition group-hover:text-[#B41B1E]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#5A6070]">
                      {item.cardDescription}
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

        <section className="bg-[#1C3266] py-16 text-white">
          <div className="container flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#FFE95C]">
                Cotización e inspección sin costo
              </p>
              <h2 className="mt-3 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.05] tracking-[-0.035em]">
                Cuéntanos dónde viste {service.name.toLowerCase()}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Atendemos hogares, negocios e industrias en Tampico, Ciudad
                Madero y Altamira, con atención las 24 horas.
              </p>
            </div>
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-[#FFDF00] px-7 text-sm font-black text-[#1C3266] transition hover:-translate-y-0.5 hover:bg-[#FFE94D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <MessageCircle className="size-5" />
              Solicitar inspección
            </a>
          </div>
          <div className="container mt-8">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/58 transition hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Volver a servicios
            </Link>
          </div>
        </section>
      </article>
    </>
  )
}
