import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { HERNANDEZ_HOME } from '@/lib/translations'
import { SITE, whatsappUrl } from '@/lib/site'

const copy = HERNANDEZ_HOME.es

/**
 * Hero partido: argumento a la izquierda, ficha operativa a la derecha.
 *
 * Reemplaza la composición heredada del template —mosaico de tres fotos de
 * plagas más una insignia de Google con cinco estrellas— por dos motivos.
 *
 * El primero es que la insignia era prueba social inventada: el negocio no
 * tiene esas reseñas. `CLAUDE.md` §5.2 y §8 lo prohíben sin matices.
 *
 * El segundo es de oficio: quien llega acá con una plaga encima busca a quién
 * llamar y si cubren su zona. Un teléfono grande y verificable convierte más
 * que tres macros de insectos, y de paso aleja la composición de la de
 * fumcon-next, que apoya todo el hero sobre una foto a sangre.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1C3266] text-white">
      <SectionBackground id="hero" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:44px_44px]"
      />

      {/* El reparto 1.25/0.75 no es estético: a 1280px deja la columna de
          texto en ~735px, y el H1 necesita al menos 700 para entrar en dos
          renglones, que es el límite de la fase 1. */}
      <div className="container grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(19rem,0.75fr)] lg:gap-14 lg:py-16">
        <div className="relative z-10">
          <p className="t-kicker border-l-2 border-[#FFDF00] pl-3 text-[#FFE95C]">
            {copy.hero.eyebrow}
          </p>

          <h1 className="t-h1 mt-4 max-w-3xl text-white [hyphens:auto] [overflow-wrap:break-word]">
            {copy.hero.title}{' '}
            <span className="text-[#FFDF00]">{copy.hero.highlight}</span>
          </h1>

          <p className="t-body mt-4 text-white/80">{copy.hero.description}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl(
                'Buen día. Tengo un problema de plagas y quiero una revisión sin costo.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[#FFDF00] px-7 text-sm font-bold text-[#1C3266] transition hover:bg-[#FFE94D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <MessageCircle className="size-5" />
              {copy.hero.primaryCta}
            </a>
            <Link
              href="/servicios"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-white/30 px-7 text-sm font-semibold text-white transition hover:border-white/70 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDF00]"
            >
              {copy.hero.secondaryCta}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <ul className="mt-7 grid gap-3 text-sm text-white/80 sm:grid-cols-3">
            {copy.hero.assurances.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#FFDF00]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ficha operativa. Todo lo de acá sale de SITE: nada es decorativo ni
            inventado, y por eso puede encabezar la página sin riesgo. */}
        <aside className="relative z-10 rounded-lg border border-white/15 bg-[#16294F]/85 p-6 backdrop-blur-sm sm:p-7">
          <p className="t-kicker text-[#FFE95C]">{copy.hero.cardLabel}</p>

          <a
            href={SITE.phoneHref}
            className="mt-3 flex items-center gap-3 text-white transition hover:text-[#FFDF00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFDF00]"
          >
            <Phone className="size-6 shrink-0 text-[#FFDF00]" />
            <span className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              {SITE.phone}
            </span>
          </a>

          <dl className="mt-6 space-y-4 border-t border-white/15 pt-5 text-sm">
            <div className="flex gap-3">
              <Clock3 className="mt-0.5 size-4 shrink-0 text-[#FFE95C]" />
              <div>
                <dt className="font-semibold text-white">Horario</dt>
                <dd className="mt-0.5 text-white/80">
                  {SITE.officeHoursLabel} · {SITE.openingHoursLabel}
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#FFE95C]" />
              <div>
                <dt className="font-semibold text-white">Oficina</dt>
                <dd className="mt-0.5 text-white/80">
                  {SITE.address.streetAddress}, {SITE.address.neighborhood},{' '}
                  {SITE.address.addressLocality}
                </dd>
              </div>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
