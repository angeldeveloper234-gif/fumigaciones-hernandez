import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumb, type Crumb } from '@/components/ui/Breadcrumb'
import { Faq } from '@/components/ui/Faq'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { resolvePestHero } from '@/config/section-media'
import {
  getIntersection,
  hasIntersection,
  publishedIntersections,
} from '@/data/intersections'
import { intersectionPath } from '@/data/matrix'
import { getCoverageArea } from '@/lib/locations'
import { getPestService } from '@/lib/services'
import { pestMedia } from '@/config/pest-media'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { generatePageMetadata } from '@/lib/seo'
import { SITE, whatsappUrl } from '@/lib/site'

type Params = { slug: string; plaga: string }

/**
 * Una combinación que no está declarada con contenido devuelve 404, no una
 * página vacía. `dynamicParams = false` lo hace estructural: Next ni siquiera
 * intenta renderizar lo que `generateStaticParams` no listó.
 */
export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return publishedIntersections().map(({ zone, pest }) => ({
    slug: zone,
    plaga: pest,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug, plaga } = await params
  const content = getIntersection(slug, plaga)

  if (!content) {
    return generatePageMetadata({
      title: 'Página no encontrada',
      description: '',
      path: intersectionPath(slug, plaga),
      noIndex: true,
    })
  }

  return generatePageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: intersectionPath(content.zone, content.pest),
    image: `/images/og/pests/${content.pest}.jpg`,
    absoluteTitle: true,
  })
}

