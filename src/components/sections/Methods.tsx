import {
  CloudFog,
  Crosshair,
  ShieldCheck,
  SprayCan,
  Wind,
} from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { FUMCON_HOME } from '@/lib/translations'

const copy = FUMCON_HOME.es.methods
const icons = {
  spray: SprayCan,
  target: Crosshair,
  wind: Wind,
  shield: ShieldCheck,
  cloud: CloudFog,
} as const

export function Methods() {
  return (
    <section className="relative overflow-hidden bg-[#102414] py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 size-[30rem] rounded-full bg-[#19D42B]/10 blur-3xl"
      />
      <div className="container relative">
        <div className="grid gap-8 border-b border-white/12 pb-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#78ED84]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.04] tracking-[-0.035em]">
              {copy.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/65 lg:justify-self-end">
            {copy.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {copy.items.map((method, index) => {
            const Icon = icons[method.icon]
            return (
              <FadeUp key={method.title} delay={index * 0.05}>
                <article className="h-full rounded-[1.35rem] border border-white/12 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-[#19D42B]/55 hover:bg-white/[0.075]">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#19D42B] text-[#102414]">
                    <Icon className="size-6" />
                  </div>
                  <p className="mt-7 text-xs font-black tracking-[0.14em] text-[#FBC02D]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 text-[clamp(0.9375rem,calc(1.05rem-0.125vw),1rem)] font-black leading-tight tracking-[-0.02em] [hyphens:auto] [overflow-wrap:break-word]">
                    {method.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
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
