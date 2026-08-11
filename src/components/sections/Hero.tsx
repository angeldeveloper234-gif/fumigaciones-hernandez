import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Star,
} from 'lucide-react'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { HERNANDEZ_HOME } from '@/lib/translations'
import { PEST_SERVICES } from '@/lib/services'
import { whatsappUrl } from '@/lib/site'

const copy = HERNANDEZ_HOME.es
// Las tres plagas cabeza de estrategia en la zona conurbada.
const heroImages = [
  PEST_SERVICES[0], // moscos
  PEST_SERVICES[1], // cucarachas
  PEST_SERVICES[2], // termitas
] as const

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1C3266] text-white">
      <SectionBackground id="hero" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-35 [background-image:radial-gradient(circle_at_18%_12%,rgba(255,223,0,0.3),transparent_28%),radial-gradient(circle_at_85%_82%,rgba(180,27,30,0.2),transparent_25%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:42px_42px]"
      />

      <div className="container grid min-h-[34rem] items-center gap-10 py-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(25rem,0.92fr)] lg:gap-14 lg:py-16">
        <div className="relative z-10 max-w-3xl">
          <div className="t-kicker inline-flex items-center gap-2 rounded-full border border-[#FFDF00]/40 bg-[#FFDF00]/12 px-4 py-2 text-[#FFF0A0]">
            <span className="size-2 rounded-full bg-[#F07070] shadow-[0_0_0_5px_rgba(180,27,30,0.12)]" />
            {copy.hero.eyebrow}
          </div>

          <h1 className="t-h1 mt-4 max-w-3xl text-white [hyphens:auto] [overflow-wrap:break-word]">
            {copy.hero.title}{' '}
            <span className="text-[#FFDF00]">{copy.hero.highlight}</span>
          </h1>

          <p className="t-body mt-4 border-l-2 border-[#F07070] pl-5 text-white/80">
            {copy.hero.description}
          </p>

          <div className="mt-5 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-white/12 bg-white/7 px-4 py-3 backdrop-blur-sm">
            <span className="flex size-9 items-center justify-center rounded-full bg-white font-black text-[#4285F4]">
              G
            </span>
            <div>
              <div className="flex gap-0.5" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-3.5 fill-[#F07070] text-[#F07070]"
                  />
                ))}
              </div>
              <p className="mt-0.5 text-xs font-bold text-white/80">
                {copy.hero.review}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl(
                'Hola, necesito una inspección sin costo para control de plagas.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#FFDF00] px-7 text-sm font-black text-[#1C3266] shadow-[0_16px_36px_rgba(255,223,0,0.22)] transition hover:-translate-y-0.5 hover:bg-[#FFE94D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <MessageCircle className="size-5" />
              {copy.hero.primaryCta}
            </a>
            <Link
              href="/servicios"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/28 px-7 text-sm font-extrabold text-white transition hover:border-white/60 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F07070]"
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

        <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[3rem] bg-[#FFDF00]/12 blur-2xl"
          />
          <div className="relative grid grid-cols-[1.1fr_0.9fr] gap-3">
            <div className="relative min-h-[25rem] overflow-hidden rounded-[2.25rem] border border-white/12 bg-white/5 shadow-2xl">
              <Image
                src={heroImages[0].image}
                alt={`${heroImages[0].name}: plaga atendida por Fumigaciones Hernández en Tampico, Madero y Altamira`}
                fill
                priority
                sizes="(max-width: 1023px) 55vw, 28vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C3266]/72 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="t-kicker text-[#FFE95C]">
                  Respuesta especializada
                </p>
                <p className="mt-1 text-lg font-black">
                  Control de {heroImages[0].name.toLowerCase()}
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              {heroImages.slice(1).map((pest) => (
                <div
                  key={pest.slug}
                  className="relative min-h-[12rem] overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/5 shadow-xl"
                >
                  <Image
                    src={pest.image}
                    alt={`${pest.name}: tratamiento profesional de Fumigaciones Hernández`}
                    fill
                    sizes="(max-width: 1023px) 40vw, 18vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C3266]/70 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 text-sm font-black">
                    {pest.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/14 bg-white p-4 text-[#212121] shadow-2xl sm:left-12 sm:right-auto sm:min-w-64">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF8DC] text-[#B41B1E]">
              <ShieldCheck className="size-6" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.11em]">
                Zona conurbada
              </p>
              {/* TODO(cliente): si el negocio tiene licencia sanitaria o
                  certificaciones, este es el lugar donde más pesan. */}
              <p className="mt-0.5 text-xs text-[#5A6070]">
                Tampico · Madero · Altamira
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