export default async function IntersectionPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug, plaga } = await params
  const content = getIntersection(slug, plaga)
  if (!content) notFound()

  const area = getCoverageArea(content.zone)
  const service = getPestService(content.pest)
  if (!area || !service) notFound()

  const media = pestMedia[content.pest]
  // Las relacionadas se filtran por contenido publicado, no por la matriz:
  // durante la fase 3B una combinacion puede estar declarada y todavia no
  // escrita, y enlazarla dejaria un 404 en produccion.
  const related = content.related.filter((r) => hasIntersection(r.zone, r.pest))
  const crumbs: Crumb[] = [
    { name: 'Inicio', path: '/' },
    { name: 'Cobertura', path: '/cobertura' },
    { name: area.name, path: `/cobertura/${area.slug}` },
    { name: service.name, path: intersectionPath(content.zone, content.pest) },
  ]

  const quoteUrl = whatsappUrl(
    `Buen día. Tengo ${service.name.toLowerCase()} en ${area.name} y quiero pedir la revisión.`,
  )

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          // Espeja exactamente el texto del acordeón visible de más abajo.
          faqSchema(content.faqs),
        ]}
      />

      <article className="bg-white">
        <header className="relative isolate overflow-hidden bg-[#1C3266] text-white">
          {/* Fondo de hero resuelto desde la foto de la plaga. */}
          <SectionBackground media={resolvePestHero(media.src)} priority />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:44px_44px]"
          />
          <div className="container grid gap-10 py-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-center lg:py-16">
            <div>
              <Breadcrumb items={crumbs} tone="dark" />
              <h1 className="t-h1 mt-5 text-white">{content.h1}</h1>
              <p className="t-body mt-4 text-white/90">{content.intro[0]}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={quoteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-md bg-[#FFDF00] px-6 text-sm font-bold text-[#1C3266] transition hover:bg-[#FFE94D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <MessageCircle className="size-5" />
                  Pida su revisión
                </a>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDF00]"
                >
                  <Phone className="size-4" />
                  {SITE.phone}
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/15">
              <Image
                src={media.src}
                alt={media.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 32vw"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <section className="container py-10 md:py-14">
          <div className="max-w-prose space-y-4">
            {content.intro.slice(1).map((p) => (
              <p key={p} className="t-body text-[#3E4650]">
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="border-y border-black/10 bg-[#F5F8FC]">
          <div className="container py-12 md:py-16">
            <h2 className="t-h2 max-w-2xl text-[#212121]">
              {content.localContext.heading}
            </h2>
            <div className="mt-5 max-w-prose space-y-4">
              {content.localContext.paragraphs.map((p) => (
                <p key={p} className="t-body text-[#3E4650]">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <h2 className="t-h2 max-w-2xl text-[#212121]">
            {content.signs.heading}
          </h2>
          <p className="t-body mt-4 text-[#3E4650]">{content.signs.intro}</p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {content.signs.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg border border-black/10 p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#B41B1E]" />
                <span className="t-body-sm text-[#3E4650]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-black/10 bg-[#F5F8FC]">
          <div className="container grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
            <div>
              <h2 className="t-h2 max-w-2xl text-[#212121]">
                {content.howWeWork.heading}
              </h2>
              <div className="mt-5 max-w-prose space-y-4">
                {content.howWeWork.paragraphs.map((p) => (
                  <p key={p} className="t-body text-[#3E4650]">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <aside className="h-fit rounded-lg border border-black/10 bg-white p-6">
              <p className="t-kicker flex items-center gap-2 text-[#B41B1E]">
                <ClipboardList aria-hidden="true" className="size-4" />
                Puntos que se revisan
              </p>
              <ul className="mt-4 space-y-3">
                {content.howWeWork.checks.map((c) => (
                  <li
                    key={c}
                    className="t-body-sm flex gap-2.5 text-[#3E4650]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-[#FFDF00]"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <h2 className="t-h2 max-w-2xl text-[#212121]">
            Preguntas sobre {service.name.toLowerCase()} en {area.name}
          </h2>
          <Faq items={content.faqs} className="mt-6 max-w-3xl" />
        </section>

        {/* Enlazado interno: a la zona, al servicio y a dos intersecciones
            relacionadas. Ninguna página de la matriz queda huérfana. */}
        <section className="border-t border-black/10 bg-[#F5F8FC]">
          <div className="container py-12 md:py-16">
            <h2 className="t-h2 text-[#212121]">Siga por acá</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <RelatedLink
                href={`/cobertura/${area.slug}`}
                kicker="Zona"
                label={`Control de plagas en ${area.name}`}
              />
              <RelatedLink
                href={`/servicios/${service.slug}`}
                kicker="Servicio"
                label={`${service.name} en toda la zona conurbada`}
              />
              {related.map((r) => {
                const rArea = getCoverageArea(r.zone)
                const rService = getPestService(r.pest)
                if (!rArea || !rService) return null
                return (
                  <RelatedLink
                    key={intersectionPath(r.zone, r.pest)}
                    href={intersectionPath(r.zone, r.pest)}
                    kicker="También"
                    label={`${rService.name} en ${rArea.name}`}
                  />
                )
              })}
            </ul>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <div className="rounded-lg bg-[#1C3266] p-7 text-white sm:p-10">
            <h2 className="t-h2 max-w-xl">
              Le decimos qué encontramos antes de cobrar nada
            </h2>
            <p className="t-body mt-4 text-white/90">
              La revisión y el presupuesto no se cobran. Marque al{' '}
              {SITE.phone} o mándenos un mensaje contando qué está viendo y en
              qué colonia de {area.name}.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.phoneHref}
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-md bg-[#FFDF00] px-6 text-sm font-bold text-[#1C3266] transition hover:bg-[#FFE94D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Phone className="size-4" />
                {SITE.phone}
              </a>
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDF00]"
              >
                <MessageCircle className="size-4" />
                Mándenos un mensaje
              </a>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

function RelatedLink({
  href,
  kicker,
  label,
}: {
  href: string
  kicker: string
  label: string
}) {
  return (
    <li>
      <Link
        href={href}
        className="group flex h-full flex-col justify-between gap-4 rounded-lg border border-black/10 bg-white p-5 transition hover:border-[#1C3266] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C3266]"
      >
        <span className="t-kicker text-[#B41B1E]">{kicker}</span>
        <span className="flex items-end justify-between gap-3">
          <span className="t-body-sm font-semibold text-[#212121]">
            {label}
          </span>
          <ArrowRight className="size-4 shrink-0 text-[#1C3266] transition group-hover:translate-x-1" />
        </span>
      </Link>
    </li>
  )
}
