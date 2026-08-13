import {
  CloudFog,
  Crosshair,
  ShieldCheck,
  SprayCan,
  Wind,
} from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { HERNANDEZ_HOME } from '@/lib/translations'

const copy = HERNANDEZ_HOME.es.methods
const icons = {
  spray: SprayCan,
  target: Crosshair,
  wind: Wind,
  shield: ShieldCheck,
  cloud: CloudFog,
} as const

export function Methods() {
  return (
    <section className="section-y relative isolate overflow-hidden bg-[#1C3266] text-white">
      <SectionBackground id="sec-tecnica" />
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 size-[30rem] rounded-full bg-[#FFDF00]/10 blur-3xl"
      />
      <div className="container relative">
        <div className="grid gap-8 border-b border-white/12 pb-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="t-kicker text-[#FFE95C]">{copy.eyebrow}</p>
            <h2 className="t-h2 mt-3 max-w-3xl">{copy.title}</h2>
          </div>
          <p className="t-body text-white/90 lg:justify-self-end">
            {copy.description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {copy.items.map((method, index) => {
            const Icon = icons[method.icon]
            return (
              <FadeUp key={method.title} delay={index * 0.05}>
                <article className="h-full rounded-[1.35rem] border border-white/12 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-[#FFDF00]/55 hover:bg-white/[0.075]">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#FFDF00] text-[#1C3266]">
                    <Icon className="size-6" />
                  </div>
                  {/* Amarillo y no el coral de marca: sobre fondo oscuro con
                      foto detrás, #F07070 se queda en 2.7:1 y no llega a AA. */}
                  <p className="mt-6 text-xs font-black tracking-[0.14em] text-[#FFE95C]">
                    0{index + 1}
                  </p>
                  <h3 className="t-h3 mt-2 [hyphens:auto] [overflow-wrap:break-word]">
                    {method.title}
                  </h3>
                  <p className="t-body-sm mt-3 text-white/90">
                    {method.description}
                  </p>
                </article>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
