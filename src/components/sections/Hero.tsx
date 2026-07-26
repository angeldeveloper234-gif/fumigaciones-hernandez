import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Star,
} from 'lucide-react'
import { FUMCON_HOME } from '@/lib/translations'
import { PEST_SERVICES } from '@/lib/services'
import { whatsappUrl } from '@/lib/site'

const copy = FUMCON_HOME.es
const heroImages = [
  PEST_SERVICES[4],
  PEST_SERVICES[0],
  PEST_SERVICES[3],
] as const

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#102414] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-35 [background-image:radial-gradient(circle_at_18%_12%,rgba(25,212,43,0.3),transparent_28%),radial-gradient(circle_at_85%_82%,rgba(251,192,45,0.2),transparent_25%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.45)_1px,transparent_1px)] [background-size:42px_42px]"
      />

      <div className="container grid min-h-[43rem] items-center gap-12 py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(25rem,0.92fr)] lg:gap-16 lg:py-20">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#19D42B]/40 bg-[#19D42B]/12 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.13em] text-[#8AF394]">
            <span className="size-2 rounded-full bg-[#FBC02D] shadow-[0_0_0_5px_rgba(251,192,45,0.12)]" />
            {copy.hero.eyebrow}
          </div>

          <h1 className="mt-7 max-w-4xl text-[clamp(2.65rem,7vw,5rem)] font-black leading-[0.98] tracking-[-0.045em] text-white [hyphens:auto] [overflow-wrap:break-word]">
            {copy.hero.title}{' '}
            <span className="text-[#19D42B]">{copy.hero.highlight}</span>
          </h1>

          <p className="mt-7 max-w-2xl border-l-2 border-[#FBC02D] pl-5 text-base leading-7 text-white/72 sm:text-lg">
            {copy.hero.description}
          </p>

          <div className="mt-7 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-white/12 bg-white/7 px-4 py-3 backdrop-blur-sm">
            <span className="flex size-9 items-center justify-center rounded-full bg-white font-black text-[#4285F4]">
              G
            </span>
            <div>
              <div className="flex gap-0.5" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-3.5 fill-[#FBC02D] text-[#FBC02D]"
                  />
                ))}
              </div>
              <p className="mt-0.5 text-xs font-bold text-white/78">
                {copy.hero.review}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl(
                'Hola, necesito una inspección sin costo para control de plagas.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#19D42B] px-7 text-sm font-black text-[#102414] shadow-[0_16px_36px_rgba(25,212,43,0.22)] transition hover:-translate-y-0.5 hover:bg-[#29E43A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <MessageCircle className="size-5" />
              {copy.hero.primaryCta}
            </a>
            <Link
              href="/servicios"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/28 px-7 text-sm font-extrabold text-white transition hover:border-white/60 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FBC02D]"
            >
              {copy.hero.secondaryCta}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <ul className="mt-9 grid gap-3 text-sm text-white/72 sm:grid-cols-3">
            {copy.hero.assurances.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#19D42B]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[3rem] bg-[#19D42B]/12 blur-2xl"
          />
          <div className="relative grid grid-cols-[1.1fr_0.9fr] gap-3">
            <div className="relative min-h-[31rem] overflow-hidden rounded-[2.25rem] border border-white/12 bg-white/5 shadow-2xl">
              <Image
                src={heroImages[0].image}
                alt="Alacrán, una de las plagas atendidas por Fumcon en el sureste"
                fill
                priority
                sizes="(max-width: 1023px) 55vw, 28vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102414]/72 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#A5F7AC]">
                  Respuesta especializada
                </p>
                <p className="mt-1 text-xl font-black">Control de alacranes</p>
              </div>
            </div>

            <div className="grid gap-3">
              {heroImages.slice(1).map((pest) => (
                <div
                  key={pest.slug}
                  className="relative min-h-[15rem] overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/5 shadow-xl"
                >
                  <Image
                    src={pest.image}
                    alt={`${pest.name}: tratamiento profesional de Fumcon`}
                    fill
                    sizes="(max-width: 1023px) 40vw, 18vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102414]/70 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 text-sm font-black">
                    {pest.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/14 bg-white p-4 text-[#212121] shadow-2xl sm:left-12 sm:right-auto sm:min-w-64">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#E9FBEA] text-[#118F1D]">
              <ShieldCheck className="size-6" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.11em]">
                Servicio certificado
              </p>
              <p className="mt-0.5 text-xs text-[#5A6070]">
                COFEPRIS · EPA · Lic. AP050271
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
